import Vue from 'vue'
import App from './App'
import axios from "axios"
import _ from 'lodash'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype._ = _

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
