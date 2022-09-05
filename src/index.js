// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('App', require('./js/App.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
