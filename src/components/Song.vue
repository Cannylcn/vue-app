<template>
    <div class="song">
      <router-link :to="link">
        <div class="song-index"><span v-show="!showCover">{{ songIndex}}</span><img v-show="showCover" :src="coverSrc"/></div>
        <div class="song-info">
          <div class="song-title">
            <p class="song-name">{{ songName }}</p>
            <p class="song-singer">{{ songSinger}}</p>
          </div>
          <i class="iconfont icon-MV" v-show="!showCover"></i>
          <i class="iconfont icon-more"></i>
        </div>
      </router-link>
    </div>
</template>
<script>
  export default {
    props: [
      'songName',
      'songSinger',
      'songIndex',
      'link',
      'showCover',
      'coverSrc'
    ]
  }
</script>
<style scoped>
.song{
  height: 4rem;
  line-height: 4rem;
}
  .song-index{
    float: left;
    width: 3rem;
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }
  .song-index img{
    width: 90%;
    float: left;
    margin-top: .7rem;
    margin-left: .1rem;
  }
  .song-info{
    margin-left: 3rem;
    position: relative;
    text-align: right;
    padding-right: 1rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #eee;
  }
  .song-title{
    position: absolute;
    left: 0;
    top: .6rem;
    display: inline-block;
    text-align: left;
    line-height: 1.4;
  }
  .song-name{
    font-size: 1.2rem;
    color: #333;
  }
  .song-singer{
    font-size: .9rem;
    color: #888;
  }
  .song-info i{
    font-size: 1.8rem;
    position: relative;
    top: .2rem;
    margin-left: 1.3rem;
    color: #888;
  }
</style>
