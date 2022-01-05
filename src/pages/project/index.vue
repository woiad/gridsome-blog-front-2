<template>
  <layout>
    <search @search="searchText = $event" />
    <div class="project-list">
      <div v-for="project in projects" :key="project.node.id" class="project">
        <my-card shadow="hover">
          <template v-slot:header>
            <div class="fixed-header">
              <div class="title" @click="$router.push({ path: project.node.path })">
                <span class="icon">
                  <font-awesome-icon icon="headset" />
                </span>
                {{ project.node.title }}
              </div>
              <div class="right">
                <a :href="project.node.href" target="_blank">
                  <font-awesome-icon icon="arrow-left" />
                  前往 Github
                </a>
                <span class="share" @click="copyHandle(project.node.path)">
                  <font-awesome-icon icon="share-alt" />
                </span>
              </div>
            </div>
          </template>
          <template v-slot:default>
            <div class="text">
              <p>最近更新 <span>{{ project.node.updated_at | date('YYYY-MM-DD') }}</span></p>
              <h1>{{ project.node.info }}</h1>
              <div class="tags">
                <div class="tag" v-for="tag in project.node.tags" :key="tag.id">
                  {{ tag.title }}
                </div>
              </div>
            </div>
          </template>
        </my-card>
      </div>
    </div>
  </layout>
</template>

<page-query>
query{
  projects: allStrapiProject{
    edges{
      node{
        title
        info
        href
        content
        tags{
          id
          title
        }
        id
        created_at
        path
        updated_at
      }
    }
  }
}
</page-query>

<script>
import Search from '../../components/search'
export default {
  name: 'Project',
  data () {
    return {
      searchText: ''
    }
  },
  metaInfo: {
    title: '开源项目详情'
  },
  components: {
    Search
  },
  computed: {
    projects () {
      return this.$page.projects.edges.filter(project => {
        const text = this.searchText.trim()
        return project.node.title.includes(text) || project.node.info.includes(text) || project.node.content.includes(text)
      })
    }
  },
  methods: {
    copyHandle (url) {
      url = `${window.location.origin}${url}`
      console.log(url)
      this.$copy('.share', url)
    }
  }
}
</script>

<style scoped>
  .project-list{
    margin-top: 20px;
  }
  .project-list .fixed-header{
    display: flex;
    justify-content: space-between;
  }
  .project-list .fixed-header .title{
    color: #1e6bb8;
    cursor: pointer;
  }
  .project-list .fixed-header .title .icon{
    padding-right: 13px;
  }
  .right a,
  .right span{
    font-size: 14px;
    color: #409EFF;
    text-decoration: none;
    cursor: pointer;
  }
  .right span{
    padding-left: 15px;
  }
  .project-list .project{
    margin-bottom: 20px;
  }
  .project-list .project .text P{
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgb(96, 108, 113);
  }
  .project-list .project .text h1{
    margin: 10px 0 0 0;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.5;
    color: rgb(48, 49, 51);
  }
  .project-list .project .text .tags{
    display: flex;
    margin-top: 10px;
  }
  .project-list .project .text .tags .tag:first-child{
    margin-left: 0;
  }
  .project-list .project .text .tags .tag{
    margin: 0 0 0 10px;
    padding: 0 8px;
    background-color: rgba(103,194,58,.1);
    border-color: rgba(103,194,58,.2);
    color: #67c23a;
    font-size: 12px;
  }
</style>
