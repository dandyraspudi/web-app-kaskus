<template>
    <Toast v-if="toast" :textMessage="message" @click="close" />
    <Modal v-if="modal" :textMessage="messageModal" @click="closeModal" />
    <div class="d-flex gap-4 justify-content-center" style="position: fixed; bottom: 3em; right: 0; left: 0;">
        <div class="floating-button pt-3 pb-3 rounded-pill w-25 bg-warning" style="cursor: pointer;" @click="cooked">
            <span class="fw-semibold">{{textButton}}</span>
        </div>
        <div class="floating-button pt-3 pb-3 bg-warning" style="width: 60px; border-radius: 100%; cursor: pointer;" @click="tipModal">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
            </span>
        </div>
    </div>
</template>
<script>
import Toast from '@/components/Toast.vue'
import Modal from '@/components/Modal.vue'
export default {
    name: 'ButtonFloating',
    components: {
        Toast,
        Modal
    },
    props: {
        btnContent: String
    },
    data() {
        return {
            toast: false,
            message: '',
            messageModal: '',
            modal: false,
            textButton: this.btnContent
        }
    },
    methods: {
        tips() {
        },
        cooked() {
            this.toast = true;
            this.message = "Mulai masak yuk!";
        },
        close() {
            this.toast = false;
        },
        tipModal() {
            this.modal = true;
            this.messageModal = "Tip cooking from the master!";
        },
        closeModal() {
            this.modal = false;
        }
    }
}
</script>
<style scoped>
</style>