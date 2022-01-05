<template>
  <div class="my-card" :class="`is-${shadow}-shadow`">
    <div class="my-card__header" v-if="$slots.header || title">
      <slot name="header">
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="my-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    shadow: {
      type: String,
      default: 'always'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .my-card{
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
  }
  .my-card.is-always-shadow,
  .my-card.is-hover-shadow:hover{
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%)
  }
  .my-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .my-card__body {
    overflow: hidden;
    padding: 20px;
  }
</style>
