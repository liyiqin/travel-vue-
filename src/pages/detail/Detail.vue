<template>
  <div>
    <detail-banner></detail-banner>
    <detail-hearder></detail-hearder>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHearder from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHearder
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
