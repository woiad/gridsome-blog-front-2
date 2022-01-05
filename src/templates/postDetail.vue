<template>
  <layout>
    <div class="post">
      <my-card shadow="never" style="min-height: 400px">
        <template v-slot:header>
          <div class="fixed-header">
            <div>
              <span>{{ $page.post.updated_at | date('YYYY-MM-DD') }}</span>
              更新
            </div>
            <div class="share">
              <span class="icon share-icon" @click="$copy('.share-icon')">
                <font-awesome-icon icon="share-alt" />
                分享
              </span>
              <span class="icon" @click="$router.push({ path: '/blogs/' })">
                <font-awesome-icon icon="angle-double-left" />
                返回
              </span>
            </div>
          </div>
        </template>
        <template v-slot:default>
          <div class="text">
            <p>发布:<span>{{ $page.post.created_at | date() }}</span></p>
            <p>发布:<span>{{ $page.post.updated_at | date() }}</span></p>
            <div class="content" v-html="mdRenderToHtml($page.post.content)"></div>
          </div>
        </template>
      </my-card>
    </div>
  </layout>
</template>

<page-query>
query($id: ID!){
  post: strapiPost(id: $id){
    title
    content
    created_at
    updated_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt
export default {
  name: 'PostDetail',
  metaInfo: {
    title: '博客详情'
  },
  methods: {
    mdRenderToHtml(markdown) {
      if (!markdown) return ''
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
.post .fixed-header{
  display: flex;
  justify-content: space-between;
}
.post .fixed-header .share{
  color: #409EFF;
  font-size: 12px;
  cursor: pointer;
}
.post .fixed-header .share span:last-child{
  margin-left: 15px;
}
.post .text p{
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(96, 108, 113);
}
.post .text .content{
  margin-top: 15px;
}
</style>
