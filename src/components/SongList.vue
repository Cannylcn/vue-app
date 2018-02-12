<template>
    <div class="song-list">
      <router-link to="/popular" >
        <img :src="">
        <p :bind=""></p>
        <div class="listener"><i class="iconfont icon-icon_headset"></i><span :bind=""></span></div>
      </router-link>
    </div>
</template>
<script>

</script>
<style scoped>
  .song-list{
    width: 33.3333%;
    float: left;
    position: relative;
  }
  img{
    width: 100%;
  }
  p{
    padding: .2rem;
    font-size: .8rem;
  }
  .listener{
    position: absolute;
    top: .2rem;
    left: .4rem;
  }
</style>
