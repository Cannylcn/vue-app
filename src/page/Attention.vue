<template>
    <div>
      <song class="dynamic" v-for="(item, index) in recommendList"
            :key="item.id"
            :songIndex="index+1"
            :songName="item.name"
            :songSinger="item.singer"
            :showCover="true"
            :coverSrc="item.coverSrc"
            :link="{name:'songplay',params:{src:item.src}}"></song>
    </div>
</template>
<script>
  import Song from '@/components/Song.vue'
  export default {
    components: {
      Song
    },
    data () {
      return {
        recommendList: [
          { 'id': 1, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' },
          { 'id': 2, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' },
          { 'id': 3, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' },
          { 'id': 4, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' },
          { 'id': 5, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' },
          { 'id': 6, 'name': '雾与晨的杂货店', 'singer': '胡椒粉（微博：雾与晨的杂货店）', 'src': './static/music/music.mp3', 'coverSrc': './static/images/cover.jpg' }
        ]
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>
