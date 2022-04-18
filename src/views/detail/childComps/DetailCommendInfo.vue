<template>
  <div class="commend-info" v-if="Object.keys(commendInfo).length !== 0">
    <div class="info-header">
      <div class="info-title">用户评价</div>
      <div class="info-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commendInfo.user.avatar" alt="" />
      <span>{{ commendInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p class="info-content">{{ commendInfo.content }}</p>
      <span class="info-time">{{ showDate(commendInfo.created) }}</span>
      <span>{{ commendInfo.style }}</span>
      <div class="info-img">
        <img :src="item" alt="" v-for="item in commendInfo.images" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
// import { formatDate } from 'common/utils'
import moment from 'moment'
export default {
  name: 'DetailCommendInfo',
  methods: {
    showDate(value) {
      const date = new Date(value * 1000)
      // return formatDate(date, 'yyyy-/M/dd hh:mm:ss')
      return moment(date).format('YYYY-MM-DD')
    }
  },
  props: {
    commendInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.commend-info {
  padding: 10px 20px;
}
.commend-info .info-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
}
.info-user {
  margin: 20px 0;
}
.info-user img {
  vertical-align: middle;
  margin-right: 10px;
  width: 45px;
  height: 45px;
  border-radius: 45%;
}
.info-user span {
  font-size: 16px;
  color: #333;
}
.info-detail .info-content {
  font-size: 14px;
  margin-bottom: 10px;
}
.info-detail .info-time {
  margin-right: 8px;
}
.info-detail .info-img {
  margin-top: 10px;
  display: flex;
  width: 45px;
  height: 45px;
}
.info-detail .info-img img {
  width: 100%;
  margin-right: 5px;
}
.info-detail span {
  font-size: 14px;
}
</style>