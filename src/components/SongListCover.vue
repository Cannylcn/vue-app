<template>
  <div>
    <div class="song-list-cover">
      <blur :blur-amount=40 :url="listUrl" style="background: rgba(0,0,0,.2);height: 210px">
        <div class="cover">
          <div style="position: relative;float: left">
            <img :src="listUrl">
            <div class="listener"><i class="iconfont icon-icon_headset"></i><span>{{listener}}</span></div>
            <div class="cover-info"><i class="iconfont icon-i-info" @click="showInfo" style="font-size: 1.3rem"></i></div>
          </div>
          <div class="cover-description">
            <h1>{{description}}</h1>
            <h2><span>{{creator}}</span><i class="iconfont icon-right" style="font-size: .8rem;position: relative;top: -1px;"></i></h2>
          </div>
        </div>
        <ul class="cover-count">
          <li @click="collect('歌单已收藏')"><i class="iconfont icon-tianjia2"></i><p>{{collects}}</p></li>
          <li @click="collect('评论暂未开放')"><i class="iconfont icon-dyncomments"></i><p>{{comment}}</p></li>
          <li @click="collect('分享')"><i class="iconfont icon-Share"></i><p>{{forward}}</p></li>
          <li @click="collect('下载')"><i class="iconfont icon-xiazai"></i><p>下载</p></li>
        </ul>
      </blur>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" hide-on-blur>
        <!--<div class="img-box">-->
          <!--<img :src="url" style="max-width:100%">-->
        <!--</div>-->
        <div @click="showHideOnBlur=false">
          <div class="cover-title"><i class="iconfont icon-icon_close"></i></div>
          <div class="cover-dialog">
            <img :src="listUrl" style="max-width:100%">
            <p style="line-height: 2rem;border-bottom: 0.5px solid #eee">2018年一月最热新歌TOP50</p>
            <p style="padding: 1rem 0">
              2018年一月全站热度最高的50首新歌，歌单数据综合参考了2018年1月云音乐所有最新上架歌曲在全站的平均播放及收藏排行。（注：曲目均为1月第一次上架新歌，已排除新发行正式专辑中收录的部分1月前已上线歌曲）
            </p>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
  import { Blur, XDialog, TransferDomDirective as TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Blur,
      XDialog
    },
    props: [
      'listUrl',
      'listener',
      'description',
      'creator',
      'collects',
      'comment',
      'forward'
    ],
    data () {
      return {
        showHideOnBlur: false
      }
    },
    methods: {
      collect (con) {
        this.$vux.toast.show({
          type: 'text',
          position: 'center',
          text: con
        })
      },
      showInfo () {
        this.showHideOnBlur = true
      }
    }
  }
</script>
<style scoped>
  .cover {
    padding: 20px 0 3px 20px;
    color: #fff;
    font-size: 18px;
    position: relative;
    overflow: hidden;
  }
  .cover img {
    width: 128px;
    height: 128px;
  }
  .listener{
    position: absolute;
    top: .2rem;
    right: .4rem;
    color: #fff;
    font-size: .9rem;
  }
  .listener i{
    font-size: 1rem;
  }
  .cover-info{
    position: absolute;
    bottom: .5rem;
    right: .4rem;
    color: #fff;
    font-size: .9rem;
  }
  .cover-description{
    padding: 1.5rem 1rem 1.5rem 0;
    margin-left: 155px;
  }
  .cover-description h1{
    font-size: 1.2rem;
  }
  .cover-description h2{
    font-size: 1rem;
  }
  .cover-description h2 i{
    font-size: 1rem;
    margin-left: .5rem;
  }
  ul.cover-count {
    overflow: hidden;
  }
  ul.cover-count  li{
    float: left;
    width: 25%;
    /*padding: .5em 0;*/
    text-align: center;
    font-size: .8rem;
  }
  ul.cover-count  li p{
    font-size: .9rem;
    position: relative;
    color: #fff;
  }
  ul.cover-count li i{
    display: inline-block;
    font-size: 1.3rem;
    color: #fff;
  }
  .cover-title{
    height: 3rem;
    line-height: 3rem;
    text-align: right;
    padding-right: 1rem;
  }
  .cover-dialog{
    padding: 1rem;
    max-height: 25rem;
    overflow-y: auto;
  }
</style>
