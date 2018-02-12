<template>
    <div>
      <div class="adv">
        <img src="/static/images/gedan-menu.jpg"/>
      </div>
      <div>
        <flexbox class="song-list" :gutter="0" align="start" wrap="wrap" justify="space-between">
          <flexbox-item v-for="item in songmenu" :key="item.id" :span="0.98/3">
            <router-link :to="{name: 'songList', params: {
          listUrl: item.listUrl,
          listener: item.listener,
          description: item.description,
          collects: item.collects,
          comment: item.comment,
          forward: item.forward,
          creator: item.creator}}">
              <div class="song-list">
                <img :src="item.listUrl">
                <p>{{ item.description }}</p>
                <div class="listener"><i class="iconfont icon-icon_headset"></i><span>{{ item.listener }}</span></div>
              </div>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
</template>
<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        songmenu: []
      }
    },
    mounted () {
      this.$http({
        method: 'GET',
        url: './static/data/songmenu.json'
      })
      .then(response => {
        this.songmenu = response.data
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
  /*height: 12rem;*/
  /*background: deepskyblue;*/
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
  font-size: .8rem;
  margin-right: .5rem;
}
.song-list{
  position: relative;
  margin-top: 3px;
}
.song-list img{
  width: 100%;
}
.song-list p{
  padding: 0 .2rem .3rem;
  font-size: .8rem;
  text-align: center;
}
.listener{
  position: absolute;
  top: .2rem;
  right: .4rem;
  color: #fff;
  font-size: .9rem;
}
.listener i{
  font-size: .8rem;
}
</style>
