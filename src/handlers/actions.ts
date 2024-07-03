import app from "@/app";
import config from "@/config";

const { ADMIN_ID } = config;

setTimeout(() => {
    ADMIN_ID
        ? app.telegram.sendMessage(ADMIN_ID, 'Bot started!')
        : console.error('ADMIN_ID is not defined');
}, 5000);