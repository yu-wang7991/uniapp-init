  import { login, info, phone } from '@/common/api.js'
  //登录
  export function loginInfo(cb) {
    uni.login({
      provider: 'weixin',
      success: async loginRes => {
        const res = await login({ code: loginRes.code, appid: 'wx83ef767552b92ee3' })
        const openid = JSON.parse(res.msg).openid
        uni.setStorageSync('userId', JSON.parse(res.msg).id)
        uni.navigateTo({
          url: '/pages/register/index'
        })
        // 获取用户信息
        // uni.getUserInfo({
        //   provider: 'weixin',
        //   success: async infoRes => {

        //   }
        // })
      }
    })
  }

  // 近N天 - new Date()
  export function getRecentDay_Date(n) {
    var dd = new Date()
    dd.setDate(dd.getDate() + n) //获取n天后的日期
    var y = dd.getFullYear()
    var m = dd.getMonth() + 1 //获取当前月份的日期
    var d = dd.getDate()
    let day = y + '-' + m + '-' + d
    return day
  }
  // 近N月 - new Date()
  export function getRecentMonth_Date(n) {
    let result = ''
    const datenow = new Date()
    const dateend =
      datenow.getFullYear().toString() +
      '-' +
      (datenow.getMonth() + 1).toString() +
      '-' +
      datenow.getDate().toString()
    datenow.setMonth(datenow.getMonth() - n)
    let dyear = datenow.getFullYear()
    let dmonth = datenow.getMonth() + 1
    dmonth = dmonth < 10 ? 0 + dmonth : dmonth
    let dday = datenow.getDate()
    const datestart =
      dyear.toString() + '-' + dmonth.toString() + '-' + dday.toString()
    result += datestart + ','
    result += dateend
    return result
  }