import app from "@/app";
import { message } from 'telegraf/filters';

app.on(message('sticker'), (ctx) => {
    ctx.reply('sticker');
});

app.on(message('text'), (ctx) => {
    ctx.reply('message received');
});