<template>
    <div>
      <flexbox :gutter="0" align="start" wrap="wrap" justify="space-between">
        <flexbox-item style="margin-top: 1rem!important;" class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>畅享无损音质</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>会员专属曲库</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>会员专属电台</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>精品电台折扣</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>专属个性皮肤</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>会员特价商品</flexbox-item>
        <flexbox-item class="vip-item" :span="0.95/3"><i class="iconfont icon-vip"></i><br>豪华会员标志</flexbox-item>
      </flexbox>
    </div>
</template>
<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    methods: {
      collect (con) {
        this.$vux.toast.show({
          type: 'text',
          position: 'center',
          text: con
        })
      }
    }
  }
</script>
<style scoped>
  .vip-item{
    text-align: center;
    font-size: .9rem;
    margin-top: 1rem;
  }
  .vip-item i{
    font-size: 3rem;
    color: #d43c33;
  }
</style>
