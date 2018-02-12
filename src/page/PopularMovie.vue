<template>
    <div class="popular">
      <h1>welcome {{username}}</h1>
      <product-list></product-list>
      <hr/>
      <shopping-cart></shopping-cart>
      <x-button @click.native="iconType = 'error'" type="primary" link="/">返回首页</x-button>
    </div>
</template>
<script>
  import { XButton } from 'vux'
  import { mapState } from 'vuex'
  import ProductList from '../components/ProductList.vue'
  import ShoppingCart from '../components/ShoppingCart.vue'
  export default {
    components: {
      XButton,
      ProductList,
      ShoppingCart
    },
    data () {
      return {
        username: localStorage.getItem('username')
      }
    },
    computed: {
      ...mapState([
        'showMenu'
      ])
    }
  }
</script>
<style scoped>
.popular{
  text-align: center;
}
</style>
