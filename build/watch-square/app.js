let $style$1411120752 = {
  "@info": {
    "styleObjectId": 1411120752
  }
};
const $app_style$1411120752 = $style$1411120752;
const network = $app_require$("@app-module/system.fetch");
const sysFetch = $app_require$("@app-module/system.fetch");
const request = $app_require$("@app-module/system.request");
const file = $app_require$("@app-module/system.file");
const prompt = $app_require$("@app-module/system.prompt");
const brightness = $app_require$("@app-module/system.brightness");
const downloadTasks = {};
const SERVER = "http://127.0.0.1:23101";
const BATCH_SIZE = 5;
function getFetch() {
  if (sysFetch && typeof sysFetch.fetch === "function") {
    return (options) => sysFetch.fetch(options);
  }
  if (typeof network === "function") return network;
  if (network && typeof network.fetch === "function") {
    return (options) => network.fetch(options);
  }
  return null;
}
function ensureDir(path) {
  return new Promise((resolve) => {
    file.mkdir({
      uri: path,
      recursive: true,
      success: () => resolve({
        success: true
      }),
      fail: (data, code) => {
        file.access({
          uri: path,
          success: () => resolve({
            success: true
          }),
          fail: (d, c) => resolve({
            success: false,
            msg: code
          })
        });
      }
    });
  });
}
function listFiles(uri) {
  return new Promise((resolve) => {
    file.list({
      uri,
      success: (data) => resolve(data.fileList || []),
      fail: () => resolve([])
    });
  });
}
function readText(uri) {
  return new Promise((r) => file.readText({
    uri,
    success: (d) => r(d.text),
    fail: () => r(null)
  }));
}
function deleteFile(uri) {
  return new Promise((r) => file.delete({
    uri,
    success: () => r(true),
    fail: () => r(false)
  }));
}
function saveChapterFile(dir, index, content) {
  return new Promise((r) => file.writeText({
    uri: `${dir}/${index}.txt`,
    text: content,
    success: () => r(true),
    fail: (data, code) => {
      console.log(`[App] saveChapter fail ${index}: ${code}`);
      r(false);
    }
  }));
}
function setScreenOn(on) {
  try {
    brightness.setKeepScreenOn({
      keepScreenOn: on,
      success: () => console.log(`[App] KeepScreenOn: ${on}`),
      fail: (data, code) => console.log(`[App] KeepScreenOn fail: ${code}`)
    });
  } catch (e) {
    console.log(`[App] brightness error: ${e}`);
  }
}
function fetchCatalog(bookId) {
  return new Promise((resolve) => {
    const fetchFn = getFetch();
    if (!fetchFn) {
      resolve(null);
      return;
    }
    fetchFn({
      url: `${SERVER}/api/novel/catalog?id=${bookId}`,
      method: "GET",
      responseType: "json",
      success: (res) => {
        if (res.code === 200 || res.code === 206) {
          let data = res.data;
          if (typeof data === "string") {
            try {
              data = JSON.parse(data);
            } catch (e) {
              resolve(null);
              return;
            }
          }
          let chapters = null;
          if (data && Array.isArray(data.chapters)) {
            chapters = data.chapters;
          } else if (data && data.data && Array.isArray(data.data.chapters)) {
            chapters = data.data.chapters;
          }
          console.log(`[App] fetchCatalog: got ${chapters ? chapters.length : 0} chapters`);
          resolve(chapters);
        } else {
          console.log(`[App] fetchCatalog: unexpected code ${res.code}`);
          resolve(null);
        }
      },
      fail: (data, code) => {
        console.log(`[App] fetchCatalog fail: ${code}`);
        resolve(null);
      }
    });
  });
}
function downloadBatchBySystem(bookId, from, to) {
  return new Promise((resolve) => {
    if (!request || typeof request.download !== "function") {
      resolve(null);
      return;
    }
    const tempUri = `internal://files/_temp_batch_${bookId}.json`;
    const url = `${SERVER}/api/novel/chapters?id=${bookId}&from=${from}&to=${to}&dl=1`;
    request.download({
      url,
      filename: tempUri,
      success: (data) => {
        const token = data.token;
        request.onDownloadComplete({
          token,
          success: () => {
            file.access({
              uri: tempUri,
              success: () => resolve(tempUri),
              fail: () => {
                console.log(`[App] Batch temp file not found`);
                resolve(null);
              }
            });
          },
          fail: (data2, code) => {
            console.log(`[App] Batch download complete fail: ${code}`);
            resolve(null);
          }
        });
      },
      fail: (data, code) => {
        console.log(`[App] Batch download fail: ${code}`);
        resolve(null);
      }
    });
  });
}
async function splitBatchFile(tempUri, dirPath, indices, existingSet) {
  let jsonText = await readText(tempUri);
  if (!jsonText) {
    console.log("[App] Failed to read batch temp file");
    return {
      saved: 0,
      failed: indices.length
    };
  }
  let batchData = null;
  try {
    batchData = JSON.parse(jsonText);
  } catch (e) {
    console.log(`[App] Failed to parse batch JSON: ${e}`);
    return {
      saved: 0,
      failed: indices.length
    };
  }
  jsonText = null;
  let saved = 0;
  let failed = 0;
  for (const idx of indices) {
    const key = String(idx);
    if (batchData[key]) {
      const ok = await saveChapterFile(dirPath, idx, batchData[key]);
      batchData[key] = null;
      if (ok) {
        existingSet.add(`${idx}.txt`);
        saved++;
      } else {
        failed++;
      }
      await new Promise((r) => setTimeout(r, 50));
    } else {
      failed++;
    }
  }
  batchData = null;
  return {
    saved,
    failed
  };
}
function downloadChapterBatch(bookId, from, to) {
  return new Promise((resolve) => {
    const fetchFn = getFetch();
    if (!fetchFn) {
      resolve(null);
      return;
    }
    fetchFn({
      url: `${SERVER}/api/novel/chapters?id=${bookId}&from=${from}&to=${to}`,
      method: "GET",
      responseType: "json",
      success: (res) => {
        if (res.code === 200 || res.code === 206) {
          let data = res.data;
          if (typeof data === "string") {
            try {
              data = JSON.parse(data);
            } catch (e) {
              resolve(null);
              return;
            }
          }
          resolve(data);
        } else {
          resolve(null);
        }
      },
      fail: () => resolve(null)
    });
  });
}
function downloadChapterOne(bookId, index) {
  return new Promise((resolve) => {
    const fetchFn = getFetch();
    if (!fetchFn) {
      resolve(null);
      return;
    }
    fetchFn({
      url: `${SERVER}/api/novel/chapter?id=${bookId}&index=${index}`,
      method: "GET",
      responseType: "text",
      success: (res) => {
        if (res.code === 200 || res.code === 206) resolve(res.data);
        else resolve(null);
      },
      fail: () => resolve(null)
    });
  });
}
async function downloadLoop(book) {
  const bookId = book.id;
  const count = parseInt(book.chapterCount) || 0;
  const task = downloadTasks[bookId];
  const catalogData = await fetchCatalog(bookId);
  const chaptersMeta = Array.isArray(catalogData) ? catalogData.map((ch) => ({
    title: ch.title || ""
  })) : [];
  const bookMeta = {
    id: book.id,
    name: book.name,
    chapterCount: book.chapterCount,
    currentChapter: 0,
    isOffline: false,
    chapters: chaptersMeta
  };
  const metaFileName = `book_${book.id}.json`;
  await new Promise((r) => {
    file.writeText({
      uri: `internal://files/${metaFileName}`,
      text: JSON.stringify(bookMeta),
      success: () => {
        console.log(`[App] Meta saved with ${chaptersMeta.length} chapter titles`);
        r(true);
      },
      fail: (data, code) => {
        console.log(`[App] Meta save fail: ${code}`);
        r(false);
      }
    });
  });
  const dirPath = `internal://files/book_data_${book.id}`;
  const dirRes = await ensureDir(dirPath);
  if (!dirRes.success) {
    prompt.showToast({
      message: `目录创建失败`
    });
    task.status = "error";
    setScreenOn(false);
    return;
  }
  const fileList = await listFiles(dirPath);
  const existingSet = /* @__PURE__ */ new Set();
  for (const f of fileList) {
    let name = f.filename;
    if (!name && f.uri) {
      const parts = f.uri.split("/");
      name = parts[parts.length - 1];
    }
    existingSet.add(name);
  }
  let needCount = 0;
  for (let ii = 0; ii < count; ii++) {
    if (!existingSet.has(`${ii}.txt`)) needCount++;
  }
  if (needCount === 0) {
    task.progress = 100;
    task.status = "done";
    setScreenOn(false);
    bookMeta.isOffline = true;
    await new Promise((r) => {
      file.writeText({
        uri: `internal://files/${metaFileName}`,
        text: JSON.stringify(bookMeta),
        success: () => r(true),
        fail: () => r(false)
      });
    });
    prompt.showToast({
      message: `${book.name} 已完整`
    });
    return;
  }
  console.log(`[App] Need to download ${needCount}/${count} chapters`);
  setScreenOn(true);
  const useSystemDownload = request && typeof request.download === "function";
  let totalFail = 0;
  let consecutiveBatchFail = 0;
  let processedChapters = 0;
  if (useSystemDownload) {
    task.phase = "download";
    console.log("[App] Using request.download batch mode");
    let i2 = 0;
    while (i2 < count) {
      if (task.status !== "running") break;
      if (consecutiveBatchFail > 3) {
        console.log("[App] Too many batch fails, fallback to fetch");
        prompt.showToast({
          message: "切换到备用下载方式"
        });
        break;
      }
      const batchEnd = Math.min(i2 + BATCH_SIZE - 1, count - 1);
      const missingIndices = [];
      for (let j = i2; j <= batchEnd; j++) {
        if (!existingSet.has(`${j}.txt`)) missingIndices.push(j);
      }
      if (missingIndices.length === 0) {
        processedChapters = batchEnd + 1;
        task.progress = Math.floor(processedChapters / count * 100);
        i2 = batchEnd + 1;
        continue;
      }
      const batchFrom = missingIndices[0];
      const batchTo = missingIndices[missingIndices.length - 1];
      const tempUri = await downloadBatchBySystem(bookId, batchFrom, batchTo);
      if (tempUri) {
        const result = await splitBatchFile(tempUri, dirPath, missingIndices, existingSet);
        await deleteFile(tempUri);
        if (result.saved > 0) {
          consecutiveBatchFail = 0;
        } else {
          consecutiveBatchFail++;
        }
        totalFail += result.failed;
        await new Promise((r) => setTimeout(r, 100));
      } else {
        consecutiveBatchFail++;
        totalFail += missingIndices.length;
      }
      processedChapters = batchEnd + 1;
      task.progress = Math.floor(processedChapters / count * 100);
      i2 = batchEnd + 1;
    }
    if (consecutiveBatchFail <= 3 && task.status === "running") {
      task.status = "done";
      setScreenOn(false);
      if (totalFail === 0) {
        bookMeta.isOffline = true;
        await new Promise((r) => {
          file.writeText({
            uri: `internal://files/${metaFileName}`,
            text: JSON.stringify(bookMeta),
            success: () => {
              console.log("[App] Final meta saved: isOffline=true");
              r(true);
            },
            fail: () => r(false)
          });
        });
        prompt.showToast({
          message: `${book.name} 下载完成`
        });
      } else {
        prompt.showToast({
          message: `${book.name} 缺${totalFail}章，点下载可补全`
        });
      }
      return;
    }
  }
  task.phase = "batch";
  console.log("[App] Using fetch batch mode");
  let consecutiveFailCount = 0;
  let fetchFailCount = 0;
  let i = 0;
  while (i < count) {
    if (task.status !== "running") break;
    if (consecutiveFailCount > 50) {
      prompt.showToast({
        message: `失败过多，请稍后重试`
      });
      task.status = "error";
      setScreenOn(false);
      break;
    }
    const batchEnd = Math.min(i + BATCH_SIZE - 1, count - 1);
    const missingIndices = [];
    for (let j = i; j <= batchEnd; j++) {
      if (!existingSet.has(`${j}.txt`)) missingIndices.push(j);
    }
    if (missingIndices.length === 0) {
      i = batchEnd + 1;
      task.progress = Math.floor(i / count * 100);
      continue;
    }
    const batchFrom = missingIndices[0];
    const batchTo = missingIndices[missingIndices.length - 1];
    const batchData = await downloadChapterBatch(bookId, batchFrom, batchTo);
    if (batchData && typeof batchData === "object") {
      for (const idx of missingIndices) {
        const key = String(idx);
        if (batchData[key]) {
          const ok = await saveChapterFile(dirPath, idx, batchData[key]);
          if (ok) {
            existingSet.add(`${idx}.txt`);
            consecutiveFailCount = 0;
          }
        } else {
          fetchFailCount++;
          consecutiveFailCount++;
        }
        task.progress = Math.floor((idx + 1) / count * 100);
      }
    } else {
      for (const idx of missingIndices) {
        if (task.status !== "running") break;
        const text = await downloadChapterOne(bookId, idx);
        if (text) {
          await saveChapterFile(dirPath, idx, text);
          existingSet.add(`${idx}.txt`);
          consecutiveFailCount = 0;
        } else {
          consecutiveFailCount++;
          fetchFailCount++;
        }
        task.progress = Math.floor((idx + 1) / count * 100);
      }
    }
    i = batchEnd + 1;
  }
  task.status = "done";
  setScreenOn(false);
  const allFail = totalFail + fetchFailCount;
  if (allFail === 0) {
    bookMeta.isOffline = true;
    await new Promise((r) => {
      file.writeText({
        uri: `internal://files/${metaFileName}`,
        text: JSON.stringify(bookMeta),
        success: () => {
          console.log("[App] Final meta saved: isOffline=true");
          r(true);
        },
        fail: () => r(false)
      });
    });
    prompt.showToast({
      message: `${book.name} 下载完成`
    });
  } else {
    prompt.showToast({
      message: `${book.name} 缺${allFail}章，点下载可补全`
    });
  }
}
const $app_script$1411120752 = {
  onCreate() {
  },
  start(book) {
    if (downloadTasks[book.id] && downloadTasks[book.id].status === "running") {
      prompt.showToast({
        message: "正在后台下载中..."
      });
      return;
    }
    downloadTasks[book.id] = {
      id: book.id,
      progress: 0,
      status: "running",
      phase: "download",
      name: book.name
    };
    prompt.showToast({
      message: `开始下载: ${book.name}`
    });
    downloadLoop(book);
  },
  getTask(bookId) {
    return downloadTasks[bookId];
  },
  getRunningTask() {
    for (const key in downloadTasks) {
      if (downloadTasks[key].status === "running") {
        return downloadTasks[key];
      }
    }
    return null;
  },
  clearTask(bookId) {
    if (downloadTasks[bookId]) {
      downloadTasks[bookId].status = "cancelled";
      delete downloadTasks[bookId];
      console.log(`[App] Cleared task for book ${bookId}`);
    }
  }
};
$app_define$("@app-component/app", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1411120752.default || $app_script$1411120752;
  $app_module$.exports.style = $app_style$1411120752;
});
$app_bootstrap$("@app-application/app");
