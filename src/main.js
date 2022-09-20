globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
import { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

//Vue.use(VueAwesomeSwiper)

createApp(App).config.productionTip = false

router.afterEach((to, from) => {
    let bodyScrollTop = document.body.scrollTop
    if (bodyScrollTop !== 0) {
        document.body.scrollTop = 0
        return
    }
    let docScrollTop = document.documentElement.scrollTop
    if (docScrollTop !== 0) {
        document.documentElement.scrollTop = 0
    }
})


createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
