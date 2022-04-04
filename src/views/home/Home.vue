<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <h2>蘑菇街</h2>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" />
    <ul>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
      <li>配置</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childcom/HomeSwiper.vue'
import RecommendView from './childcom/RecommendView.vue'
import FeatureView from './childcom/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'

import { getMultiData, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  methods: {
    //获取多个数据
    getHomeMultiData() {
      getMultiData().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list = this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
      })
    }
  },

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  created() {
    //请求多个数据
    this.getHomeMultiData(),
      // 请求商品数据
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>