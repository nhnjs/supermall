import { debounce } from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'
export const itemLinsenerMixin = {
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 50)
        this.imageLoadLinsener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImageLoad', this.imageLoadLinsener)
    },
    data() {
        return {
            imageLoadLinsener: null,
            refresh: null
        }
    }
}
export const backTo = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}