<template>
  <view class="container">
    <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="chooseavatar">
      <image :src="defaultAvatarUrl" mode=""></image>
    </button>
    <view class="input-wrapper">
      <view class="label">昵称</view>
      <input @blur="nicknamereview" type="nickname" placeholder="输入昵称" />
    </view>
    <view class="btn" @click="handleBack">
      确定
    </view>
  </view>
</template>

<script>
  export default {
    name: 'RegisterWiew',
    data() {
      return { defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0', }
    },
    methods: {
      chooseavatar(e) {
        this.defaultAvatarUrl = e.detail.avatarUrl
        uni.setStorageSync('avatarUrl', this.defaultAvatarUrl)
      },
      nicknamereview(e) {
        uni.setStorageSync('nickName', e.detail.value)
      },
      handleBack(){
        uni.navigateBack()
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    padding: 40rpx;

    .avatar-wrapper {
      padding: 0;
      width: 120rpx;
      height: 120rpx;
      margin-top: 20rpx;
      margin-bottom: 60rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border-bottom: 2rpx solid #ccc;
      height: 80rpx;
      padding-left: 100rpx;

      .label {
        margin-right: 100rpx;
      }
    }

    .btn {
      margin: 0 auto;
      height: 80rpx;
      width: 500rpx;
      background-color: #58be6a;
      color: #fff;
      border-radius: 20rpx;
      text-align: center;
      line-height: 80rpx;
      font-size: 17px;
      margin-top: 100rpx;
    }
  }
</style>