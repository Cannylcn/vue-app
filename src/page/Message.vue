<template>
    <div>
      <div style="padding: 1rem">
        <button-tab>
          <button-tab-item selected>私信</button-tab-item>
          <button-tab-item>评论</button-tab-item>
          <button-tab-item>@我</button-tab-item>
          <button-tab-item>通知</button-tab-item>
        </button-tab>
      </div>
      <p class="tab-content">暂无内容</p>
    </div>
</template>
<script>
  import { ButtonTab, ButtonTabItem } from 'vux'
  export default {
    components: {
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  .tab-content{
    padding: 3rem 0;
    text-align: center;
    color: #999;
  }
</style>
