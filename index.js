import { Bot } from './yapper.js';

const bot = new Bot(process.env.YAPPER_BOT_TOKEN);

bot.on('ready', () => {
    console.log('Bot is online!');
});

bot.start();
