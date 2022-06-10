<template>
  <div class="hello">
   子应用首页son1HelloWorld你好
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  // computed: {
  //   // 通过global获取user的信息
  //   ...mapState('global', {
  //     user: state => state.user
  //   })
  // },
  // mounted () {
  //   console.log('ce', this.user)
  // },
  // methods: {
  //   gotoSubReact () {
  //     history.pushState(null, 'sub-react', '/sub-react')
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  width: 100%;
}
img{
  width: 100%;
  // height: 1000px;
}
</style>
