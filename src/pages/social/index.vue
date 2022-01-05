<template>
  <layout>
    <div class="social-wrapper">
      <my-card shadow="never">
        <div class="nav">
          <ul>
            <li :class="active === 'fans' ? 'active' : ''" @click="active = 'fans'" >
              粉丝
              <span>{{ fansList.length ? fansList.length : null }}</span>
            </li>
            <li :class="active === 'followers' ? 'active' : ''" @click="active = 'followers'">
              关注
              <span>{{ followerList.length ? followerList.length : null }}</span>
            </li>
          </ul>
        </div>
        <div v-show="active === 'fans'" class="fans-list list">
          <div
            v-for="fan in fansList"
            :key="fan.node.id"
            class="fan people"
          >
            <my-card shadow="hover">
              <div>
                <div>
                  <g-link :to="fan.node.path">
                    <span class="icon star"></span>
                    {{ fan.node.userName }}
                  </g-link>
                </div>
                <a :href="fan.node.href" target="_blank">
                  <span class="icon message"></span>
                  TA 的主页
                </a>
                <img :src="fan.node.avatar" />
              </div>
            </my-card>
          </div>
        </div>
        <div v-show="active === 'followers'" class="list">
          <div
            v-for="follower in followerList"
            :key="follower.node.id"
            class="fan people"
          >
            <my-card shadow="hover">
              <div>
                <div>
                  <g-link :to="follower.node.path">
                    <span class="icon star"></span>
                    {{ follower.node.userName }}
                  </g-link>
                </div>
                <a :href="follower.node.href" target="_blank">
                  <span class="icon message"></span>
                  TA 的主页</a>
                <img :src="follower.node.avatar" />
              </div>
            </my-card>
          </div>
        </div>
      </my-card>
    </div>
  </layout>
</template>

<page-query>
query{
  fans: allStrapiFan{
    edges{
      node{
        id
        userName
        href
        avatar
        path
      }
    }
  },
  followers: allStrapiFollower{
    edges{
      node{
        id
        userName
        href
        avatar
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Social',
  metaInfo: {
    title: '社交圈'
  },
  data () {
    return {
      active: 'fans'
    }
  },
  computed: {
    fansList() {
      return this.$page.fans.edges || []
    },
    followerList() {
      return this.$page.followers.edges || []
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped>
  .nav{
    margin-bottom: 15px;
    border-bottom: 1px solid #e4e7ed;
  }
  .nav ul {
    overflow: hidden;
    margin: 0 0 -1px 0;
    padding: 0;
  }
  .nav ul li {
    float: left;
    padding: 0 20px;
    height: 40px;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #e4e7ed;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
  }
  .nav ul li:first-child{
    border-right: 1px solid transparent;
  }
  .nav ul li:hover {
    color: #409EFF;
    cursor: pointer;
  }
  .nav ul li.active{
    color: #409EFF;
    border-bottom: 1px solid transparent;
  }
  .social-wrapper .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .social-wrapper .list .people{
    width: 30.33%;
    padding: 10px;
  }
  .social-wrapper .list .people p{
    color: #1e6bb8;
    margin: 5px 0;
  }
  .social-wrapper .list .people span.icon{
    width: 13px;
    height: 13px;
    margin-right: 8px;
    display: inline-block;
    background-size: 100% 100%;
  }
  .social-wrapper .list .people span.icon.star{
    background-image: url("/star-small.png");
  }
  .social-wrapper .list .people span.icon.message{
    background-image: url("/message.png");
  }
  .social-wrapper .list .people a{
    color: #1e6bb8;
    text-decoration: none;
  }
  .social-wrapper .list .people img{
    display: block;
    margin-top: 5px;
    width: 100%;
    border-radius: 5px;
  }
</style>
