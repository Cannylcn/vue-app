<template>
    <div>
      <group>
        <cell is-link>
          <span slot="icon">在线播放音质</span>
          <span>自动</span>
        </cell>
        <cell is-link>
          <span slot="icon">下载音质</span>
          <span>极高</span>
        </cell>
        <cell is-link>
          <span slot="icon">边听边存</span>
          <span>未开启</span>
        </cell>
      </group>
      <group>
        <x-switch title="使用2G/3G/4G网络播放" v-model="setting"></x-switch>
        <x-switch title="使用2G/3G/4G网络下载" v-model="value1"></x-switch>
        <x-switch title="动态页中WiFi下自动播放视频" v-model="value2"></x-switch>
        <x-switch title="视频页中WiFi下连续播放" v-model="value3"></x-switch>
      </group>
      <group>
        <cell is-link>
          <span slot="icon">账户与绑定设置</span>
        </cell>
        <cell is-link>
          <span slot="icon">寻找并邀请好友</span>
        </cell>
        <cell is-link>
          <span slot="icon">消息与隐私设置</span>
        </cell>
      </group>
      <group>
        <cell is-link>
          <span slot="icon">均衡器</span>
          <span>已关闭</span>
        </cell>
        <x-switch title="经典播放界面" :value="false" v-model="value4"></x-switch>
        <x-switch title="锁屏歌词" v-model="value5"></x-switch>
        <x-switch title="歌词翻译" v-model="value6"></x-switch>
      </group>
      <group>
        <cell is-link>
          <span slot="icon">清除缓存</span>
        </cell>
      </group>
    </div>
</template>
<script>
  import { XSwitch, Cell, Group } from 'vux'
  export default {
    components: {
      Cell,
      Group,
      XSwitch
    },
    data () {
      return {
        setting: true,
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: true,
        value6: true
      }
    }
  }
</script>
<style scoped>

</style>
