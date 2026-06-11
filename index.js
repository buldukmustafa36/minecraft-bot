const mineflayer = require('mineflayer');
const http = require('http');

// Render'ın botu uyutmaması için gereken kısım
http.createServer((req, res) => res.end('Bot aktif!')).listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'dynamic-6.magmanode.com', 
  port: 25732,
  username: 'Bot',
  version: '1.21'
});
bot.on('spawn', () => {
  console.log('Bot sunucuya girdi!');
});

bot.on('kicked', console.log);
bot.on('error', console.log);
