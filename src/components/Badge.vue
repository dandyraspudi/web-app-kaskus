<template>
    <div style="position: relative;">
        <div class="badge bg-danger" style="position: absolute; left: 2em; bottom: -1em;">
            <span class="fw-semibold" style="font-size: 16px;">
                {{content}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TagBadge',
    props: {
        text: String
    },
    data() {
        return {
            content: this.text
        }
    },
    methods: {
    }
}
</script>
<style scoped>
</style>