import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode, }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            svgr({ svgrOptions: { icon: true, }, }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            port: 3000,
            open: false,
        },
        define: {
            __IS_DEV__: mode === 'development',
            __API_URL__: JSON.stringify(env.VITE_API_URL),
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: mode === 'development'
                    ? '[path][name]__[local]'
                    : '[hash:base64:8]',
            },
        },
        build: {
            outDir: 'build',
        },
    };
});