<template>
  <div class="goods">
    <goods-list-item v-for="(item, id) in goods" :key="id" :list-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2px;
}
</style>