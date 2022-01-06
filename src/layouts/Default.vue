<template>
  <div class="layout">
    <section
      class="page-header"
    >
      <h1 class="project-name">woiad</h1>
      <h2 class="project-tagline">欢迎来到我的博客</h2>
    </section>

    <div class="one-word">
      <my-card shadow="never">
        <div  class="hitokoto-fullpage">
          <div class="bracket left">『</div>
          <div class="word">{{ hitokoto }}</div>
          <div class="bracket right">』</div>
          <div class="author" id="hitokoto_author">—— {{ from_who }}「{{ from }}」</div>
        </div>
      </my-card>
    </div>

    <section class="main-content">
      <div class="content-wrapper">
        <div class="menu-wrapper">
          <div class="menu-list">
            <ul>
              <li :class="[ ($route.name === 'home' || $route.path === '/new/') && 'active']">
                <g-link to="/">
                  <span class="icon"></span>
                  最新动态
                </g-link>
              </li>
              <li
                :class="[
                  ($route.path === '/social/' || $route.path.startsWith('/follower/') || $route.path.startsWith('/fan/')) && 'active'
                  ]"
              >
                <g-link to="/social/">
                  <span class="icon"></span>
                  社交圈
                </g-link>
              </li>
              <li :class="[ $route.path.startsWith('/blog') && 'active']">
                <g-link to="/blogs/">
                  <span class="icon"></span>
                  博客列表
                </g-link>
              </li>
              <li :class="[ $route.path.startsWith('/project/') && 'active']">
                <g-link to="/project/">
                  <span class="icon"></span>
                  开源项目
                </g-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </section>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import axios from 'axios'
export default {
  name: 'Layout',
  data () {
    return {
      hitokoto: '',
      from: '',
      from_who: ''
    }
  },
  created () {
    const hitokoto = '爱意随风起，风止意难平'
    const from = '网络'
    axios.get('https://v1.hitokoto.cn').then(res => {
      if (res.status === 200) {
        const data = res.data || {}
        this.hitokoto = data.hitokoto || hitokoto
        this.from = data.from || from
        this.from_who = data.from_who || ''
      }
    })
    .catch(err => {
      console.log(err)
      this.hitokoto = '爱意随风起，风止意难平'
      this.from = '网上'
    })
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout .main-content {
  margin: 0 auto;
  max-width: 64rem;
}

.page-header{
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(
    120deg,#155799,#159957);
  background-image: url("/bg.jpg");
  background-size: 100%;
}
.one-word{
  position: relative;
  z-index: 2;
  margin: -30px auto auto;
  width: 64rem;
}
.one-word .hitokoto-fullpage{
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
.hitokoto-fullpage .bracket.left{
  position: absolute;
  left: 0;
  top: 0;
}
.hitokoto-fullpage .word{
  font-size: 1.3rem;
  text-align: center;
  line-height: 20px;
  word-break: normal;
  margin: 0;
  padding: 5px 50px;
}
.hitokoto-fullpage .bracket.right{
  position: absolute;
  right: 0;
  bottom: 0;
}
.hitokoto-fullpage .author{
  font-size: 20px;
  float: right;
}
.project-name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.1rem;
}
.project-tagline {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: normal;
  opacity: 0.7;
}
.content-wrapper{
  padding-top: 30px;
  display: flex;
}
.menu-wrapper{
  width: 25%;
  padding: 20px;
  margin-right: 10px;
  max-height: 280px;
  border: 1px solid #ebeef5;
  box-sizing: border-box;
}
.menu-wrapper ul{
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border-right: solid 1px #e6e6e6;
}
.menu-wrapper li{
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color .3s,background-color .3s,color .3s;
  transition: border-color .3s,background-color .3s,color .3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.menu-wrapper li:hover{
  background-color: #ecf5ff
}
.menu-wrapper li.active a{
  color: #409EFF;
}
.menu-wrapper li:first-child.active a span{
  background-image: url("/start-active.png");
}
.menu-wrapper li:nth-child(2).active a span{
  background-image: url("/phone-active.png");
}
.menu-wrapper li:nth-child(3).active a span{
  background-image: url("/editor-active.png");
}
.menu-wrapper li:nth-child(4).active a span{
  background-image: url("/service-active.png");
}
.menu-wrapper li a{
  color: #303133;
  text-decoration: none;
}
.menu-wrapper li a span{
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 18px;
  margin-right: 5px;
  background-image: url("/start-unactive.png");
  background-size: 100% 100%;
}
.menu-wrapper li:nth-child(2) a span{
  background-image: url("/phone-unactive.png");
}
.menu-wrapper li:nth-child(3) a span{
  background-image: url("/editor-unactive.png");
}
.menu-wrapper li:nth-child(4) a span{
  background-image: url("/service-unactive.png");
}
.content{
  flex: 1;
}
</style>
