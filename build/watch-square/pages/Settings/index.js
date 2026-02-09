let $style$1728483328 = {
  "@info": {
    "styleObjectId": 1728483328
  }
};
const $app_style$1728483328 = $style$1728483328;
const storage = $app_require$("@app-module/system.storage");
const router = $app_require$("@app-module/system.router");
const $app_script$1728483328 = {
  data: function dataFun() {
    return {
      fontSize: 32,
      lineHeight: 48,
      theme: "dark"
      // dark, light, green
    };
  },
  onInit() {
    console.log("设置页 初始化");
    this.loadSettings();
  },
  getPreviewBgColor() {
    if (this.theme === "light") return "#ffffff";
    if (this.theme === "green") return "#cceebb";
    return "#000000";
  },
  getPreviewTextColor() {
    if (this.theme === "light" || this.theme === "green") return "#000000";
    return "#ffffff";
  },
  loadSettings() {
    storage.get({
      key: "reader_settings",
      success: (data) => {
        if (data) {
          try {
            const settings = JSON.parse(data);
            this.fontSize = settings.fontSize || 32;
            this.lineHeight = settings.lineHeight || 48;
            this.theme = settings.theme || "dark";
          } catch (e) {
            console.error("Settings parse error", e);
          }
        }
      }
    });
  },
  saveSettings() {
    const settings = {
      fontSize: this.fontSize,
      lineHeight: this.lineHeight,
      theme: this.theme
    };
    storage.set({
      key: "reader_settings",
      value: JSON.stringify(settings),
      success: () => {
      }
    });
  },
  changeFontSize(delta) {
    let newVal = this.fontSize + delta;
    if (newVal < 20) newVal = 20;
    if (newVal > 60) newVal = 60;
    this.fontSize = newVal;
    this.saveSettings();
  },
  changeLineHeight(delta) {
    let newVal = this.lineHeight + delta;
    if (newVal < 30) newVal = 30;
    if (newVal > 100) newVal = 100;
    this.lineHeight = newVal;
    this.saveSettings();
  },
  selectTheme(theme) {
    this.theme = theme;
    this.saveSettings();
  },
  back() {
    router.back();
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1728483328.default || $app_script$1728483328;
  $app_module$.exports.style = $app_style$1728483328;
});
$app_bootstrap$("@app-component/index");
