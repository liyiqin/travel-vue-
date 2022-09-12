<template>
    <div>
        <div class="title">周末去哪儿</div>
       <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl"/>
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
       </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1906/ba/ba0ea8a459c73871a3.img.jpg_200x200_29068ad2.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1906/ba/ba0ea8a459c73871a3.img.jpg_200x200_29068ad2.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1906/ba/ba0ea8a459c73871a3.img.jpg_200x200_29068ad2.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1906/ba/ba0ea8a459c73871a3.img.jpg_200x200_29068ad2.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }]}
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>
