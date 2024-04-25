<template>
  <div class="hidden" id="App">
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: "App",
  data() {
    return {
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace('/MobileView')
    } else {
      this.$router.replace("/ComputerView")
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}
</script>

<style></style>