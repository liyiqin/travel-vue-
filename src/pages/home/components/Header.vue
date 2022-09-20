<template>
  <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题</div>
        <router-link to='/city'>
          <div class="header-right">
            {{city}}
            <span class="iconfont">&#xe600;</span>
          </div>
        </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'HomeHeader',
  setup() {
    const store = useStore()
    const city = computed(() => store.state.city)
    return { city }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display:flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
          text-align: center
          font-size: .4rem
    .header-input
        flex:1
        height: .62rem
        line-height: .62rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
    .header-right
        text-align:center
        min-width: 1.04rem
        padding: 0 .1rem
        float:right
        color: #fff
        .iconfont
          margin-left: -.04rem
          font-size: .24rem
</style>
