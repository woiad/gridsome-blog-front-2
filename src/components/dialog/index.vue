<template>
  <div class="lp-confirm-container" ref="lpConfirmAlert">
    <div class="lp-confirm-box">
      <div class="lp-confirm-title">
        <span class="lp-confirm-title-txt">{{ title }}</span>
        <span class="lp-confirm-title-close" @click="cancelConfirm">&#10006;</span>
      </div>
      <div class="lp-confirm-content">
        <span class="lp-confirm-content-txt">{{ content }}</span>
      </div>
      <div class="lp-confirm-btn-groups">
        <button class="lp-confirm-btn primary" @click="sureConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: '确定关闭吗？'
    }
  },
  methods: {
    sureConfirm () {
      this.$el.parentNode.removeChild(this.$el)
    },
    cancelConfirm () {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style scoped>
.lp-confirm-container{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: 99;
}
.lp-confirm-box{
  margin: 15vh auto 0;
  width: 30%;
  height: 155px;
  min-width: 350px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-sizing: border-box;
  background-color: white;
}
.lp-confirm-title{
  height: 55px;
  line-height: 55px;
  position: relative;
}
.lp-confirm-title-txt{
  font-size: 18px;
  margin-left: 20px;
  color: #303133;
}
.lp-confirm-title-close{
  position: absolute;
  right: 20px;
  cursor: pointer;
  color: rgb(155, 143, 143);
}
.lp-confirm-title-close:hover{
  color: rgb(44, 40, 40);
}
.lp-confirm-content{
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #666;
}
.lp-confirm-content-txt{
  word-break: break-all;
}
.lp-confirm-btn-groups{
  height: 60px;
}
.lp-confirm-btn{
  float: right;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  /* color: #606266; */
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: .1s;
  transition: .1s;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 20px;
}
.lp-confirm-btn.primary{
  color: #fff;
  background-color: #409EFF;
  border-color: #409EFF;
}
.lp-confirm-btn-cancel{
  margin-right: 5px;
}
</style>
