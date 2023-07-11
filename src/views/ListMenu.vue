<template>
    <Navbar
        :isMainNav="true"
    />
    <div class="container pb-5" style="position: relative;">
        <div
            class="row d-flex justify-content-between bg-white pt-4"
        >
            <CardMenu
                :click="toastShow"
            />
            <CardMenu
                :showToast="toastShow"
            />
            <CardMenu
                :showToast="toastShow"
            />
        </div>
    </div>
</template>
<script>
import CardMenu from '@/components/CardMenu.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'List-Menu',
    components: {
        CardMenu,
        Navbar
    },
    data() {
        return {
            listMenu: []
        }
    },
    methods: {}
}
</script>
<style scoped>
</style>