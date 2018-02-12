<template>
    <div style="background-color: #EFEFF4;min-height: 100%">
      <div class="logo">
        <img src="/static/images/user.jpg"/>
      </div>
      <group>
        <cell title="当前版本">
          <span>4.3.4</span>
        </cell>
        <cell title="版本更新">
          <span>无新版</span>
        </cell>
      </group>
      <group>
        <cell is-link title="新手教程">
        </cell>
        <cell is-link title="帮助与反馈">
        </cell>
        <cell is-link title="给软件评分">
        </cell>
      </group>
      <p class="help">使用网易云音乐网页版、电脑客户端、手机客户端、强大的多端同步、音乐随身听！请访问：music.163.com</p>
      <div class="clause">
        <a href="http://cn.bing.com">《网易云音乐服务条款》</a><br>
        <a style="display:inline-block;margin-top: 1rem" href="http://cn.bing.com">《网易云音乐社区管理细节》</a>
      </div>
    </div>
</template>
<script>
  import { Cell, Group } from 'vux'
  export default {
    components: {
      Cell,
      Group
    }
  }
</script>
<style scoped>
  .logo{
    text-align: center;
    padding: 2rem 0 0;
  }
  .logo img{
    width: 64px;
  }
  .help{
    padding: 1rem;
    font-size: .8rem;
    color: #999;
  }
  .clause{
    text-align: center;
  }
  .clause a{
    text-decoration: underline;
    font-size: .8rem;
    color: blueviolet;
  }
</style>
