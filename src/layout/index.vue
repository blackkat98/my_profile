<template>
    <div>
        <div class="fixed-header">
            <navbar />
        </div>
        <app-main />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'

export default {
    name: 'Layout',
    components: {
        Navbar,
        AppMain,
    },
}
</script>

<style scoped>
.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}
</style>
