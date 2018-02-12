<template>
  <div>
    <dynamic v-for="(item, index) in mulList" :key="index"
             :mul="item.mul"
             :mulGator="item.mulGator"
             :proTime="item.proTime"
             :mulContent="item.mulContent"
             :mulPic="item.mulPic"
             :like="item.like"
             :comment="item.comment"
             :transpond="item.transpond"
    ></dynamic>
    <p class="no-content" v-show="!mulList.length">还没有发布动态</p>
  </div>
</template>
<script>
  import Dynamic from '@/components/Dynamic.vue'
  export default {
    components: {
      Dynamic
    },
    data () {
      return {
        mulList: [
//          {
//            'mul': '/static/images/user.jpg',
//            'mulGator': '全球精选音乐',
//            'proTime': '2分钟前',
//            'mulContent': '饿货，来条士力架吧！',
//            'mulPic': [
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'}
//            ],
//            'like': 998,
//            'comment': 348,
//            'transpond': 54
//          },
//          {
//            'mul': '/static/images/user.jpg',
//            'mulGator': '全球精选音乐',
//            'proTime': '2分钟前',
//            'mulContent': '饿货，来条士力架吧！',
//            'mulPic': [
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'}
//            ],
//            'like': 998,
//            'comment': 348,
//            'transpond': 54
//          },
//          {
//            'mul': '/static/images/user.jpg',
//            'mulGator': '全球精选音乐',
//            'proTime': '2分钟前',
//            'mulContent': '饿货，来条士力架吧！',
//            'mulPic': [
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'},
//              {'src': '/static/images/user.jpg'}
//            ],
//            'like': 998,
//            'comment': 348,
//            'transpond': 54
//          }
        ]
      }
    }
  }
</script>
<style scoped>
  .no-content{
    text-align: center;
    padding: 2rem;
    color: #999;
  }
</style>
