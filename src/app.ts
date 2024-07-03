import { Telegraf } from 'telegraf';
import config from '@/config';

const app = new Telegraf(config.BOT_TOKEN);

export default app;