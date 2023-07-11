<template>
    <div class="d-flex justify-content-center">
        <div class="bg-primary p-3" style="width: 15em; position: fixed; top: 5em; z-index: 99;">
            <div>
                <div class="toast-body text-white fw-semibold w-100">
                    <span class="text-center">
                        {{ message }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ToastBadge',
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