/**
 * 请求拦截
 * @param {Object} http
 */
import md5 from '@/util/md5.js'
import sort_ascii from '@/util/sort_ascii.js'
module.exports = vm => {
  uni.$u.http.interceptors.request.use(config => { // 可使用async await 做异步操作
      //默认showLoading，config配置noLoading=true，此请求不会有showLoading效果
      if (!config.noLoading) {
        uni.showLoading({
          title: '加载中',
          mask: true
        })
      }
      //入参secret配置
      // let secret = ''
      // if (config.params?.secret || config.data?.secret) {
      //   delete config.params.secret
      //   delete config.data.secret
      // }
      // if (config.method == "GET") {
      //   secret = md5.hex_md5(sort_ascii(config.params))
      //   config.params.secret = secret
      // } else if (config.method == "POST") {
      //   secret = md5.hex_md5(sort_ascii(config.data))
      //   config.data.secret = secret
      // }

      // header里secret配置
      // config.header.secret = secret


      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}
      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      // console.log(vm.$store.state);
      return config
    }, config => // 可使用async await 做异步操作
    Promise.reject(config))
}