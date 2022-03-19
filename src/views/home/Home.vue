<template>
    <div>
        <nav-bar class="home">
            <template #center>
                <h2>购物街</h2>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getMultiData } from "network/home";
import "swiper/swiper.min.css";
export default {
    name: "Home",
    data() {
        return {
            banners: [],
            recommends: [],
        };
    },
    methods: {},

    components: {
        NavBar,
        swiper,
        swiperSlide,
    },
    created() {
        getMultiData().then((res) => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        });
    },
};
</script>

<style scoped>
.home {
    background-color: var(--color-tint);
    color: #fff;
}
</style>