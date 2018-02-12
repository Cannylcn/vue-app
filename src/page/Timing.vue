<template>
    <div>
      <p class="tips">计时结束后，将暂停播放歌曲</p>
      <group>
        <radio
          :selected-label-style="{color: '#FF9900'}"
          fill-mode
          fill-label="自定义"
          fill-placeholder="填写自定义关闭时间"
          :options="chooseTime"
          v-model="value"></radio>
      </group>
    </div>
</template>
<script>
  import { Group, Radio } from 'vux'
  export default {
    components: {
      Group,
      Radio
    },
    data () {
      return {
        chooseTime: [ '不开启', '10分钟后', '20分钟后', '30分钟后', '60分钟后', '90分钟后' ],
        value: '不开启'
      }
    }
  }
</script>
<style scoped>
  .tips{
    font-size: .8rem;
    text-align: center;
    color: #999;
    position: relative;
    top: .8rem;
  }
</style>
