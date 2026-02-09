let $style$937831808 = {
  "@info": {
    "styleObjectId": 937831808
  }
};
const $app_style$937831808 = $style$937831808;
const router = $app_require$("@app-module/system.router");
const file = $app_require$("@app-module/system.file");
const prompt = $app_require$("@app-module/system.prompt");
const $app_script$937831808 = {
  data: function dataFun() {
    return {
      bookId: "",
      bookName: "",
      currentIndex: -1,
      totalCount: 0,
      pageSize: 50,
      isLoading: true,
      showRanges: true,
      ranges: [],
      chapters: [],
      allChaptersMeta: []
      // Store chapter titles
    };
  },
  computed: {
    titleText() {
      if (this.showRanges) {
        return "目录-选择分页";
      }
      return "目录";
    }
  },
  onInit() {
    this.currentIndex = parseInt(this.currentIndex) || 0;
    this.loadMeta();
  },
  async loadMeta() {
    const metaUri = `internal://files/book_${this.bookId}.json`;
    try {
      const metaRes = await this.readText(metaUri);
      if (metaRes) {
        const meta = JSON.parse(metaRes);
        this.totalCount = parseInt(meta.chapterCount) || 0;
        if (Array.isArray(meta.chapters)) {
          this.allChaptersMeta = meta.chapters;
        }
      }
    } catch (e) {
      console.log("Read meta failed");
    }
    if (this.totalCount === 0) {
      this.isLoading = false;
      prompt.showToast({
        message: "暂无目录数据"
      });
      return;
    }
    if (this.totalCount > this.pageSize) {
      this.showRanges = true;
      this.generateRanges();
    } else {
      this.showRanges = false;
      this.loadChapters(0, this.totalCount);
    }
    this.isLoading = false;
  },
  generateRanges() {
    const list = [];
    const pageCount = Math.ceil(this.totalCount / this.pageSize);
    for (let i = 0; i < pageCount; i++) {
      const start = i * this.pageSize + 1;
      const end = Math.min((i + 1) * this.pageSize, this.totalCount);
      list.push({
        label: `${start} - ${end} 章`,
        startIndex: i * this.pageSize,
        count: end - i * this.pageSize
      });
    }
    this.ranges = list;
  },
  loadChapters(start, count) {
    const list = [];
    for (let i = 0; i < count; i++) {
      const realIndex = start + i;
      let title = `第 ${realIndex + 1} 章`;
      if (this.allChaptersMeta && this.allChaptersMeta[realIndex]) {
        title = this.allChaptersMeta[realIndex].title || title;
      }
      list.push({
        title,
        index: realIndex,
        cached: false
      });
    }
    this.chapters = list;
    this.checkCachedStatus(list);
  },
  async checkCachedStatus(currentList) {
    const dirPath = `internal://files/book_data_${this.bookId}`;
    const results = await Promise.all(currentList.map((item) => this.checkFileExists(`${dirPath}/${item.index}.txt`)));
    const newList = currentList.map((item, i) => ({
      ...item,
      cached: results[i]
    }));
    this.chapters = newList;
  },
  checkFileExists(uri) {
    return new Promise((r) => file.access({
      uri,
      success: () => r(true),
      fail: () => r(false)
    }));
  },
  selectRange(index) {
    const range = this.ranges[index];
    this.loadChapters(range.startIndex, range.count);
    this.showRanges = false;
  },
  handleBack() {
    if (!this.showRanges && this.totalCount > this.pageSize) {
      this.showRanges = true;
      this.chapters = [];
    } else {
      router.back();
    }
  },
  readText(uri) {
    return new Promise((resolve) => {
      file.readText({
        uri,
        success: (data) => resolve(data.text),
        fail: () => resolve(null)
      });
    });
  },
  selectChapter(index) {
    router.replace({
      uri: "/pages/Reader",
      params: {
        bookId: this.bookId,
        bookName: this.bookName,
        chapterIndex: index,
        chapterCount: this.totalCount
      }
    });
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$937831808.default || $app_script$937831808;
  $app_module$.exports.style = $app_style$937831808;
});
$app_bootstrap$("@app-component/index");
