import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

const path = require('path');

export default defineConfig({
    plugins: [
        Vue(),
    ],
    test: {
        globals: false,
        environment: 'happy-dom',
        alias: {
            "@": path.resolve(__dirname, 'src/'),
        }
    }
})
