<template>
  <div id="app">
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu"></actionsheet>
    </div>
    <drawer
      width="71%"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#EFEFF4', width: '71%', overflow: 'auto'}">

      <!-- drawer content -->
      <div slot="drawer" class="drawer">
        <blur :blur-amount=40 :url="url" style="background: rgba(0,0,0,.2);height: 240px">
          <div class="center"><img :src="url" style="width: 80px;height: 80px"><br/><span>{{username}}</span><p style="font-size: .8rem">个人介绍：网易云音乐，我爱你</p>
          <ul class="userFigure">
            <li @click="toggleMenu"><router-link to="/dynamic" >动态<br><span>0</span></router-link></li>
            <li @click="toggleMenu"><router-link to="/attention" >关注<br><span>6</span></router-link></li>
            <li @click="toggleMenu"><router-link to="/fans" >粉丝<br><span>1</span></router-link></li>
            <li @click="toggleMenu"><router-link to="/info" ><i class="iconfont icon-edit"></i><br><span style="color: #f2f2f2;font-size: .8rem;font-weight: 400;top: .2em">我的资料</span></router-link></li>
          </ul>
          </div>
        </blur>
        <group>
          <cell title="我的消息" :link="{path: '/message'}" @click.native="toggleMenu">
            <i class="iconfont icon-message margin-right" slot="icon"></i>
          </cell>
        </group>
        <group>
          <cell title="VIP会员" :link="{path: '/vip'}" @click.native="toggleMenu">
            <i class="iconfont icon-vip margin-right" slot="icon"></i>
          </cell>
          <cell title="商城" :link="{path: '/store'}" @click.native="toggleMenu">
            <i class="iconfont icon-weibiao45124 margin-right" slot="icon"></i>
          </cell>
        </group>
        <group>
          <cell title="设置" :link="{path: '/set'}" @click.native="toggleMenu">
            <i class="iconfont icon-setting margin-right" slot="icon"></i>
          </cell>
          <cell title="个性换肤" :link="{path: '/skin'}" @click.native="toggleMenu">
            <i class="iconfont icon-zhuti margin-right" slot="icon"></i>
          </cell>
          <cell title="定时关闭" :link="{path: '/timing'}" @click.native="toggleMenu">
            <i class="iconfont icon-time margin-right" slot="icon"></i>
          </cell>
        </group>
        <group>
          <cell title="分享网易云音乐" :link="{path: '/popular'}" @click.native="toggleMenu">
            <i class="iconfont icon-Share margin-right" slot="icon"></i>
          </cell>
          <cell title="关于" :link="{path: '/about'}" @click.native="toggleMenu">
            <i class="iconfont icon-i-info margin-right" slot="icon"></i>
          </cell>
        </group>
        <group style="padding: 0 0 1.5rem">
          <x-button plain type="primary" style="border: 0" @click.native="logout">退出登录</x-button>
        </group>
        <!--<router-link to="/popular" @click.native="drawerVisibility = !drawerVisibility"><span style="color: #fff;font-size: 1.03rem;">点击查看 / 编辑</span></router-link>-->
      </div>

      <x-header
        :title="title"
        :left-options="leftOptions"
        :transition = "headerTransition"
        @on-click-more="onClickMore"
        :right-options="rightOptions">
        <span v-if="$route.path == '/songplay'" slot="default">{{songName}}</span>
        <span v-if="$route.path == '/'" @click="toggleMenu" slot="overwrite-left" >
          <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
        <span v-if="$route.path == '/login'" slot="overwrite-left" >
          <i class="iconfont icon-icon_close" style="fill:#999;position:relative;top:-2px;left:-3px;font-size: 1.5rem"></i>
        </span>
      </x-header>
      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <transition
          @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
          :name="viewTransition" :css="!!direction"
        >
          <router-view class="router-view"></router-view>
        </transition>
      </view-box>
      <tabbar v-show="$route.path != '/songplay' && $route.path != '/login' && $route.path != '/logintype' && $route.path != '/register'">
        <tabbar-item :selected="$route.path == '/'" :link="{path: '/'}">
          <i class="iconfont icon-custom-logo" slot="icon"></i>
          <span slot="label">发现音乐</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path == '/mymusic'" :link="{path: '/mymusic'}">
          <i class="iconfont icon-music" slot="icon"></i>
          <span slot="label">我的音乐</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path == '/social'" :link="{path: '/social'}">
          <i class="iconfont icon-friend_light" slot="icon"></i>
          <span slot="label">朋友</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path == '/info'" :link="{path: '/info'}">
          <i class="iconfont icon-account" slot="icon"></i>
          <span slot="label">账号</span>
        </tabbar-item>
      </tabbar>
    </drawer>
  </div>
</template>

<script>
  import { Drawer, Actionsheet, ViewBox, XHeader, XButton, Blur, Cell, Group, Tabbar, TabbarItem, TransferDom } from 'vux'
  import { mapState } from 'vuex'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Drawer,
      ViewBox,
      XHeader,
      Actionsheet,
      Blur,
      Cell,
      Group,
      Tabbar,
      TabbarItem,
      XButton
    },
    methods: {
      toggleMenu () {
        this.drawerVisibility = !this.drawerVisibility
      },
      logout () {
        this.$store.dispatch('UserLogout')
        if (!this.$store.state.token) {
          this.$router.push('/login')
          this.drawerVisibility = !this.drawerVisibility
          this.$message({
            type: 'success',
            message: '登出成功'
          })
        } else {
          this.$message({
            type: 'info',
            message: '登出失败'
          })
        }
      },
//      onShowModeChange (val) {
//        /** hide drawer before changing showMode **/
//        this.drawerVisibility = false
//        setTimeout(one => {
//          this.showModeValue = val
//        }, 400)
//      },
//      onPlacementChange (val) {
//        /** hide drawer before changing position **/
//        this.drawerVisibility = false
//        setTimeout(one => {
//          this.showPlacementValue = val
//        }, 400)
//      },
      onClickMore () {
        this.showMenu = true
      }
//      changeLocale (locale) {
//        this.$i18n.set(locale)
//        this.$locale.set(locale)
//      }
//      ...mapActions([
//        'updateDemoPosition'
//      ])
    },
    mounted () {
      console.log('feature-2020-1 1次提交')
//      this.handler = () => {
//        if (this.path === '/demo') {
//          this.box = document.querySelector('#demo_list_box')
//          this.updateDemoPosition(this.box.scrollTop)
//        }
//      }
//    },
//    beforeDestroy () {
//      this.box && this.box.removeEventListener('scroll', this.handler, false)
//    },
//    watch: {
//      path (path) {
//        if (path === '/component/demo') {
//          this.$router.replace('/demo')
//          return
//        }
//        if (path === '/demo') {
//          setTimeout(() => {
//            this.box = document.querySelector('#demo_list_box')
//            if (this.box) {
//              this.box.removeEventListener('scroll', this.handler, false)
//              this.box.addEventListener('scroll', this.handler, false)
//            }
//          }, 1000)
//        } else {
//          this.box && this.box.removeEventListener('scroll', this.handler, false)
//        }
//      }
    },
    computed: {
      ...mapState({
//        route: state => state.route,
//        path: state => state.route.path
//        deviceready: state => state.app.deviceready,
//        demoTop: state => state.vux.demoScrollTop,
//        isLoading: state => state.vux.isLoading,
        direction: state => state.direction,
        songName: state => state.title
      }),
//      isShowBar () {
//        if (/component/.test(this.path)) {
//          return true
//        }
//        return false
//      },
      leftOptions () {
        return {
          showBack: this.$route.path !== '/' && this.$route.path !== '/login'
        }
      },
      rightOptions () {
        return {
          showMore: this.$route.path !== '/register' && this.$route.path !== '/login'
        }
      },
      headerTransition () {
        if (!this.direction) return ''
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      componentName () {
        if (this.$route.path) {
          const parts = this.$route.path.split('/')
          if (/component/.test(this.$route.path) && parts[2]) return parts[2]
        }
      },
//      isDemo () {
//        return /component|demo/.test(this.route.path)
//      },
//      isTabbarDemo () {
//        return /tabbar/.test(this.route.path)
//      },
      title () {
        if (this.$route.path === '/') return '发现音乐'
        if (this.$route.path === '/popular') return '我的购物车'
        if (this.$route.path === '/login') return '登录'
        if (this.$route.path === '/logintype') return '手机号登录'
        if (this.$route.path === '/register') return '注册'
        if (this.$route.path === '/songlist') return '歌单'
        if (this.$route.path === '/recommend') return '每日推荐'
        if (this.$route.path === '/info') return '完善资料'
        if (this.$route.path === '/mymusic') return '我的音乐'
        if (this.$route.path === '/social') return '动态'
        if (this.$route.path === '/about') return '关于网易云音乐'
        if (this.$route.path === '/set') return '设置'
        if (this.$route.path === '/timing') return '定时关闭'
        if (this.$route.path === '/message') return '我的消息'
        if (this.$route.path === '/vip') return 'Vip会员'
        if (this.$route.path === '/store') return '网易云商城'
        if (this.$route.path === '/skin') return '个性换肤'
        if (this.$route.path === '/dynamic') return '动态'
        if (this.$route.path === '/attention') return '关注'
        if (this.$route.path === '/fans') return '粉丝'
        if (this.$route.path === '/allsonglist') return '歌单'
        if (this.$route.path === '/ranking') return '排行榜'
        if (this.$route.path === '/songplay') return ''
        return this.componentName ? `page/${this.componentName}` : '导航错误'
      },
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    data () {
      return {
//        username: localStorage.getItem('username'),
        username: 'Canny',
        showMenu: false,
        menus: {
          'language.noop': '<span class="menu-title">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left',
        url: './static/images/user.jpg'
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import "stylesheets/style.css";
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.vux-header-back{
  color: #fff!important;
}
.vux-header .vux-header-left .left-arrow:before{
  border: 2px solid #fff!important;
  border-width: 1px 0 0 1px!important;
}
.vux-header-more{
  color: #fff!important;
}
/*.vux-header .vux-header-title{*/
  /*color: #fff!important;*/
/*}*/
ul.userFigure{
  overflow: hidden;
  border-style: solid;
  border-width: .5px 0 .5px 0;
  border-color: #ddd;
  padding: .5rem 0;
  margin-top: .5rem;
}
ul.userFigure li{
  float: left;
  width: 25%;
  /*padding: .5em 0;*/
  text-align: center;
  font-size: .8rem;
  color: #f2f2f2;
  border-right: 0.5px solid #ddd;
  box-sizing: border-box;
}
ul.userFigure li:nth-last-of-type(1){
  border: 0;
}
ul.userFigure li span{
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
}
ul.userFigure li i{
  display: inline-block;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  font-size: 1.2em;
  position: relative;
  top: 0.08rem;
}
  .margin-right{
    margin-right: 1rem;
  }
.vux-label{
  font-size: 1rem;
}
.weui-tabbar__label span{
  font-size: .8rem;
}
.weui-tabbar{
  background: rgba(0,0,0,.8)!important;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color: #fff!important;
}
.weui-tabbar__icon > i{
  position: relative;
  top: -.2rem;
}
.range-handle{
  width: 16px!important;
  height: 16px!important;
  top: -8px!important;
}
.range-bar{
  background-color: #f2f2f2!important;
}
  .drawer i{
    font-size: 1.4rem;
  }
</style>
