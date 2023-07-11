<template>
    <Toast v-if="toast" :textMessage="message" @click="close" />
    <div class="hover-card col-sm-6 card-menu">
        <div class="image" style="max-height: 10em; width: 100%; overflow: hidden;">
            <img src="https://bpsdm.dephub.go.id/v2/public/file_app/struktur_image/default.png" style="object-fit: scale-down; max-height: 10em;" class="w-100" />
        </div>
        <div class="p-2">
            <div class="d-flex gap-3">
                <div
                    class="title text-start"
                    style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-size: 18px; cursor: pointer;"
                    @click="toDetail(1)"
                >
                    <span>
                        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora repudiandae qui?</b>
                    </span>
                </div>
                <span class="bookmark-hover" style="cursor: pointer; z-index: 10;" @click="bookmarked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </span>
            </div>
            <div class="time text-start d-flex gap-2 align-items-center pt-3 pb-3">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                </span>
                <span class="text-body fw-medium text-light-emphasis" style="font-size: 14px;">45m</span>
            </div>
        </div>
    </div>
</template>
<script>
import Toast from '@/components/Toast.vue'
export default {
    name: 'CardMenu',
    components: {
        Toast
    },
    data() {
        return {
            message: '',
            toast: false
        }
    },
    methods: {
        toDetail() {
            this.$router.push({path: '/detail-menu/1'})
        },
        bookmarked() {
            this.toast = true;
            this.message = "Bookmarked!";
        },
        close() {
            this.toast = false;
            this.message = '';
        }
    }
}
</script>
<style scoped>
.card-menu {
    border-radius: 5px;
}
.hover-card {
    border: 1px solid transparent;
}
.hover-card:hover {
    border: 1px solid rgb(18, 154, 238);
}
.title:hover {
    text-decoration: underline;
}
</style>