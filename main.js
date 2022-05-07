const {Client, Intents} = require('discord.js');
const {token} = require ('./config.json');

const client = new Client({intents: [32767]});


const prefix = '!'

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

if(command === 'ping') {
    message.channel.send('pong!');
} else if (command === 'youtube'){
  message.channel.send('https://www.youtube.com/channel/UC7qoIHH1WxlexOk1qrnMV8A')
} else if(command ==='trovo') {
  message.channel.send('https://trovo.live/THI3F1')
}

});


client.login(token);
