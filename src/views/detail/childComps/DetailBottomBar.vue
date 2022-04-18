<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">商铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car" @click="addCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    // 1.加入购物车
    addCar() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-item .text {
  font-size: 13px;
}
.bar-item .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  line-height: 49px;
}
.bar-right .car {
  background-color: yellow;
}
.bar-right .buy {
  background-color: var(--color-tint);
  color: #fff;
}
</style>