let $style$331959032 = {
  "@info": {
    "styleObjectId": 331959032
  }
};
const $app_style$331959032 = $style$331959032;
const router = $app_require$("@app-module/system.router");
const file = $app_require$("@app-module/system.file");
const prompt = $app_require$("@app-module/system.prompt");
const $app_script$331959032 = {
  data: function dataFun() {
    return {
      bookList: [],
      downloadTask: null,
      showDeleteAlert: false,
      deleteAlertContent: "",
      deletingBook: null,
      deleteAlertButtons: [{
        eventType: "confirm",
        type: "primary",
        value: "确定"
      }, {
        eventType: "cancel",
        type: "plain",
        value: "忽略"
      }],
      refreshTimer: null,
      // 刷新定时器 ID
      isDeleting: false
      // 删除中状态
    };
  },
  onInit() {
    console.log("书架页 初始化");
    console.log("onInit - isDeleting:", this.isDeleting);
    this.pollTimer = null;
  },
  onShow() {
    this.isDeleting = false;
    console.log("Bookshelf onShow, reset isDeleting to false");
    this.refreshBooks();
    this.startPolling();
  },
  onHide() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  },
  onDestroy() {
    if (this.pollTimer) clearInterval(this.pollTimer);
    if (this.refreshTimer) clearTimeout(this.refreshTimer);
  },
  startPolling() {
    if (!this.$app || !this.$app.$def || !this.$app.$def.getRunningTask) return;
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.checkTask();
    this.pollTimer = setInterval(() => {
      this.checkTask();
    }, 1e3);
  },
  checkTask() {
    const task = this.$app.$def.getRunningTask();
    if (task) {
      this.downloadTask = {
        name: task.name,
        progress: task.progress || 0
      };
    } else {
      this.downloadTask = null;
    }
  },
  handleTaskClick() {
    router.push({
      uri: "pages/Transfer"
    });
  },
  handleLongPress(item) {
    console.log("Long press triggered", item.name);
    if (item.isLocal) {
      prompt.showToast({
        message: "内置书籍无法删除"
      });
      return;
    }
    this.deletingBook = item;
    this.deleteAlertContent = `确认删除《${item.name}》？`;
    this.showDeleteAlert = true;
    console.log("showDeleteAlert set to true, deletingBook:", item.name);
  },
  onDeleteConfirm() {
    console.log("Delete confirmed");
    this.showDeleteAlert = false;
    if (this.deletingBook) {
      this.deleteBook(this.deletingBook);
      this.deletingBook = null;
    }
  },
  onDeleteCancel() {
    console.log("Delete cancelled");
    this.showDeleteAlert = false;
    this.deletingBook = null;
  },
  deleteBook(item) {
    this.isDeleting = true;
    console.log("Starting delete, isDeleting=true");
    if (this.$app && this.$app.$def && this.$app.$def.clearTask) {
      this.$app.$def.clearTask(item.id);
    }
    if (item._uri) {
      file.delete({
        uri: item._uri,
        success: () => console.log("Deleted meta"),
        fail: (data, code) => console.log("Delete meta failed", code)
      });
    }
    if (item.id) {
      const dir = `internal://files/book_data_${item.id}`;
      file.rmdir({
        uri: dir,
        recursive: true,
        success: () => console.log("Deleted content folder"),
        fail: (data, code) => console.log("Delete folder failed", code)
      });
    }
    prompt.showToast({
      message: "已删除"
    });
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    this.refreshTimer = setTimeout(() => {
      this.refreshBooks();
      this.isDeleting = false;
      this.refreshTimer = null;
      console.log("Delete complete, isDeleting=false");
    }, 500);
  },
  refreshBooks() {
    const uri = "internal://files/";
    file.list({
      uri,
      success: (data) => {
        console.log("文件列表:", JSON.stringify(data));
        const files = data.fileList || [];
        const bookFiles = files.filter((f) => f.uri.endsWith(".json") && f.uri.indexOf("book_") >= 0);
        Promise.all(bookFiles.map((f) => {
          return new Promise((resolve) => {
            file.readText({
              uri: f.uri,
              success: (res) => {
                try {
                  const meta = JSON.parse(res.text);
                  meta._uri = f.uri;
                  resolve(meta);
                } catch (e) {
                  resolve(null);
                }
              },
              fail: () => resolve(null)
            });
          });
        })).then((books) => {
          const validBooks = books.filter((b) => b !== null).map((b) => {
            const cur = Number(b.currentChapter) || 0;
            const total = Number(b.chapterCount) || 1;
            let p = Math.floor((cur + 1) * 100 / total);
            if (p > 100) p = 100;
            b.progress = p;
            return b;
          });
          this.bookList = validBooks;
        });
      },
      fail: (data, code) => {
        console.log(`获取文件列表失败: ${code}, ${data}`);
      }
    });
  },
  goBack() {
    router.back();
  },
  openBookDetail(item) {
    router.push({
      uri: "pages/BookDetail",
      params: {
        bookId: item.id || "",
        bookName: item.name,
        chapterCount: item.chapterCount || 0,
        currentChapter: item.currentChapter || 0,
        rawUri: item._uri || "",
        isLocal: item.isLocal || false,
        content: item.content || ""
        // For legacy local books
      }
    });
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$331959032.default || $app_script$331959032;
  $app_module$.exports.style = $app_style$331959032;
});
$app_bootstrap$("@app-component/index");
