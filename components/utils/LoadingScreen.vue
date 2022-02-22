<template>
    <transition name="loaded">
        <div v-if="loading" class="loading-screen">
        </div>
    </transition>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    computed: {
        isMobile: function () {
            return this.$store.state.isMobile
        }
    },
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            setTimeout(() => {
                this.loading = false
                this.$nuxt.$emit('loadFinish')
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>

.loaded-leave-active {
    transition: all 650ms $authenticMotion;
}
.loaded-leave-to {
    opacity: 0;
}

.loading-screen {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #041F18;
}

</style>
