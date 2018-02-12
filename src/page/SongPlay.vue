<template>
    <div class="song-play">
      <div v-transfer-dom>
        <actionsheet
          :menus="menus"
          :show-cancel= true
          cancel-text="关闭"
          @on-click-menu-delete="onDelete"
          @on-click-menu="playMenu"
          v-model="songMenu"></actionsheet>
      </div>
      <div v-transfer-dom>
        <actionsheet
          :menus="singerInfo"
          v-model="singer"></actionsheet>
      </div>
      <img class="needle-top" :src="discTopUrl"/>
      <img id="disc" :src="discUrl" :class="{stop: !play}"/>
      <blur :blur-amount=40 :url="url" style="background: rgba(0,0,0,.2);height: 100%;">
        <div :class="[{player: true}, {play: play}]">
          <img id="play_cover" :src="url">
        </div>
        <div class="play-control">
          <div style="padding: 0 10%;height: 30%">
            <flexbox align="center">
              <flexbox-item><i @click="collect('已添加到我喜欢的音乐')" class="iconfont icon-dynmenulikenormal"></i></flexbox-item>
              <flexbox-item><i @click="collect('已添加到下载列表')" class="iconfont icon-xiazai"></i></flexbox-item>
              <flexbox-item><i @click="collect('评论暂未开放')" class="iconfont icon-dyncomments"></i></flexbox-item>
              <flexbox-item><i @click="singer = !singer" class="iconfont icon-more" style="transform: rotate(90deg);display: inline-block"></i></flexbox-item>
            </flexbox>
          </div>
          <div class="play-progress">
            <box gap="10px" style="position: relative">
              <span style="left: -2.9rem">{{currentTime}}</span>
              <range :minHTML="hide" :maxHTML="hide" v-model="player" @touchmove.native="change"></range>
              <span style="right: -2.9rem">{{ duration }}</span>
            </box>
          </div>
          <div style="height: 40%">
            <flexbox align="center">
              <audio id="music" :src="musicUrl" controls preload @timeupdate="updateTime"></audio>
              <flexbox-item><i @click="circulation" class="iconfont" :class="{'icon-xunhuanbofang': playback == 0,'icon-danquxunhuan': playback == 1,'icon-suijibofang': playback == 2}" style="font-size: 1.6rem"></i></flexbox-item>
              <flexbox-item><i @click="lastMusic" class="iconfont icon-next" style="font-size: 2rem;transform: rotate(180deg);display: inline-block"></i></flexbox-item>
              <flexbox-item><i @click="togglePlay" class="iconfont" :class="{'icon-videoplay': !play, 'icon-pause': play}" style="font-size: 2.5rem"></i></flexbox-item>
              <flexbox-item><i @click="nextMusic" class="iconfont icon-next" style="font-size: 2rem"></i></flexbox-item>
              <flexbox-item><i @click="songMenu = !songMenu" class="iconfont icon-playlist" style="font-size: 1.6rem"></i></flexbox-item>
            </flexbox>
          </div>
        </div>
      </blur>
    </div>
</template>
<script>
  import { Blur, Flexbox, FlexboxItem, XProgress, Range, Box, Actionsheet, TransferDom } from 'vux'
  const prefixInteger = function (num, n) {
    return (new Array(n).join(0) + num).slice(-n)
  }
  export default {
    directives: {
      TransferDom
    },
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      XProgress,
      Box,
      Actionsheet,
      Range
    },
    beforeCreate () {
      this.$nextTick(function () {
      })
    },
    created () {
//      console.log('创建成功')
    },
    beforeMount () {
//      console.log('挂载之前')
    },
    mounted () {
//      console.log('挂载之后')
      this.createMenu()
      this.$nextTick(() => {
        this.url = this.playList[this.index].coverUrl
      })
    },
    beforeDestroy () {
//      console.log('准备销毁')
    },
    destroyed () {
//      console.log('已被销毁')
    },
    computed: {
    },
    methods: {
      updateTime (e) {
        this.isStop = e.target.ended
        if (e.target.ended) {
          this.play = false
          switch (this.playback) {
            case 0:
              setTimeout(() => {
                this.nextMusic()
              }, 100)
              break
            case 1:
              setTimeout(() => {
                this.loopMusic()
              }, 100)
              break
            case 2:
              setTimeout(() => {
                this.randomMusic()
              }, 100)
              break
          }
        }
        this.player = e.target.currentTime / document.getElementById('music').duration * 100
        this.currentTime = prefixInteger(parseInt(e.target.currentTime / 60), 2) + ':' + prefixInteger(parseInt(e.target.currentTime % 60), 2)
        this.duration = prefixInteger(parseInt(e.target.duration / 60), 2) + ':' + prefixInteger(parseInt(e.target.duration % 60), 2)
      },
      change () {
        document.getElementById('music').currentTime = this.player * document.getElementById('music').duration / 100
      },
      circulation () {
        this.$vux.toast.show({
          type: 'text',
          position: 'center',
          text: this.playback !== 2 ? this.cir[this.playback + 1] : this.cir[0]
        })
        if (this.playback < this.cir.length - 1) {
          this.playback++
        } else {
          this.playback = 0
        }
      },
      collect (con) {
        this.$vux.toast.show({
          type: 'text',
          position: 'center',
          text: con
        })
      },
      togglePlay () {
        const music = document.getElementById('music')
        if (!this.play) {
          music.play()
          this.play = !this.play
        } else {
          music.pause()
          this.play = !this.play
        }
      },
      nextMusic () {
        const music = document.getElementById('music')
        if (this.index < this.playList.length - 1) {
          this.updateTitle(this.playList[this.index + 1].name)
          music.src = this.playList[this.index + 1].src
          music.play()
          this.url = this.playList[this.index + 1].coverUrl
          this.play = true
          this.index ++
        } else {
          this.index = 0
          this.updateTitle(this.playList[this.index].name)
          music.src = this.playList[this.index].src
          music.play()
          this.url = this.playList[this.index].coverUrl
          this.play = true
        }
      },
      lastMusic () {
        const music = document.getElementById('music')
        if (this.index > 0) {
          this.updateTitle(this.playList[this.index - 1].name)
          music.src = this.playList[this.index - 1].src
          music.play()
          this.url = this.playList[this.index - 1].coverUrl
          this.play = true
          this.index --
        } else {
          this.index = this.playList.length - 1
          this.updateTitle(this.playList[this.index].name)
          music.src = this.playList[this.index].src
          music.play()
          this.url = this.playList[this.index].coverUrl
          this.play = true
        }
      },
      loopMusic () {
        const music = document.getElementById('music')
        this.updateTitle(this.playList[this.index].name)
        music.src = this.playList[this.index].src
        music.play()
        this.play = true
      },
      randomMusic () {
        const music = document.getElementById('music')
        const randomIndex = Math.floor(Math.random() * this.playList.length)
        this.updateTitle(this.playList[randomIndex].name)
        music.src = this.playList[randomIndex].src
        music.play()
        this.url = this.playList[randomIndex].coverUrl
        this.play = true
      },
      createMenu () {
        this.menus.push({
          label: '播放列表',
          type: 'info'
        })
        for (let i in this.playList) {
          this.menus.push({
            label: '<div style="text-align: left;padding: 0 1rem;"><span style="font-size: 1.1rem">' + this.playList[i].name + '</span></div>',
            value: this.playList[i].id
          })
        }
      },
      playMenu (key, item) {
        const music = document.getElementById('music')
        this.updateTitle(this.playList[key - 1].name)
        music.src = this.playList[key - 1].src
        music.play()
        this.url = this.playList[key - 1].coverUrl
        this.play = true
      },
      updateTitle (name) {
        this.$store.dispatch('updateTitle', name)
      }
    },
    data () {
      return {
        playback: 0,
        cir: ['列表循环', '单曲循环', '随机播放'],
        url: '',
        showHideOnBlur: false,
        player: 0,
        musicUrl: this.$route.params.src,
        index: this.$route.params.index,
        musicTwoUrl: './static/music/music-2.mp3',
        discUrl: './static/images/needle-plus-2.png',
        discTopUrl: './static/images/needle-top.png',
        play: false,
        duration: '--:--',
        currentTime: '00:00',
        playList: this.$route.params.playlist,
        songMenu: false,
        singer: false,
        hide: '<span></span>',
        singerInfo: {
          'language.noop': '<span class="menu-title">快捷菜单</span>',
          'zh-CN': '歌手：徐秉龙',
          'en': '专辑： 迂回',
          'third': '收藏到歌单'
        },
        menus: [
//          {
//            'menu.noop': '<span class="menu-title">播放列表</span>',
//            'zh-CN': 'Here with you',
//            'en': '全部都是你',
//            'third': '那些你很冒险的梦'
//          }
        ]
      }
    }
  }
</script>
<style scoped>
.song-play{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#disc{
  position: absolute;
  top: 46px;
  height: 115px;
  left: 49.5%;
  z-index: 10;
  transition: all 0.3s ease-in-out;
}
.needle-top{
  position: absolute;
  top: 38px;
  width: 18px;
  left: 48%;
  z-index: 11;
}
  .player{
    padding-top: 46px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.player img{
  width: 158px;
  height: 158px;
  border-radius: 50%;
  border: 30px solid rgba(0,0,0,.4);
  transition: all 0.3s;
}
.play img{
  animation: play 10s linear infinite;
}
.stop{
  transform-origin: 0 0;
  transform: rotate(-15deg);
}
@keyframes play {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
  .play-control{
    height: 40%;
  }
.play-control i{
  color: rgba(255,255,255,.8);
  font-size: 1.5rem;
}
.play-progress{
  padding: 0 2.5rem
}
.play-progress span{
  position: absolute;
  top: -.7rem;
  color: rgba(255,255,255,.8);
}
.vux-flexbox{
  height: 100%;
}
.vux-flexbox .vux-flexbox-item{
  text-align: center;
}
audio{
  display: none;
}
  .vux-range-input-box{
    margin-left: 0!important;
    margin-right: 0!important;
  }
</style>
