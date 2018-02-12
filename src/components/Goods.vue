<template>
    <div class="goods">
      <x-img :default-src="defaultSrc" :src="src" offset="100"></x-img>
      <p class="title">{{title}}</p>
      <p class="price">￥{{price}}</p>
    </div>
</template>
<script>
  import { XImg } from 'vux'
  export default {
    components: {
      XImg
    },
    props: [
      'defaultSrc',
      'src',
      'title',
      'price'
    ]
  }
</script>
<style scoped>
  .goods{
    text-align: center;
    margin-top: 1rem;
  }
  .goods img{
    width: 70%;
  }
  .title{
    font-size: 1rem;
    padding: 1rem 1rem 0;
  }
  .price{
    color: #d43c33;
  }
</style>
