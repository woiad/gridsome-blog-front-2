<template>
  <layout>
    <div class="project">
      <my-card shadow="never" style="min-height: 400px">
        <template v-slot:header>
          <div class="fixed-header">
            <div class="title">
              {{ $page.project.title }}
            </div>
            <div class="right">
              <span class="share" @click="$copy('.share')">
                  <font-awesome-icon icon="share-alt" />
                分享
              </span>
              <a :href="$page.project.href" target="_blank">
                <font-awesome-icon icon="arrow-left" />
                前往 Github
              </a>
              <span @click="$router.push({ path: '/project/' })">
                <font-awesome-icon icon="angle-double-left" />
                返回
              </span>
            </div>
          </div>
        </template>
        <template v-slot:default>
          <div class="text">
            <p>发布 <span>{{ $page.project.created_at | date() }}</span></p>
            <p>更新 <span>{{ $page.project.updated_at | date() }}</span></p>
            <h1>{{ $page.project.info }}</h1>
            <div class="tags">
              <div class="tag" v-for="tag in $page.project.tags" :key="tag.id">
                {{ tag.title }}
              </div>
            </div>
            <div v-if="$page.project.content" v-html="markdownToHtml($page.project.content)" class="content">

            </div>
          </div>
        </template>
      </my-card>
    </div>
  </layout>
</template>

<page-query>
query($id: ID!){
  project: strapiProject(id: $id){
    title
    content
    href
    info
    created_at
    updated_at
    tags{
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt
export default {
  name: 'ProjectDetail',
  metaInfo: {
    title: '开源项目详情'
  },
  methods: {
    markdownToHtml (markdown) {
      if (!markdown) return ''
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
  .project .fixed-header{
    display: flex;
    justify-content: space-between;
  }
  .project .fixed-header .right{
    font-size: 14px;
    color: #409EFF;
  }
  .project .fixed-header .right span{
    cursor: pointer;
  }
  .project .fixed-header .right a{
    margin: 0 15px;
    cursor: pointer;
    color: #409EFF;
    text-decoration: none;
  }
  .project .text P{
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgb(96, 108, 113);
  }
  .project .text h1{
    margin: 10px 0 0 0;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.5;
    color: rgb(48, 49, 51);
  }
  .project .text .tags{
    display: flex;
    margin-top: 10px;
  }
  .project .text .tags .tag:first-child{
    margin-left: 0;
  }
  .project .text .tags .tag{
    margin: 0 0 0 10px;
    padding: 0 8px;
    background-color: rgba(103,194,58,.1);
    border-color: rgba(103,194,58,.2);
    color: #67c23a;
    font-size: 12px;
  }
  .project .text .content{
    margin-top: 20px;
    padding: 20px 0 0 0;
    border-top: 1px solid rgb(228, 231, 237);
  }
</style>
