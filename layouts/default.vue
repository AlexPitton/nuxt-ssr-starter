<template>
    <nuxt></nuxt>
</template>

<script>

export default {
    data() {
        return {
            images: 0,
            limitLoaded: null
        }
    },
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    },
    mounted() {
        this.$nextTick(async () => {
            this.$nuxt.$loading.start()

            this.limitLoaded = 10
            const images = Array.from(document.querySelectorAll('img')).slice(0, this.limitLoaded)

            if (images.length === 0) {
                this.$nuxt.$loading.finish()
            }

            images.forEach( (item) => {
                let image = document.createElement('img')

                image.addEventListener('load', () => {
                    this.imagesLoaded()
                })

                image.src = item.src
            })
        })

        window.addEventListener('resize', this.onResize)
        this.onResize()
    },
    methods: {
        imagesLoaded() {
            this.images++

            if (this.images >= this.limitLoaded) {
                this.$nuxt.$loading.finish()
            }
        },
        onResize() {
            this.$store.commit('onResize')
        }
    }
}
</script>
