<template>
  <div class="user">
    <div class="header" @click="$router.push('/user-edit')">
      <div class="avatar">
        <!-- 路径必须拼成绝对路径 -->
        <img :src="base + user.head_img" alt="">
      </div>
      <div class="info">
        <div class="name">
          <!-- <span v-if="user.gender === 1" class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span> -->
          <span class="iconfont" :class="user.gender === 1 ? 'iconxingbienan' : 'iconxingbienv'"></span>
          <span>{{user.nickname}}</span>
        </div>
        <div class="time">
          {{user.create_date | time}}
        </div>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 导航条 -->
    <hm-navitem to="/myfollow">
      <template>我的关注</template>
      <template #content>关注的内容</template>
    </hm-navitem>
    <hm-navitem to="/mycomment">
      <template>我的跟帖</template>
      <template #content>跟帖/回复</template>
    </hm-navitem>
    <hm-navitem to="/mystar">
      <template>我的收藏</template>
      <template #content>文章/视频</template>
    </hm-navitem>
    <hm-navitem to="/user-edit">设置</hm-navitem>
    <div style="margin: 15px;">
      <van-button type="primary" block @click="logout">退出</van-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    base() {
      return this.$axios.defaults.baseURL
    }
  },
  data() {
    return {
      user: {}
    }
  },
  async created() {
    // token必须放到请求头中  请求头 Authorization
    const userId = localStorage.getItem('userId')
    // get(url, config)
    const res = await this.$axios.get(`/user/${userId}`)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    }
  },
  methods: {
    async logout() {
      console.log('哈哈哈')
      // 弹框提示
      try {
        await this.$dialog.confirm({
          title: '温馨提示',
          message: '你确定要退出本系统吗?'
        })
      } catch {
        return this.$toast('取消退出')
      }
      // 说明点了确定
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      this.$router.push('/login')
      this.$toast.success('退出成功')
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  .header {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 3px solid #ddd;
    .avatar {
      width: 70px;
      height: 70px;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      flex: 1;
      padding-left: 10px;
      font-size: 14px;
      .time {
        margin-top: 10px;
        color: #666;
      }
      .iconxingbienan {
        color: #7bbcec;
      }
      .iconxingbienv {
        color: pink;
      }
    }
  }
}
</style>
