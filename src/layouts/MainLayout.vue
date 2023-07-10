<template>
    <div>
        <TransitionFade :duration="200" origin="center top" mode="out-in">
            <router-view/>
        </TransitionFade>
    </div>
</template>
  
<script>
    import { TransitionFade } from '@morev/vue-transitions';
    export default {
        name: 'MainLayout',
        components: {
            TransitionFade
        }
    }
</script>
<style scoped>
</style>
  