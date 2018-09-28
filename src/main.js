import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

//import App from './App.vue'

new Vue({
    el: '#app',
    data: {
        titulo: 'Minha aplicação Vue.js 2'
    }
    //render: h => h(App)
})
