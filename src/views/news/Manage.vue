<template>
  <div class="manage">
    <hm-header>栏目管理</hm-header>
    <div class="content">
      <div class="active">
        <h3>点击删除以下频道(必须保留4项以上)</h3>
        <div class="list">
          <div class="item" v-for="item in activeList" :key="item.id" @click="delTab(item.id)">{{item.name}}</div>
        </div>
      </div>
      <div class="deactive">
        <h3>点击添加以下频道</h3>
        <div class="list">
          <div class="item" v-for="item in deactiveList" :key="item.id" @click="addTab(item.id)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  思路
    1. 发送ajax请求，获取到所有的栏目，存放activeList
    2. 渲染这些栏目
    3. 点击激活的栏目， 删除该栏目，并且添加未激活的数组
    4. 点击未激活的栏目，删除该栏目，添加到激活的栏目中
    5. 监听数据的变化，保存到localStorage中
*/
export default {
  data() {
    return {
      // 存放激活的栏目
      activeList: [],
      // 存放未激活的栏目
      deactiveList: []
    }
  },
  async created() {
    const activeList = JSON.parse(localStorage.getItem('activeList'))
    const deactiveList = JSON.parse(localStorage.getItem('deactiveList'))
    if (activeList) {
      this.activeList = activeList
      this.deactiveList = deactiveList
      return
    }
    const res = await this.$axios.get('/category')
    console.log(res)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.activeList = data
      console.log(this.activeList)
    }
  },
  methods: {
    delTab(id) {
      if (this.activeList.length <= 4) return
      const index = this.activeList.findIndex(item => item.id === id)
      // 1. 往未激活的栏目中添加
      this.deactiveList.push(this.activeList[index])
      // 2. 删除激活中的这个栏目
      this.activeList.splice(index, 1)
    },
    addTab(id) {
      const index = this.deactiveList.findIndex(item => item.id === id)
      // 1. 往未激活的栏目中添加
      this.activeList.push(this.deactiveList[index])
      // 2. 删除激活中的这个栏目
      this.deactiveList.splice(index, 1)
    }
  },
  watch: {
    activeList: {
      deep: true,
      handler(value) {
        localStorage.setItem('activeList', JSON.stringify(this.activeList))
        localStorage.setItem('deactiveList', JSON.stringify(this.deactiveList))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px;
  .active,
  .deactive {
    h3 {
      font-size: 14px;
      font-weight: 400;
      margin: 10px 0;
    }
    .list {
      overflow: hidden;
      .item {
        width: 60px;
        height: 30px;
        border: 1px solid #ccc;
        background-color: #eee;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        float: left;
        margin: 5px;
      }
    }
  }
}

</style>
