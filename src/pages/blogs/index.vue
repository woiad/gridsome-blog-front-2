<template>
  <layout>
    <div class="posts">
      <search @search="searchText = $event" />
      <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <my-card shadow="hover">
            <template v-slot:header>
              <div class="fixed-header">
                <div style="cursor: pointer" @click="$router.push({ path: post.node.path })">
                  <span class="icon">
                    <font-awesome-icon icon="edit" />
                  </span>
                  <i>{{ post.node.updated_at | date('YYYY-MM-DD') }}</i>
                  更新
                </div>
                <div class="share" @click="copyHandle(post.node.path)">
                  <span class="icon">
                    <font-awesome-icon icon="share-alt" />
                  </span>
                </div>
              </div>
            </template>
            <template v-slot:default>
              <div class="text">
                <p>
                  最近更新 {{ post.node.updated_at | date() }}
                </p>
                <h1>{{ post.node.title }}</h1>
              </div>
            </template>
          </my-card>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query{
  posts: allStrapiPost(sortBy: "update_created") {
    edges{
      node{
        id
        title
        created_at
        updated_at
        content
        path
      }
    }
  }
}
</page-query>

<script>
import Search from '../../components/search'
export default {
  name: 'Posts',
  data () {
    return {
      searchText: ''
    }
  },
  metaInfo: {
    title: '博客列表'
  },
  components: {
    Search
  },
  computed: {
    posts() {
      return this.$page.posts.edges.filter(post => {
        const text = this.searchText.trim()
        return post.node.title.includes(text) || post.node.content.includes(text)
      })
    }
  },
  methods: {
    copyHandle (url) {
      url = `${window.location.origin}${url}`
      this.$copy('.share', url)
    }
  }
}
</script>

<style scoped>
.post-list{
  margin-top: 20px;
}
.post-list .fixed-header{
  display: flex;
  justify-content: space-between;
  color: #1e6bb8;
  font-size: 16px;
}
.post-list .fixed-header i{
  font-style: normal;
  font-size: 16px;
}
.post-list .fixed-header span.icon{
  margin-right: 13px;
}
.post-list .fixed-header .share span{
  color: #409EFF;
  cursor: pointer;
  font-size: 12px;
}
.post-list .post{
  margin-bottom: 20px;
}
.post-list .post .text p{
  margin: 0;
  font-size: .9rem;
  color: rgb(96, 108, 113);
}
.post-list .post .text h1{
  margin: 10px 0 0 0;
  font-weight: normal;
  color: rgb(48, 49, 51);
  font-size: 1.1rem;
}
</style>
