<template>
  <div>
    <group title="">
      <x-input v-model="phone" ref="phoneValid" @on-change="checkValid" required is-type="china-mobile" placeholder="输入手机号">
        <span slot="label"><i class="iconfont icon-shouji" style="font-size: 1.5rem;margin-right: .5rem"></i></span>
      </x-input>
    </group>
    <group title="">
      <x-input type="password" v-model="password" @on-change="checkValid" :min="min" :max="max" required :is-type="checkPasswordValid" ref="passwordValid"  placeholder="设置登录密码，不少于6位">
        <span slot="label"><i class="iconfont icon-mima" style="font-size: 1.5rem;margin-right: .5rem"></i></span>
      </x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="submit"  :disabled="phoneValid || passwordValid" style="border-radius:99px;background-color: #d43c33" type="primary">注册</x-button>
    </div>
  </div>
</template>
<script>
  import { XInput, Group, XButton, Confirm, TransferDomDirective as TransferDom } from 'vux'
  import api from '../axios'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XInput,
      XButton,
      Group,
      Confirm
    },
    mounted () {
      this.phoneValid = this.$refs.phoneValid.valid
      this.passwordValid = this.$refs.passwordValid.valid
    },
    data () {
      return {
        phone: '13877907810',
        password: '123456',
        min: 6,
        max: 26,
        phoneValid: true,
        passwordValid: true,
        checkPasswordValid: function (value) {
          return {
            valid: value.length >= this.min
          }
        }
      }
    },
    methods: {
      checkValid () {
        this.phoneValid = !this.$refs.phoneValid.valid
        this.passwordValid = !this.$refs.passwordValid.valid
      },
      showAlert () {
        const _this = this
        this.$vux.alert.show({
          title: '注册成功！',
          content: '将在1秒后跳转至登录页面...',
          buttonText: '立即前往',
          onHide () {
            _this.$router.push('/login')
          }
        })
      },
      showAlertAuto () {
        const _this = this
        this.showAlert()
        setTimeout(() => {
          _this.$vux.alert.hide()
          _this.$router.push('/login')
        }, 1000)
      },
      submit () {
        if (!this.phoneValid && !this.passwordValid) {
          let opt = {
            phone: this.phone,
            password: this.password
          }
          api.userRegister(opt).then(({data}) => {
            if (data.success) {
              this.showAlertAuto()
            } else {
              this.$vux.confirm.show({
                title: '错误警告',
                content: '此账户已存在'
              })
            }
          }).catch((err) => {
            console.log(err)
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
