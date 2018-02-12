<template>
    <div style="padding: 1rem 0">
      <p class="title">官方推荐</p>
      <flexbox style="text-align: center" :gutter="3" align="start" wrap="wrap" justify="space-between">
        <flexbox-item v-for="item in skinList" :key="item.id">
          <x-img :src="item.src" offset="0"></x-img>
          <p>{{item.name}}</p>
        </flexbox-item>
      </flexbox>
      <p class="title">会员专属</p>
      <flexbox style="text-align: center" :gutter="3" align="start" wrap="wrap" justify="space-between">
        <flexbox-item v-for="item in skinList" :key="item.id">
          <x-img :src="item.src" offset="0"></x-img>
          <p>{{item.name}}</p>
        </flexbox-item>
      </flexbox>
    </div>
</template>
<script>
  import { Flexbox, FlexboxItem, XImg } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XImg
    },
    data () {
      return {
        skinList: [
          {src: './static/images/cover.jpg', name: '官方红'},
          {src: './static/images/cover.jpg', name: '官方白'},
          {src: './static/images/cover.jpg', name: '自选颜色'},
          {src: './static/images/cover.jpg', name: '自定义皮肤'}
        ]
      }
    }
  }
</script>
<style scoped>
  .title{
    border-left: 2px solid #d43c33;
    padding-left: .5rem;
    margin: .5rem 0;
  }
</style>
