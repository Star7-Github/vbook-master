/**
 * sim卡管理
 * 接口声明: {"name": "blueos.telephony.simManager"}
 */
declare module '@blueos.telephony.simManager' {

  /**
   * @desc 获取Sim卡的运营商信息，需要电话权限
   * @param {obj} 获取Sim卡的运营商信息入参 {object}
   * @version 1
   */
  const getSimOperators: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 成功回调返回值 {object}
     */
    success?: (data: {
      /**
       * @desc SIM卡列表信息
       */
      operators: Array<{
        /**
         * @desc 返回 Sim 卡的运营商信息 运营商信息说明：此处统一返回 MCC+MNC，即移动国家代码 + 移动网络代码；中国移动：46000，46002，46004，46007；中国联通：46001，46006，46009；中国电信：46003，46005，46011
         */
        operator: string
        /**
         * @desc 卡槽序号
         */
        slotIndex: number
      }>
      /**
       * @desc Sim卡数量
       */
      size: string
    }) => void
    /**
     *  @desc 失败回调，可能是因为缺乏权限
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 执行结束后的回调
     */
    complete?: () => void
  }) => void
}
