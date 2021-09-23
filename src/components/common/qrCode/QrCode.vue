<template>
  <div v-if="isShow">
    <div class="qr-code">
      <img src="~assets/img/enter.png" alt="" />
      <div class="text">
        请打开手机浏览器扫描二维码或打开调试模式模拟手机并刷新，以保证浏览效果
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
.qr-code {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 260px;
  color: black;
  /* background-color: ; */
}
.qr-code img {
  width: 50%;
}
</style>
