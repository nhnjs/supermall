<template>
    <swiper>
        <swiper-item v-for="(item, id) in banners" :key="id">
            <a :href="item.link">
                <img :src="item.image" alt="" />
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { SwiperItem, Swiper } from "components/common/swiper";
export default {
    name: "HomeSwiper",
    props: {
        banners: [],
    },
    components: {
        Swiper,
        SwiperItem,
    },
};
</script>
 
<style scoped>
</style>