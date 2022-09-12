<template>
    <div>
        <div class="title">热销推荐</div>
       <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl"/>
            <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
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
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1905/af/af4f95f579ee43b1a3.water.jpg_200x200_9fdbf80f.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1905/af/af4f95f579ee43b1a3.water.jpg_200x200_9fdbf80f.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1905/af/af4f95f579ee43b1a3.water.jpg_200x200_9fdbf80f.jpg',
        title: '东莞观音山旅游风景区',
        desc: '吸引广大游客走进生态自然'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1905/af/af4f95f579ee43b1a3.water.jpg_200x200_9fdbf80f.jpg',
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
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
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
            .item-button
                line-height: .44rem
                margin-top: .2rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>
