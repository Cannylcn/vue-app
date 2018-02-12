<template>
    <div class="login">
      <img src="/static/images/login_bg.jpg"/>
      <div style="padding: 0 3rem">
        <x-button plain type="primary" style="border-radius:99px;font-size: 1.15rem;margin-top: 2rem" link="/logintype">手机号登录</x-button>
        <x-button plain type="primary" style="border-radius:99px;font-size: 1.15rem" link="/register">注册</x-button>
      </div>
      <div class="login-type">
        <divider style="margin: 5rem 15% 0">其他方式登录</divider>
        <flexbox style="text-align: center">
          <flexbox-item><i class="iconfont icon-weixin"></i><p>微信</p></flexbox-item>
          <flexbox-item><i class="iconfont icon-qq"></i><p>QQ</p></flexbox-item>
          <flexbox-item><i class="iconfont icon-weibo"></i><p>微博</p></flexbox-item>
          <flexbox-item><i class="iconfont icon-weixin"></i><p>微信</p></flexbox-item>
        </flexbox>
      </div>
    </div>
</template>
<script>
  import { XButton, Flexbox, FlexboxItem, Divider } from 'vux'
  import Register from '@/page/Register.vue'
//  import router from '../router/index'
//  import * as types from '../store/types'
  import api from '../axios'

  export default {
    components: {
      XButton,
      Register,
      Flexbox,
      FlexboxItem,
      Divider
    },
    data () {
      return {
        email: '934007168@qq.com',
        password: '123456',
        dynamicValidateForm: {
          email: '',
          password: ''
        },
        activeName: this.$store.state.activeName
      }
    },
    methods: {
      submitForm () {
        if (this.$refs.emailValid.valid) {
          let opt = {
            email: this.email,
            password: this.password
          }
          api.UserLogin(opt).then(({data}) => {
            if (data.success) {
//              this.$vux.confirm.show({
//                title: 'success',
//                content: '登录成功'
//              })
              this.$store.dispatch('UserLogin', data.token)
              this.$store.dispatch('UserName', data.email)
              let redirect = decodeURIComponent(this.$route.query.redirect || '/')
              this.$router.push({
                path: redirect
              })
            } else {
//              this.$vux.confirm.show({
//                title: '错误警告',
//                content: '密码错误'
//              })
            }
          })
        } else {
          console.log('Error Submit')
          return false
        }
      }
    }
  }
</script>
<style scoped>
  .login img{
    z-index: -1;
    width: 100%;
  }
  /*.login-type{*/
    /*position: absolute;*/
    /*bottom: 1rem;left: 0;right: 0;*/
  /*}*/
  .login-type i{
    font-size: 2.8rem;
    color: #555;
  }
</style>
