<template>
  <div class="search">
    <my-card shadow="never">
      <div class="search-container">
        <div class="inp">
          <input @keydown.enter="search" type="text" v-model="searchText" placeholder="请输入文章标题或内容">
        </div>
        <div class="btn btn-search" @click="search">
          <span class="icon share">
            <font-awesome-icon icon="search" />
          </span>
        </div>
        <div class="btn btn-share" @click="$copy('.btn-share')">
          <span cass="icon">
            <font-awesome-icon icon="share-alt" />
          </span>
        </div>
      </div>
    </my-card>
  </div>
</template>


<script>
import ClipboardJS from 'clipboard'

export default {
  name: 'Search',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.searchText)
    }
  }
}
</script>

<style scoped>
  .search-container{
    display: flex;
  }
  .search-container .inp{
    width: 300px;
  }
  .search-container .inp input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    font-size: 14px;
  }
  .search-container .inp input:hover{
    border-color: #c0c4cc;
  }
  .search-container .inp input:focus{
    border-color: #409EFF;
    outline: 0;
  }
  .search-container .btn{
    width: 40px;
    height: 40px;
    margin-left: 10px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #dcdfe6;
    color: #606266;
    cursor: pointer;
  }
  .search-container .btn-search:hover{
    background: #fff;
    border-color: #409EFF;
    color: #409EFF;
  }
  .search-container .btn-share{
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  .search-container .btn-share:hover{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
</style>
