<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 12px 12px;
  font-size: 16px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 999;
  border-radius: 8px;
}
</style>
