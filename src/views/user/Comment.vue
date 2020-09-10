<template>
  <div class="comment">
    <!-- 在一个组件的模板中渲染当前组件 -->
    <comment :data="data.parent" v-if="data.parent"></comment>
    <div>我是评论组件</div>
    <p>{{data.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    // count: Number,
    data: Object
  }
}
</script>

<style lang="less" scoped>
.comment {
  border: 1px solid #000;
  padding: 5px;
}
</style>
