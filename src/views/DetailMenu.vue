<template>
    <div style="position: relative;">
        <Navbar
            :isMainNav="false"
        />
        <div class="border">
            <img
                src="https://bpsdm.dephub.go.id/v2/public/file_app/struktur_image/default.png"
                style="object-fit: scale-down; max-height: 30em;"
                class="w-100"
            />
            <Badge text="Promo Bahan" />
        </div>
        <div class="container pt-4 pb-4">
            <div
                class="title text-start pt-3 pb-3"
                style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-size: 28px;"
            >
                <span class="text-start">
                    <b>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at dolores quae.
                    </b>
                </span>
            </div>
            <div class="text-start">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea commodi vero dignissimos veniam? Quae provident voluptate repellat fugiat quasi minus, autem aliquid? Iusto, commodi iure, voluptatum sint hic unde inventore temporibus aliquid quam sapiente, adipisci rerum id. Porro molestias esse nostrum, animi deserunt dolor eaque rerum. Omnis, iure sapiente.
                </span>
            </div>
            <ButtonFloating btnContent="Mulai Masak Yuk!" />
        </div>
    </div>
</template>
<script>
import ButtonFloating from '@/components/ButtonFloating.vue'
import Navbar from '@/components/Navbar.vue'
import Badge from '@/components/Badge.vue'
export default {
    name: 'DetailMenu',
    components: {
        ButtonFloating,
        Navbar,
        Badge
    }
}
</script>
<style scoped></style>