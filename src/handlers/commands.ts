import app from "@/app";

app.command('start', (ctx) => {
    ctx.reply('/start');
});

app.command('help', (ctx) => {
    ctx.reply('/help');
});

app.command('test', (ctx) => {
    ctx.reply('/test');
});