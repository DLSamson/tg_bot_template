# Telegram Bot Node Template

This is an intuitive telegram bot template created on nodejs and telegraph.

Designed for rapid prototyping and testing, it is made in the simplest possible way so that you don't have to remember "how it works" every time.

It is not intended for use in production.

# How to start

Anyways, if this is the first time you see this template, it's worth clarifying how to start working with it.

First of all, clone this repo

```bash
git clone git@github.com:DLSamson/tg_bot_template.git
```

Copy .env file and fill it with your telegram bot token and admin id if needed. 
Everything inside .env file with be in your config object, so you can provide other variables if needed.

```bash
cp .env.dist .env
```

Then, install npm packages. It should be working well with nodejs of version ^20.14.9.

```bash
npm i
```

Well, everything is ready to start working.

To start your bot working in dev mode with nodemon run this:

```bash
npm run dev
```

In case you want it just work you can run this.

```bash
npm run start
```

# How it works

`config.ts` contains your config object. It loads everything from .env file.

Every bot's logic is located in `src/handlers` 

`actions.ts` is for actions that happens after bot starts. For example, send an administrator a message that bot started working.

`commands.ts` is for user / commands. For example `/start`

`messages.ts` is for replying for any user message. For example "Hello" or Sticker.


