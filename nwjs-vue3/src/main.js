import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
app.use(createPinia())
app.use(router);

import './permission';

app.use(ElementPlus);
// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');

if (process.env.NODE_ENV === 'development') {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F5') {
            // 绑定f5 刷新页面
            window.location.reload();
        }
    });
}
