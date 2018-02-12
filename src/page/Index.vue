<template>
  <div>
    <search
      v-bind:class="{focus: isfocus}"
      :placeholder="'猜你喜欢 '+placeholderValue"
      v-model='value'
      @on-submit="onSubmit"
      @on-focus="onFocus"
      ref="search"
      :autoFixed="false"
      @on-cancel="onCancel"></search>
    <swiper loop auto :list="list" :index="index" @on-index-change="changeIndex"></swiper>
    <ul class="classify">
      <li><router-link to="/songplay" ><i class="iconfont icon-music_radio_portable"></i><p>私人FM</p></router-link></li>
      <li><router-link to="/recommend" ><i class="iconfont icon-calendar"></i><p>每日推荐</p></router-link></li>
      <li><router-link to="/allsonglist" ><i class="iconfont icon-musicmenu"></i><p>歌单</p></router-link></li>
      <li><router-link to="/ranking" ><i class="iconfont icon-ranking"></i><p>排行榜</p></router-link></li>
    </ul>
    <group>
      <cell title="推荐歌单" :link="{path: '/allsonglist'}" @click.native="toggleMenu">
      </cell>
    </group>
    <flexbox :gutter="0" align="start" wrap="wrap" justify="space-between">
      <flexbox-item v-for="item in recommendSongList" :key="item.id" :span="0.98/3">
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
    <!--<flexbox :gutter="3" align="start">-->
      <!--<flexbox-item v-for="item in songListBottom" :key="item.id">-->
        <!--<router-link to="/songlist">-->
          <!--<div class="song-list">-->
            <!--<img :src="item.listUrl">-->
            <!--<p>{{ item.description }}</p>-->
            <!--<div class="listener"><i class="iconfont icon-icon_headset"></i><span>{{ item.listener }}</span></div>-->
          <!--</div>-->
        <!--</router-link>-->
      <!--</flexbox-item>-->
    <!--</flexbox>-->
  </div>
</template>

<script>
  import { XHeader, Swiper, XButton, Search, Cell, Group, Flexbox, FlexboxItem } from 'vux'
  import {mapState} from 'vuex'

  const baseList = [{
    url: 'javascript:',
    img: './static/images/swiper_1.jpg'
  }, {
    url: 'javascript:',
    img: './static/images/swiper_2.jpg'
  }, {
    url: 'javascript:',
    img: './static/images/swiper_3.jpg'
  }]
  const urlList = baseList.map((item, index) => ({
    url: 'http://cn.bing.com',
    img: item.img,
    fallbackImg: item.fallbackImg
  }))

  export default {
    components: {
      Swiper,
      XButton,
      XHeader,
      Search,
      Cell,
      Group,
      Flexbox,
      FlexboxItem
    },
    ready () {
    },
    mounted () {
      this.$http({
        method: 'GET',
        url: './static/data/songmenu.json'
      })
        .then(response => {
          this.recommendSongList = response.data
        })
//      this.$vux.confirm.show({
//        title: '检测token',
//        content: localStorage.getItem('token')
//      })
    },
    computed: {
      ...mapState([
        'test', 'activeName'
      ])
//      songListTop () {
//        return this.recommendSongList.filter(item => {
//          return item.id <= 3
//        })
//      },
//      songListBottom () {
//        return this.recommendSongList.filter(item => {
//          return item.id > 3
//        })
//      }
    },
    methods: {
      changeIndex (index) {
        this.index = index
      },
      showIndex (index) {
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: index
        })
      },
      change () {
        this.$store.dispatch('changeTest', 'op')
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: this.value ? this.value : this.placeholderValue
        })
      },
      onFocus () {
        this.isfocus = !this.isfocus
        console.log('on focus')
      },
      onCancel () {
        this.isfocus = !this.isfocus
        console.log('on cancel')
      }
    },
    data () {
      return {
        list: urlList,
        index: 0,
        results: [],
        value: '',
        placeholderValue: '红昭愿',
        isfocus: false,
        url: './static/images/cover.jpg',
        recommendSongList: []
      }
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #555;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
  ul.classify {
    overflow: hidden;
    border-style: solid;
    border-width: .5px 0 .5px 0;
    border-color: #ddd;
    padding: 1rem 0 .8rem;
  }
  ul.classify  li{
    float: left;
    width: 25%;
    /*padding: .5em 0;*/
    text-align: center;
    font-size: .8rem;
  }
  ul.classify  li p{
    font-size: .8rem;
    position: relative;
    color: #2c3e50;
  }
  ul.classify li i{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    color: #d43c33;
    border: 1px solid #d43c33;
    border-radius: 50%;
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
