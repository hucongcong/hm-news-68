<template>
  <div>
    <div class="placeholder"></div>
    <div class="hm-header">
      <div class="back" @click="back">
        <span class="iconfont iconjiantou2"></span>
      </div>
      <div class="title"><slot></slot></div>
      <div class="extra"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      // this.$router.push()
      // this.$router.back()
      // this.$router.forward()
      // this.$router.go(1)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.placeholder {
  height: 50px;
  width: 100%;
}
.hm-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #fff;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  text-align: center;
  line-height: 50px;
  .back,
  .extra {
    width: 50px;
  }
  .iconfont {
    font-size: 16px;
  }
  .title {
    flex: 1;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
