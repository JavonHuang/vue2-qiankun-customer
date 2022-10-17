<template>
  <div>
    子应用首页son1home
    <my></my>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('ce', this.$route.query)
    console.log('ce', this.$route.params)
  }
}
</script>
