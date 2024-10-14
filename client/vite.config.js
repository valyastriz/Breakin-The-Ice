import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/graphql': {
                target: isProduction ? 'https://ibs.my-dev-server.com/graphql' : 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/create-checkout-session': {
                target: isProduction ? 'https://icebreaker-station.web.app/create-checkout-session' : 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            }
        }
    }
});