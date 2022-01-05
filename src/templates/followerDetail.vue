<template>
  <layout>
    <div class="social-detail">
      <my-card style="mini-height: 400px">
        <template v-slot:header>
          <div class="flex-header">
            <span>{{ $page.fan.userName }}</span>
            <g-link to="/social/" style="color: #409EFF;cursor: pointer">
              <span>
                <font-awesome-icon icon="angle-double-left" />
              </span>
              返回
            </g-link>
          </div>
        </template>
        <div class="content">
          <div class="left">
            <img :src="$page.fan.avatar" alt="">
            <div class="text">
              <h1>{{ $page.fan.name || '名字' }}</h1>
              <p>{{ $page.fan.userName }}</p>
              <p v-if="location"><span class="location"></span>{{ $page.fan.location || '地址' }}</p>
            </div>
          </div>
          <div class="right">
            <div class="content">
              <div class="info" v-if="$page.fan.introduction" v-html="$page.fan.introduction"></div>
              <div v-else>
                <b>◔ ‸◔？没有简介</b>
              </div>
            </div>
          </div>
        </div>
      </my-card>
    </div>
  </layout>
</template>

<page-query>
query($id: ID!){
  fan: strapiFollower(id: $id){
    userName
    avatar
    name
    introduction
    location
  }
}
</page-query>

<script>
export default {
  name: 'FanDetail',
  metaInfo: {
    title: '人物详情'
  },
}
</script>

<style scoped>
.social-detail .flex-header{
  display: flex;
  justify-content: space-between;
}
.social-detail .flex-header a{
  text-decoration: none;
}
.social-detail .content{
  display: flex;
}
.social-detail .content .left{
  width: 37.5%;
  padding: 0px 10px 20px 0px;
}
.social-detail .content .left img{
  width: 100%;
  display: block;
  border-radius: 5px;
}
.social-detail .content .left .text{
  margin-top: 5px;
  padding: 10px;
}
.social-detail .content .left .text h1{
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 40px;
}
.social-detail .content .left .text p{
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 35px;
  color: rgb(102, 102, 102);
}
.social-detail .content .left .text p:last-child{
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(96, 98, 102);
}
.social-detail .content .left .text p span.location{
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 7px;
  background-image: url("/location.png");
  background-size: 100% 100%;
}
.social-detail .content .right{
  flex: 1;
  padding: 0px 20px 20px 10px;
}
.social-detail .content .right .content{
  width: 100%;
  min-height: 300px;
  border-radius: 5px;
  border: 1px solid rgb(235, 238, 245);
  text-align: center;
  font-size: 30px;
  color: rgb(106, 115, 125)
}
.social-detail .content .right .content .info{
  font-size: 16px;
  padding: 10px;
  color: rgb(106, 115, 125);
}
</style>
