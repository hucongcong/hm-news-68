<template>
  <div class="demo">
    <!-- <Comment :count="5"></Comment> -->
    <Comment :data="obj"></Comment>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: {
    Comment
  },
  data() {
    return {
      obj: {
        content: '说的好像你不是单身狗一样',
        parent: {
          content: '你一个单身狗，天气好有毛用',
          parent: {
            content: '是挺好的',
            parent: {
              content: '今天天气真好',
              parent: {
                content: '啦啦啦啦啦啦'
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
