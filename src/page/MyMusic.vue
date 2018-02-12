<template>
    <div class="mymusic">
      <group>
        <cell title="本地音乐" :link="{path: '/songplay'}">
          <i class="iconfont icon-music margin-right" slot="icon"></i>
        </cell>
        <cell title="最近播放" :link="{path: '/songplay'}">
          <i class="iconfont icon-nc-test-outline-px_player margin-right" slot="icon"></i>
        </cell>
        <cell title="我的电台" :link="{path: '/songplay'}">
          <i class="iconfont icon-music_radio_portable margin-right" slot="icon"></i>
        </cell>
        <cell title="我的收藏" :link="{path: '/songplay'}">
          <i class="iconfont icon-collect margin-right" slot="icon"></i>
        </cell>
      </group>
      <group>
        <cell title="我创建的歌单"
              :arrow-direction="showContent? 'up' : 'down'"
              @click.native="showContent = !showContent"
              is-link>
          <!--<i class="iconfont icon-edit margin-right" slot="icon"></i>-->
        </cell>
        <div class="slide" :class="showContent? 'animate' : ''">
          <song v-for="(item, index) in recommendList"
                :key="item.id"
                @click.native="updateTitle(item.name)"
                :songIndex="index+1"
                :songName="item.name"
                :songSinger="item.singer"
                :showCover="true"
                :coverSrc="item.coverSrc"
                :link="{name:'songplay',params:{src:item.src}}"></song>
        </div>
      </group>
      <group>
        <cell title="我收藏的歌单"
              :arrow-direction="collect? 'up' : 'down'"
              @click.native="collect = !collect"
              is-link>
          <!--<i class="iconfont icon-edit margin-right" slot="icon"></i>-->
        </cell>
        <div class="slide" :class="collect? 'animate' : ''">
          <song v-for="(item, index) in recommendList"
                :key="item.id"
                @click.native="updateTitle(item.name)"
                :songIndex="index+1"
                :songName="item.name"
                :songSinger="item.singer"
                :showCover="true"
                :coverSrc="item.coverSrc"
                :link="{name:'songplay',params:{src:item.src}}"></song>
        </div>
      </group>
    </div>
</template>
<script>
  import { Cell, Group } from 'vux'
  import Song from '@/components/Song.vue'
  export default {
    components: {
      Group,
      Cell,
      Song
    },
    data () {
      return {
        showContent: false,
        collect: false,
        recommendList: []
      }
    },
    mounted () {
      this.$http({
        method: 'GET',
        url: './static/data/recommend.json'
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
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  .mymusic i{
    font-size: 1.5rem;
    color: #d43c33;
  }
</style>
