import { createApp, h } from "vue";
import App from './App';

const app = createApp({
    render: () => h(App)
});

app.mount('#app');