<template>
    <div style="background-color: #EFEFF4">
      <group>
        <cell class="portrait" is-link>
          <span slot="icon">头像</span>
          <img src="/static/images/user.jpg"/>
        </cell>
        <cell is-link @click.native="updateName">
          <span slot="icon">昵称</span>
          <span>{{name}}</span>
        </cell>
        <popup-picker
          title="性别"
          :data="sexList"
          v-model="sex"></popup-picker>
      </group>
      <group>
        <datetime
          v-model="birthday"
          title="生日"></datetime>
        <x-address title="地区" v-model="address" raw-value :list="addressData" hide-district></x-address>
      </group>
      <group>
        <x-input disabled>
          <label slot="label" style="color: #000!important;">介绍</label>
        </x-input>
        <x-textarea :max="140" name="description" placeholder="介绍下你自己吧"></x-textarea>
      </group>
    </div>
</template>
<script>
  import { Cell, Group, XTextarea, XInput, Datetime, XAddress, ChinaAddressV4Data, PopupPicker } from 'vux'
  export default {
    components: {
      Cell,
      Group,
      XTextarea,
      XInput,
      Datetime,
      XAddress,
      PopupPicker
    },
    data () {
      return {
        birthday: '',
        name: 'Canny',
        address: [],
        addressData: ChinaAddressV4Data,
        sexList: [['男', '女']],
        sex: ['男']
      }
    },
    methods: {
      updateName () {
        const _this = this
        this.$vux.confirm.show({
          title: '修改昵称',
          showInput: true,
          onShow () {
            _this.$vux.confirm.setInputValue(_this.name)
          },
          onConfirm (value) {
            _this.name = value
          }
        })
      }
    }
  }
</script>
<style scoped>
.portrait img{
  height: 32px;
  border-radius: 50%;
  position: relative;
  top: .2rem;
}
</style>
