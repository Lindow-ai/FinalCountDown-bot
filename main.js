const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config')
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply('pong');
});

client.login(TOKEN);