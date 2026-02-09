let $style$1227805737 = {
  "@info": {
    "styleObjectId": 1227805737
  }
};
const $app_style$1227805737 = $style$1227805737;
const router = $app_require$("@app-module/system.router");
const prompt = $app_require$("@app-module/system.prompt");
const file = $app_require$("@app-module/system.file");
const $app_script$1227805737 = {
  data: function dataFun() {
    return {
      // 传入参数
      bookId: "",
      bookName: "",
      chapterCount: 0,
      currentChapter: 0,
      rawUri: "",
      isLocal: false,
      content: "",
      // 内部状态
      isDeleting: false,
      showDeleteAlert: false,
      alertButtons: [{
        eventType: "confirm",
        type: "danger",
        value: "删除"
      }, {
        eventType: "cancel",
        type: "plain",
        value: "取消"
      }]
    };
  },
  onInit() {
    console.log("书籍详情页 初始化", this.bookName);
    if (typeof this.isLocal === "string") {
      this.isLocal = this.isLocal === "true";
    }
  },
  computed: {
    progressPercent() {
      const current = Number(this.currentChapter) || 0;
      const total = Number(this.chapterCount) || 1;
      if (total <= 0) return 0;
      let p = Math.floor((current + 1) * 100 / total);
      if (p > 100) p = 100;
      return p;
    }
  },
  startReading() {
    if (this.isLocal) {
      router.push({
        uri: "pages/Reader",
        params: {
          title: this.bookName,
          content: this.content,
          // 标记为local，Reader需要处理content参数
          bookId: "local_" + this.bookName
        }
      });
    } else {
      router.push({
        uri: "pages/Reader",
        params: {
          bookId: this.bookId,
          bookName: this.bookName,
          chapterIndex: this.currentChapter,
          chapterCount: this.chapterCount
        }
      });
    }
  },
  handleDelete() {
    if (this.isLocal) {
      prompt.showToast({
        message: "内置书籍无法删除"
      });
      return;
    }
    this.showDeleteAlert = true;
  },
  onAlertClick(e) {
    this.showDeleteAlert = false;
    if (e.detail && e.detail.eventType === "confirm") {
      this.confirmDelete();
    }
  },
  stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
  },
  confirmDelete() {
    this.isDeleting = true;
    this.doDeleteFiles();
  },
  doDeleteFiles() {
    if (this.rawUri) {
      file.delete({
        uri: this.rawUri,
        success: () => console.log("Deleted meta"),
        fail: (data, code) => console.log("Delete meta failed", code)
      });
    }
    if (this.bookId) {
      const dir = `internal://files/book_data_${this.bookId}`;
      file.rmdir({
        uri: dir,
        recursive: true,
        success: () => console.log("Deleted content folder"),
        fail: (data, code) => console.log("Delete folder failed", code)
      });
    }
    if (this.$app && this.$app.$def && this.$app.$def.clearTask) {
      this.$app.$def.clearTask(this.bookId);
    }
    setTimeout(() => {
      this.isDeleting = false;
      prompt.showToast({
        message: "删除成功"
      });
      router.back();
    }, 800);
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1227805737.default || $app_script$1227805737;
  $app_module$.exports.style = $app_style$1227805737;
});
$app_bootstrap$("@app-component/index");
