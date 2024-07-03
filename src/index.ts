import 'module-alias/register';
import app from '@/app';

import '@/handlers/commands';
import '@/handlers/messages';
import '@/handlers/actions';

console.log('Bot started...');
app.launch(); 

// Enable graceful stop
process.once('SIGINT', () => app.stop('SIGINT'))
process.once('SIGTERM', () => app.stop('SIGTERM'))