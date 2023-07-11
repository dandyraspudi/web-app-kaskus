<template>
    <div class="bg-warning p-3" style="width: 30em; position: fixed; top: 8em; z-index: 99;">
        <div>
            <div class="toast-header">
                <div class="me-auto w-100">
                    <strong class="text-white fw-semibold text-center">Tips</strong>
                </div>
                <button type="button" class="btn-close" aria-label="Close" @click="toastClose"></button>
            </div>
            <div class="toast-body text-white fw-medium mt-3">
                {{ message }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TipsModal',
    props: {
        textMessage: String
    },
    data() {
        return {
            message: this.textMessage
        }
    },
    methods: {
    }
}
</script>
<style scoped>
</style>