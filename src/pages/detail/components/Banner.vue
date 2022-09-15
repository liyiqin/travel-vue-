<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/2104/ea/ea3e5ad58838f96a3.water.jpg_256x160_065c710b.jpg"/>
            <div class="banner-info">
                <div class="banner-title">古龙峡漂流</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe67f;</span>
                35</div>
            </div>
        </div>
        <common-gallary :imgs="imgs"
        v-show="showGallay"
        @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallay: false,
      imgs: ['https://img1.qunarzz.com/sight/p0/2104/ea/ea3e5ad58838f96a3.water.jpg_256x160_065c710b.jpg',
        'https://img1.qunarzz.com/sight/p0/2104/ea/ea3e5ad58838f96a3.water.jpg_256x160_065c710b.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallay = true
    },
    handleGallaryClose () {
      this.showGallay = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
    .banner
      position:relative
      overflow: hidden
      height: 0
      padding-bottom: 55%
      .banner-img
        width: 100%
      .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color:#fff
        background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
          flex: 1
          font-size: .32rem
          padding: 0 .2rem
        .banner-number
          height: .32rem
          line-height: .32rem
          margin-top: .14rem
          padding:0 .4rem
          height: .32rem
          border-radius: .2rem
          background: rgba(0,0,0, .8)
          font-size: .24rem
          .banner-icon
            font-size: .24rem
</style>
