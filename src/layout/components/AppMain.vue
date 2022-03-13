<template>
    <section class="app-main" :style="{ 'background-color': backgroundColor }">
        <el-scrollbar wrap-style="height: calc(100vh - 60.5px);">
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <router-view :key="key" />
                </keep-alive>
            </transition>
        </el-scrollbar>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path
        },
        backgroundColor() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return '#ffffff'
                case 'dark':
                    return '#999999'
                default:
                    return '#ffffff'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.app-main {
    min-height: calc(100vh - 60.5px);
    top: 60.5px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>
