const $app_script$1302357824 = {
  data: function dataFun() {
    return {
      title: "👏欢迎体验应用开发"
    };
  },
  onInit() {
  },
  onDetailBtnClick() {
    global.router.push({
      uri: "/pages/DemoDetail"
    });
  }
};
let $style$1302357824 = {
  "@info": {
    "styleObjectId": 1302357824
  }
};
const $app_style$1302357824 = $style$1302357824;
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1302357824.default || $app_script$1302357824;
  $app_module$.exports.style = $app_style$1302357824;
});
$app_bootstrap$("@app-component/index");
