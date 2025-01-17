import Vue from 'vue'
import App from './App.vue';
import router from './router';

import './styles/index.scss';

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');