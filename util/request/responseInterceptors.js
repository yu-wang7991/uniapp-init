/**
 * 响应拦截
 * @param {Object} http 
 */
module.exports = (vm) => {
  uni.$u.http.interceptors.response.use((response) => {
    /* 对响应成功做点什么 可使用async await 做异步操作*/
    uni.hideLoading();
    const data = response.data
    // 自定义参数
    const custom = response.config?.custom
    if (data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
      if (data.code == 500) {
        // return uni.$u.toast(data.msg)
        return uni.showModal({
          title: '提示',
          showCancel: false,
          content: data.msg,
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
      //后台返回没有code状态码的情况，配置return=true,返回data
      if (custom?.return) {
        return data || {}
      }
      // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
      if (custom.toast !== false) {
        uni.$u.toast(data.message)
      }
      // 如果需要catch返回，则进行reject
      if (custom?.catch) {
        return Promise.reject(data)
      } else {
        // 否则返回一个pending中的promise
        return new Promise(() => {})
      }

    }
    return data || {}
  }, (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    return Promise.reject(response)
  })
}