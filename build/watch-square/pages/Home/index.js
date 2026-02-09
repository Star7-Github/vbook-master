let $style$779992388 = {
  "@info": {
    "styleObjectId": 779992388
  }
};
const $app_style$779992388 = $style$779992388;
const router = $app_require$("@app-module/system.router");
const $app_script$779992388 = {
  data: function dataFun() {
    return {
      itemShelf: {
        name: "我的书架",
        path: "/pages/Bookshelf",
        color: "#3399ff",
        icon: "/assets/images/mybook.png"
      },
      itemTrans: {
        name: "传书到表",
        path: "/pages/Transfer",
        color: "#3399ff",
        icon: "/assets/images/network.png"
      },
      itemSetting: {
        name: "设置关于",
        path: "/pages/Settings",
        color: "#3399ff",
        icon: "/assets/images/more.png"
      },
      downloadTask: null
    };
  },
  onInit() {
    console.log("首页菜单 初始化");
    this.pollTimer = null;
  },
  onShow() {
    this.startPolling();
  },
  onHide() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  },
  onDestroy() {
    if (this.pollTimer) clearInterval(this.pollTimer);
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
  navigateTo(path) {
    if (path === "/pages/Reader") {
      router.push({
        uri: "/pages/Bookshelf"
      });
    } else {
      router.push({
        uri: path
      });
    }
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$779992388.default || $app_script$779992388;
  $app_module$.exports.style = $app_style$779992388;
});
$app_bootstrap$("@app-component/index");
