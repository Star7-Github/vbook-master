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
      isDeleting: false
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
    if (this.isDeleting) return;
    this.isDeleting = true;
    prompt.showToast({
      message: "删除中..."
    });
    this.doDeleteFiles();
  },
  doDeleteFiles() {
    console.log(`[BookDetail] Deleting book: ${this.bookId}`);
    if (this.$app && this.$app.$def && this.$app.$def.clearTask) {
      this.$app.$def.clearTask(this.bookId);
    }
    const metaUri = this.rawUri || `internal://files/book_${this.bookId}.json`;
    file.delete({
      uri: metaUri,
      success: () => console.log("[BookDetail] Meta deleted"),
      fail: (data, code) => console.log(`[BookDetail] Meta delete fail: ${code}`)
    });
    if (this.bookId) {
      const dir = `internal://files/book_data_${this.bookId}`;
      file.rmdir({
        uri: dir,
        recursive: true,
        success: () => console.log("[BookDetail] Content folder deleted"),
        fail: (data, code) => console.log(`[BookDetail] Content folder delete fail: ${code}`)
      });
    }
    setTimeout(() => {
      this.isDeleting = false;
      prompt.showToast({
        message: "删除成功"
      });
      router.back();
    }, 2e3);
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1227805737.default || $app_script$1227805737;
  $app_module$.exports.style = $app_style$1227805737;
});
$app_bootstrap$("@app-component/index");
