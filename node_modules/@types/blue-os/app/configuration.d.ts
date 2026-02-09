/**
 * 应用配置
 * 接口声明: {"name": "blueos.app.configuration"}
 */
declare module '@blueos.app.configuration' {
   
  /**
   * @desc 获取应用当前的语言环境。默认使用系统的语言环境，会因为设置或系统语言环境改变而发生变化
   * @version 1
   * @returns 返回当前系统语言环境信息 {object}
   */
    const getLocale:()=>{

        /**
          * @desc 语言
         */
        language:string

        /**
         * @desc 国家或地区
         */
        countryOrRegion:string
    }

  /**
   * @desc 设置应用的语言环境。设置完成后，应用会按照新的语言环境来更新页面，并回调 onConfigurationChanged 生命周期函数。当系统语言发生变化或应用重新进入时，当前语言环境会重置为系统语言
   * @version 1
   * @param {obj} 设置语言环境信息 {object}
   */
    const setLocale:(obj:{
         /**
          * @desc 语言
         */
         language:string

         /**
          * @desc 国家或地区
          */
         countryOrRegion:string
    })=>void
}