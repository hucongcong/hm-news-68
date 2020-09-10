<template>
  <div class="mystar">
    <hm-header>我的收藏</hm-header>
    <div class="list">
      <hm-post v-for="item in list" :key="item.id" :post="item"></hm-post>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getStarList() {
      const res = await this.$axios.get('/user_star')
      // console.log(res)
      const { statusCode, data } = res.data
      if (statusCode === 200) {
        this.list = data
        this.list.forEach(item => {
          item.comment_length = item.comments.length
        })
        console.log(this.list)
      }
    }
  },
  created() {
    this.getStarList()
  }
}
</script>

<style lang="less" scoped>

</style>
