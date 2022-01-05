// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import MyCard from './components/myCard'
import './utils/day.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft, faSearch, faShareAlt, faEdit, faArrowLeft, faHeadset } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { copyText } from './utils'
import { dialog } from './components/dialog/index.js'


library.add(faAngleDoubleLeft, faSearch, faShareAlt, faEdit, faArrowLeft, faHeadset)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MyCard', MyCard)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.prototype.$copy = (url, selector) => copyText(url, selector)
    .then(() => {
     dialog({
        title: '分享',
        content: '链接已复制,去分享给好友吧!!'
      })
    })
    .catch(() => {
      this.$dialog({
        title: '分享',
        content: '链接复制失败,可能因为浏览器不兼容'
      })
    })
  Vue.prototype.$dialog = dialog
}
