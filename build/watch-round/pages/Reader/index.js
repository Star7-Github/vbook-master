let $style$1182111904 = {
  '@info': {
    styleObjectId: 1182111904,
  },
}
const $app_style$1182111904 = $style$1182111904
const router = $app_require$('@app-module/system.router')
const sysFetch = $app_require$('@app-module/system.fetch')
const file = $app_require$('@app-module/system.file')
const storage = $app_require$('@app-module/system.storage')
const prompt = $app_require$('@app-module/system.prompt')
const $app_script$1182111904 = {
  data: function dataFun() {
    return {
      bookId: '',
      bookName: '',
      chapterIndex: 0,
      chapterCount: 0,
      title: '',
      // 显示的书名
      chapterTitle: '',
      paragraphs: [],
      fullParagraphs: [],
      // 完整章节内容
      loadedCount: 0,
      // 已加载段落数
      hasMore: false,
      // 是否还有更多内容
      currentTime: '12:00',
      currentChapter: 0,
      // 内部使用的index
      totalChapters: 0,
      isLoading: false,
      readPercentage: 0,
      // Reading Style defaults
      readerStyle: {
        fontSize: 32,
        lineHeight: 48,
        bgColor: '#000000',
        textColor: '#ffffff',
        dimColor: '#888888',
        cardBgColor: '#333333',
      },
    }
  },
  onInit() {
    console.log('阅读器 初始化', this.bookId, this.chapterIndex)
    console.log('Initial isLoading:', this.isLoading)
    this.title = this.bookName || '书名'
    this.currentChapter = Number(this.chapterIndex) || 0
    this.totalChapters = Number(this.chapterCount) || 0
    this.updateTime()
    this.loadReaderSettings()
    if (this.content) {
      console.log('Loading from content param')
      this.renderChapter(this.content)
    } else if (this.bookId) {
      this.loadChapter(this.currentChapter)
    } else {
      this.paragraphs = ['未找到书籍内容']
      this.isLoading = false
    }
    console.log('onInit complete, isLoading:', this.isLoading)
  },
  onShow() {
    console.log('Reader onShow, isLoading:', this.isLoading)
    this.loadReaderSettings()
    if (this.isLoading) {
      setTimeout(() => {
        if (this.isLoading) {
          this.isLoading = false
          console.log('Force clearing isLoading state')
        }
      }, 2e3)
    }
  },
  updateTime() {
    const now = /* @__PURE__ */ new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    this.currentTime = `${hours}:${minutes}`
  },
  loadReaderSettings() {
    storage.get({
      key: 'reader_settings',
      success: (data) => {
        if (data) {
          try {
            const settings = JSON.parse(data)
            const theme = settings.theme || 'dark'
            this.readerStyle.fontSize = settings.fontSize || 32
            this.readerStyle.lineHeight = settings.lineHeight || 48
            if (theme === 'light') {
              this.readerStyle.bgColor = '#ffffff'
              this.readerStyle.textColor = '#000000'
              this.readerStyle.dimColor = '#666666'
              this.readerStyle.cardBgColor = '#eeeeee'
            } else if (theme === 'green') {
              this.readerStyle.bgColor = '#cceebb'
              this.readerStyle.textColor = '#000000'
              this.readerStyle.dimColor = '#557744'
              this.readerStyle.cardBgColor = '#aacc99'
            } else {
              this.readerStyle.bgColor = '#000000'
              this.readerStyle.textColor = '#ffffff'
              this.readerStyle.dimColor = '#888888'
              this.readerStyle.cardBgColor = '#333333'
            }
          } catch (e) {
            console.error('Reader settings parse error', e)
          }
        }
      },
    })
  },
  loadChapter(index) {
    console.log(`Loading chapter ${index}, setting isLoading=true`)
    this.isLoading = true
    this.paragraphs = []
    const dirPath = `internal://files/book_data_${this.bookId}`
    const localPath = `${dirPath}/${index}.txt`
    file.readText({
      uri: localPath,
      success: (res) => {
        console.log('本地章节加载成功')
        this.renderChapter(res.text)
      },
      fail: () => {
        console.log('本地章节未找到，尝试网络加载')
        this.loadFromNetwork(index)
      },
    })
  },
  loadFromNetwork(index) {
    sysFetch.fetch({
      url: `http://127.0.0.1:23101/api/novel/chapter?id=${this.bookId}&index=${index}`,
      method: 'GET',
      responseType: 'text',
      success: (response) => {
        console.log('网络章节加载成功')
        this.renderChapter(response.data)
      },
      fail: (data, code) => {
        console.log(`网络加载失败: ${code}`)
        prompt.showToast({
          message: '加载失败',
        })
        this.paragraphs = ['内容加载失败，请检查网络或重新下载']
        this.isLoading = false
      },
    })
  },
  renderChapter(text) {
    if (!text) {
      this.paragraphs = ['章节内容为空']
      this.fullParagraphs = []
      this.hasMore = false
    } else {
      this.fullParagraphs = text
        .split('\n')
        .filter((p) => p.trim() !== '')
        .map((p) => '　　' + p.trim())
      const batchSize = 20
      if (this.fullParagraphs.length > batchSize) {
        this.paragraphs = this.fullParagraphs.slice(0, batchSize)
        this.loadedCount = batchSize
        this.hasMore = true
        console.log(
          `Chapter has ${this.fullParagraphs.length} paragraphs, loaded first ${batchSize}`
        )
      } else {
        this.paragraphs = this.fullParagraphs
        this.loadedCount = this.fullParagraphs.length
        this.hasMore = false
      }
    }
    this.saveProgress()
    console.log('Rendering complete, setting isLoading=false')
    this.isLoading = false
    setTimeout(() => {
      this.scrollToTop()
    }, 100)
  },
  scrollToTop() {
    const listElement = this.$element('contentList')
    if (listElement) {
      listElement.scrollTo({
        index: 0,
      })
      console.log('Scrolled to top')
    } else {
      console.log('List element not found')
    }
  },
  loadMore() {
    if (!this.hasMore) return
    const batchSize = 20
    const remaining = this.fullParagraphs.length - this.loadedCount
    const toLoad = Math.min(batchSize, remaining)
    const nextBatch = this.fullParagraphs.slice(
      this.loadedCount,
      this.loadedCount + toLoad
    )
    this.paragraphs = this.paragraphs.concat(nextBatch)
    this.loadedCount += toLoad
    if (this.loadedCount >= this.fullParagraphs.length) {
      this.hasMore = false
    }
    console.log(
      `Loaded ${toLoad} more paragraphs, total: ${this.loadedCount}/${this.fullParagraphs.length}`
    )
  },
  prevChapter() {
    console.log('Prev chapter clicked')
    if (this.currentChapter > 0) {
      this.currentChapter--
      this.loadChapter(this.currentChapter)
    } else {
      prompt.showToast({
        message: '已经是第一章了',
      })
    }
  },
  nextChapter() {
    console.log('Next chapter clicked')
    if (
      this.totalChapters > 0 &&
      this.currentChapter >= this.totalChapters - 1
    ) {
      prompt.showToast({
        message: '已经是最后一章了',
      })
      return
    }
    this.currentChapter++
    this.loadChapter(this.currentChapter)
  },
  saveProgress() {
    const bookMeta = {
      id: this.bookId,
      name: this.bookName,
      chapterCount: this.totalChapters,
      currentChapter: this.currentChapter,
    }
    const fileName = `book_${this.bookId}.json`
    const simplePath = `internal://files/${fileName}`
    file.writeText({
      uri: simplePath,
      text: JSON.stringify(bookMeta),
    })
  },
  handleTap() {},
  openJump() {},
  openCatalog() {
    router.push({
      uri: '/pages/Catalog',
      params: {
        bookId: this.bookId,
        bookName: this.bookName,
        currentIndex: this.currentChapter,
      },
    })
  },
  onItemAppear(idx) {
    if (this.fullParagraphs && this.fullParagraphs.length > 0) {
      let currentIndex = Number(idx)
      if (isNaN(currentIndex)) return 0
      let p = Math.ceil(((currentIndex + 1) / this.fullParagraphs.length) * 100)
      if (p > 100) p = 100
      if (p < 1) p = 1
      this.readPercentage = p
    }
  },
}
$app_define$(
  '@app-component/index',
  [],
  function ($app_require$2, $app_exports$, $app_module$) {
    $app_module$.exports =
      $app_script$1182111904.default || $app_script$1182111904
    $app_module$.exports.style = $app_style$1182111904
  }
)
$app_bootstrap$('@app-component/index')
