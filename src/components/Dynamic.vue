<template>
    <div style="padding: 1.5rem 1.5rem .8rem;border-bottom: 1px solid #eee">
      <div class="promulgator">
        <img :src="mul"/>
        <div class="mul-title">
          <h1>{{mulGator}}</h1>
          <p>{{proTime}}</p>
        </div>
      </div>
      <div class="mul-content">
        <p>{{mulContent}}</p>
        <flexbox :gutter="0" align="start" wrap="wrap" justify="space-between">
          <flexbox-item v-for="item in mulPic" :key="item.id" :span="0.95/3">
            <img :src="item.src">
          </flexbox-item>
        </flexbox>
        <ul>
          <li @click="collect ('已点赞')"><i class="iconfont icon-iclikenormal"></i>{{like}}</li>
          <li @click="collect ('评论暂未开放')"><i class="iconfont icon-dyncomments"></i>{{comment}}</li>
          <li @click="collect ('转发')"><i class="iconfont icon-Share"></i>{{transpond}}</li>
        </ul>
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
    props: [
      'mul',
      'mulGator',
      'proTime',
      'mulPic',
      'like',
      'mulContent',
      'comment',
      'transpond'
    ],
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
  .promulgator img{
    width: 32px;
    float: left;
    border-radius: 50%;
    margin-top: .2rem;
    margin-left: .2rem;
  }
  .mul-title{
    margin-left: 32px;
    padding-left: .5rem;
  }
  .mul-title h1{
    font-size: 1rem;
  }
  .mul-title p{
    font-size: .8rem;
    color: #999;
  }
  .mul-content p{
    margin: 1rem 0;
  }
  .mul-content img{
    width: 100%;
    border: 1px solid #ddd;
  }
  .mul-content ul{
    overflow: hidden;
    margin-top: 1rem;
  }
  .mul-content li{
    width: 33.3333%;
    float: left;
    text-align: center;
  }
  .mul-content li i{
    margin-right: .5rem;
  }
</style>
