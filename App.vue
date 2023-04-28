<script>
  let systemInfo = uni.getSystemInfoSync()
  export default {
    onLaunch: function() {
      //navbar高度
      const navbarHeight = systemInfo.platform == 'android' ? systemInfo.statusBarHeight + 48 : systemInfo
        .statusBarHeight + 44
      const navbarHeight_rpx = navbarHeight * 2
      uni.setStorageSync('navbarHeight', navbarHeight_rpx)
    },
    onShow: function() {

    },
    onHide: function() {

    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import "@/uni_modules/uview-ui/index.scss";
  @import "common/demo.scss";
</style>