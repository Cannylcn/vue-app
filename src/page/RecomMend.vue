<template>
    <div>
      <div class="adv">
        <img src="/static/images/ritui.jpg"/>
        <p><i class="iconfont icon-bulb"></i>根据你的音乐口味生成，每天6:00更新</p>
      </div>
      <song v-for="(item, index) in recommendList"
            :key="item.id"
            @click.native="updateTitle(item.name)"
            :songIndex="index+1"
            :songName="item.name"
            :songSinger="item.singer"
            :showCover="true"
            :coverSrc="item.coverUrl"
            :link="{name:'songplay',params:{src:item.src, playlist: recommendList, index: index}}"></song>
    </div>
</template>
<script>
  import Song from '@/components/Song.vue'
  export default {
    components: {
      Song
    },
    data () {
      return {
        recommendList: []
      }
    },
    mounted () {
      this.$http({
        method: 'GET',
        url: './static/data/songlist.json'
      })
      .then(response => {
        this.recommendList = response.data
      })
    },
    methods: {
      updateTitle (name) {
        this.$store.dispatch('updateTitle', name)
      }
    }
  }
</script>
<style scoped>
.adv{
  height: 12rem;
  background: deepskyblue;
  position: relative;
  overflow: hidden;
}
.adv img{
  width: 100%;
}
  .adv p{
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    font-size: .8rem;
    color: #fff;
  }
.adv p i{
  font-size: 1rem;
  margin-right: .5rem;
}
</style>
