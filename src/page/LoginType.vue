<template>
    <div>
      <group title="">
        <x-input v-model="phone" ref="phoneValid" required is-type="china-mobile" placeholder="手机号">
          <span slot="label"><i class="iconfont icon-shouji" style="font-size: 1.5rem;margin-right: .5rem"></i></span>
        </x-input>
      </group>
      <group title="">
        <x-input v-model="password" type="password" :min="6" :max="26" ref="passwordValid" placeholder="密码">
          <span slot="label"><i class="iconfont icon-mima" style="font-size: 1.5rem;margin-right: .5rem"></i></span>
        </x-input>
      </group>
      <div style="padding:15px;">
        <x-button @click.native="submitForm" style="border-radius:99px;background-color: #d43c33"  type="primary">{{loginText}}</x-button>
      </div>
    </div>
</template>
<script>
  import { XInput, Group, XButton } from 'vux'
  import api from '../axios'

  export default {
    components: {
      XInput,
      XButton,
      Group
    },
    data () {
      return {
        phone: '13877907810',
        password: '123456',
        loginText: '登录',
        dynamicValidateForm: {
          phone: '',
          password: ''
        },
        activeName: this.$store.state.activeName
      }
    },
    methods: {
      submitForm () {
        this.loginText = '正在登录...'
        if (this.$refs.phoneValid.valid) {
          let opt = {
            phone: this.phone,
            password: this.password
          }
          api.UserLogin(opt).then(({data}) => {
            if (data.success) {
//              this.$vux.confirm.show({
//                title: 'success',
//                content: '登录成功'
//              })
              this.$store.dispatch('UserLogin', data.token)
              this.$store.dispatch('UserName', data.phone)
              let redirect = decodeURIComponent(this.$route.query.redirect || '/')
              const _this = this
              setTimeout(() => {
                _this.$router.push({
                  path: redirect
                })
              }, 1000)
            } else {
              this.$vux.confirm.show({
                title: '错误警告',
                content: '密码错误'
              })
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

</style>
