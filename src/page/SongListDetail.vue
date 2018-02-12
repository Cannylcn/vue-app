<template>
    <div>
      <song-list-cover
        :listUrl="this.$route.params.listUrl"
        :listener="this.$route.params.listener"
        :description="this.$route.params.description"
        :collects="this.$route.params.collects"
        :comment="this.$route.params.comment"
        :forward="this.$route.params.forward"
        :creator="this.$route.params.creator"></song-list-cover>
      <song v-for="(item, index) in songlist" :key="item.id" @click.native="updateTitle(item.name)" :songIndex="index+1" :songName="item.name" :songSinger="item.singer" :link="{name:'songplay',params:{src:item.src, playlist: songlist, index: index}}"></song>
    </div>
</template>
<script>
  import Song from '../components/Song.vue'
  import SongListCover from '../components/SongListCover.vue'
  export default {
    components: {
      Song,
      SongListCover
    },
    data () {
      return {
        songlist: []
      }
    },
    mounted () {
      this.$http({
        method: 'GET',
        url: './static/data/songlist.json'
      })
        .then(response => {
          this.songlist = response.data
        })
    },
    methods: {
      updateTitle (name) {
        this.$store.dispatch('updateTitle', name)
      }
    }
  }
</script>
<style scoped>

</style>
