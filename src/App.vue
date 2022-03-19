<template>
    <div id="app">
        <router-view></router-view>
        <Maintabbar />
    </div>
</template>

<script>
import Maintabbar from "components/content/mainTabbar/Maintabbar";
export default {
    name: "App",
    components: {
        Maintabbar,
    },
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
