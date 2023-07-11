<template>
    <div style="border-bottom: 1px solid gray;">
        <Toast v-if="toast" :textMessage="message" @click="close" />
        <div v-if="isMainNav" class="text-center w-100 pb-5">
            <span class="fw-semibold" style="font-size: 28px;">Resto Menu!</span>
        </div>
        <div v-else-if="!isMainNav" class="d-flex justify-content-between container-fluid pb-5">
            <div>
                <span style="cursor: pointer;" @click="toList">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </span>
            </div>
            <div class="d-flex gap-4">
                <div>
                    <span style="cursor: pointer;" @click="bookmarked">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                    </span>
                </div>
                <div>
                    <span style="cursor: pointer;" @click="shared">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Toast from '@/components/Toast.vue'
export default {
    name: 'NavbarDetail',
    props: {
        isMainNav: Boolean
    },
    components: {
        Toast
    },
    data() {
        return {
            toast: false,
            message: ''
        }
    },
    methods: {
        toList() {
            this.$router.push({path: 'list-menu'})
        },
        bookmarked() {
            this.toast = true;
            this.message = "Bookmarked!";
        },
        shared() {
            this.toast = true;
            this.message = "Shared!";
        },
        close() {
            this.toast = false;
            this.message = '';
        }
    }
}
</script>
<style scoped>
</style>