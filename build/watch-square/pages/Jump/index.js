let $style$1193965867 = {
  "@info": {
    "styleObjectId": 1193965867
  }
};
const $app_style$1193965867 = $style$1193965867;
const router = $app_require$("@app-module/system.router");
const $app_script$1193965867 = {
  data: function dataFun() {
    return {
      progress: "6.50"
    };
  },
  doJump() {
    router.back();
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1193965867.default || $app_script$1193965867;
  $app_module$.exports.style = $app_style$1193965867;
});
$app_bootstrap$("@app-component/index");
