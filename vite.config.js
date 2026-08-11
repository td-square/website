import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    server: {
        host: true,
        port: 5173,
    },

    base: "/square/",

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                company: resolve(__dirname, "company/index.html"),
                info: resolve(__dirname, "company/info/index.html"),
                reports: resolve(__dirname, "company/info/reports/index.html"),
            },
        },
    },
});
