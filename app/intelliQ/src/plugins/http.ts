import axios from 'axios';
import { App } from 'vue';

const axiosInstance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default {
    install(app: App) {
        app.config.globalProperties.$http = axiosInstance;
    },
};

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $http: typeof axiosInstance;
    }
}
