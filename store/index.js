export const state = () => ({
    isTouchEnabled: null,
    isPortrait: null
})

export const mutations = {
    onResize(state) {
        state.isTouchEnabled = ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 )
        state.isPortrait = window.innerHeight > window.innerWidth
    }
}
