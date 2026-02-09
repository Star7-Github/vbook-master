let $style$1561212216 = {
  "@info": {
    "styleObjectId": 1561212216
  }
};
const $app_style$1561212216 = $style$1561212216;
const router = $app_require$("@app-module/system.router");
const network = $app_require$("@app-module/system.fetch");
const sysFetch = $app_require$("@app-module/system.fetch");
const file = $app_require$("@app-module/system.file");
const prompt = $app_require$("@app-module/system.prompt");
const $app_script$1561212216 = {
  data: function dataFun() {
    return {
      bookList: [],
      isLoading: true,
      isDownloading: false,
      downloadProgress: 0,
      curBookName: "",
      curBookAuthor: "",
      monitorId: ""
    };
  },
  onDestroy() {
    if (this.timerId) clearTimeout(this.timerId);
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.pollTimer) clearInterval(this.pollTimer);
  },
  onInit() {
    this.timerId = null;
    this.intervalId = null;
    this.pollTimer = null;
    this.fetchBookList();
  },
  startDownload(book) {
    if (this.isDownloading) {
      prompt.showToast({
        message: "请等待当前下载完成"
      });
      return;
    }
    const count = parseInt(book.chapterCount) || 0;
    if (count === 0) {
      prompt.showToast({
        message: "章节数为0"
      });
      return;
    }
    this.isDownloading = true;
    this.curBookName = book.name;
    this.curBookAuthor = book.author;
    this.downloadProgress = 0;
    this.monitorId = book.id;
    if (this.$app && this.$app.$def && this.$app.$def.start) {
      this.$app.$def.start(book);
      this.startPolling();
    } else {
      prompt.showToast({
        message: "应用异常"
      });
      this.isDownloading = false;
    }
  },
  startPolling() {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pollTimer = setInterval(() => {
      if (!this.monitorId) return;
      const task = this.$app.$def.getTask(this.monitorId);
      if (task) {
        this.downloadProgress = task.progress || 0;
        if (task.status !== "running") {
          if (task.status === "done") {
            this.downloadProgress = 100;
            prompt.showToast({
              message: "下载完成"
            });
          } else {
            prompt.showToast({
              message: "下载出错"
            });
          }
          setTimeout(() => {
            this.isDownloading = false;
            this.monitorId = "";
            clearInterval(this.pollTimer);
          }, 1500);
        }
      }
    }, 500);
  },
  goBack() {
    router.back();
  },
  getFetch() {
    if (sysFetch && typeof sysFetch.fetch === "function") {
      return (options) => sysFetch.fetch(options);
    }
    if (typeof network === "function") return network;
    if (network && typeof network.fetch === "function") {
      return (options) => network.fetch(options);
    }
    return null;
  },
  async fetchBookList() {
    this.isLoading = true;
    console.log("正在请求书单");
    const localBooks = await this.getLocalBooks();
    const localMap = {};
    localBooks.forEach((b) => localMap[b.id] = b);
    const fetchFn = this.getFetch();
    if (!fetchFn) {
      prompt.showToast({
        message: "API不支持"
      });
      this.isLoading = false;
      return;
    }
    fetchFn({
      url: "http://127.0.0.1:23101/api/novel/list",
      method: "GET",
      responseType: "json",
      success: (response) => {
        let list = [];
        if (Array.isArray(response.data)) {
          list = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          list = response.data.data;
        }
        this.bookList = list.map((item) => {
          const local = localMap[item.id];
          return {
            id: item.id,
            name: item.name,
            author: "本地导入",
            size: item.size,
            chapterCount: item.chapterCount,
            isDownloaded: !!local && local.isOffline,
            localExists: !!local
          };
        });
        this.isLoading = false;
      },
      fail: (data, code) => {
        console.log(`书单请求失败: ${code}, ${data}`);
        prompt.showToast({
          message: "网络请求失败"
        });
        this.isLoading = false;
        this.bookList = [];
      }
    });
  },
  getLocalBooks() {
    return new Promise((resolve) => {
      file.list({
        uri: "internal://files/",
        success: (data) => {
          const files = data.fileList || [];
          const bookFiles = files.filter((f) => f.uri.indexOf("book_") >= 0 && f.uri.endsWith(".json"));
          Promise.all(bookFiles.map((f) => this.readText(f.uri))).then((res) => {
            resolve(res.map((txt) => {
              try {
                return JSON.parse(txt);
              } catch (e) {
                return null;
              }
            }).filter((r) => r));
          });
        },
        fail: () => resolve([])
      });
    });
  },
  readText(uri) {
    return new Promise((r) => file.readText({
      uri,
      success: (d) => r(d.text),
      fail: () => r(null)
    }));
  },
  ensureDir(path) {
    return new Promise((resolve) => {
      file.mkdir({
        uri: path,
        recursive: true,
        // 尝试递归创建
        success: () => resolve({
          success: true
        }),
        fail: (data, code) => {
          console.log(`mkdir ${path} failed: ${code} ${data}`);
          file.access({
            uri: path,
            success: () => resolve({
              success: true
            }),
            fail: (accData, accCode) => {
              resolve({
                success: false,
                msg: `MKDIR:${code},ACCESS:${accCode}`
              });
            }
          });
        }
      });
    });
  },
  checkFileExists(uri) {
    return new Promise((resolve) => {
      file.access({
        uri,
        success: () => resolve(true),
        fail: () => resolve(false)
      });
    });
  },
  downloadChapterOne(bookId, index) {
    return new Promise((resolve) => {
      const fetchFn = this.getFetch();
      if (!fetchFn) {
        resolve(null);
        return;
      }
      fetchFn({
        url: `http://127.0.0.1:23101/api/novel/chapter?id=${bookId}&index=${index}`,
        method: "GET",
        responseType: "text",
        success: (res) => {
          if (res.code === 200) resolve(res.data);
          else resolve(null);
        },
        fail: () => resolve(null)
      });
    });
  },
  saveChapterFile(dir, index, content) {
    return new Promise((resolve) => {
      file.writeText({
        uri: `${dir}/${index}.txt`,
        text: content,
        success: () => resolve(true),
        fail: (d, c) => {
          console.log(`Save ch ${index} fail: ${c}`);
          resolve(false);
        }
      });
    });
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1561212216.default || $app_script$1561212216;
  $app_module$.exports.style = $app_style$1561212216;
});
$app_bootstrap$("@app-component/index");
