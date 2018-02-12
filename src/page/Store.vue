<template>
    <div style="padding: 1rem 0">
      <flexbox :gutter="0" align="start" wrap="wrap" justify="space-between">
        <flexbox-item v-for="(item, index) in goodsList" :span="1/2" :key="item.id">
          <goods :src="item.src" :title="item.title" :price="item.price" :defaultSrc="item.defaultSrc"></goods>
        </flexbox-item>
      </flexbox>
    </div>
</template>
<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import Goods from '@/components/Goods.vue'
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Goods
    },
    data () {
      return {
        goodsList: [
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: './static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: './static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: './static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'},
          {src: '/static/images/sony.jpg', title: '网易云音乐索尼蓝牙耳机', price: 119, defaultSrc: './static/images/loading.gif'}
        ]
      }
    }
  }
</script>
<style scoped>

</style>
