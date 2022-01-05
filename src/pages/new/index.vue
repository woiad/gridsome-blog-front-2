<template>
  <layout>
    <div class="blog-container">
      <my-card shadow="never" :title="blog.title">
        <div class="blog">
          <div style="margin-bottom: 10px">
            <p class="created-at">发布 <span>{{ blog.created_at | date() }}</span></p>
            <p class="updated-at">更新 <span>{{ blog.updated_at | date() }}</span></p>
          </div>
          <div v-html="blog.content"></div>
        </div>
      </my-card>
    </div>
  </layout>
</template>

<page-query>
query{
  allStrapiPost(sortBy: "updated_at", limit: 1){
    edges{
      node{
        id
        title
        created_at
        updated_at
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'New',
  metaInfo: {
    title: '最新动态'
  },
  computed: {
    blog () {
      return this.$page.allStrapiPost.edges[0].node
    }
  }
}
</script>

<style scoped>
.blog{
  min-height: 600px;
}
.blog .created-at,
.blog .updated-at{
  font-size: .9rem;
  color: rgb(96, 108, 113);
  margin: 5px 0 0 0;
}
</style>
