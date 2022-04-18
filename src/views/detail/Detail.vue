<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @topNav="topNav" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info :param-info="paramInfo" ref="params" />
      <detail-commend-info :commend-info="commendInfo" ref="commend" />
      <goods-list :goods="recommendInfo" ref="recommend" />
    </scroll>
    <detail-bottom-bar />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommendInfo from './childComps/DetailCommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop, GoodsParam, getRecommends } from 'network/detail'
import { itemLinsenerMixin, backTo } from 'common/mixin'
import { debounce } from 'common/utils'
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommendInfo,
    DetailBottomBar,
    GoodsList,
    Scroll
  },
  mixins: [itemLinsenerMixin, backTo],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commendInfo: {},
      recommendInfo: [],
      topOffsetYs: [],
      themTop: null,
      currentIndex: 0
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res)
      // 1.获取顶部的图片轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6.获取评论信息
      this.commendInfo = data.rate.list[0]

      this.themTop = debounce(() => {
        this.topOffsetYs = []
        this.topOffsetYs.push(0)
        this.topOffsetYs.push(this.$refs.params.$el.offsetTop)
        this.topOffsetYs.push(this.$refs.commend.$el.offsetTop)
        this.topOffsetYs.push(this.$refs.recommend.$el.offsetTop)
        this.topOffsetYs.push(Number.MAX_VALUE)
        console.log(this.topOffsetYs)
      }, 100)
    }),
      // 获取推荐商品数据
      getRecommends().then((res) => {
        this.recommendInfo = res.data.list
      })
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imageLoadLinsener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themTop()
    },
    topNav(index) {
      this.$refs.scroll.scrollTo(0, -this.topOffsetYs[index], 200)
    },
    detailScroll(position) {
      const positionY = -position.y
      let length = this.topOffsetYs.length
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.topOffsetYs[i] &&
          positionY < this.topOffsetYs[i + 1]
        ) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = -position.y > 1000
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
}
</style>
