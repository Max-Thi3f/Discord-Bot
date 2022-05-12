const express = require('express')
const app = express();
const port = 3000
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());

const {Client, Intents} = require('discord.js');
const {token} = require ('./config.json');

const client = new Client({intents: [32767]});


const prefix = '!';

client.once('ready', () => {
  console.log('Ready!');
});
// Статус БОТА
client.on("ready", () => {
    client.user.setPresence({
        activities: [{
          name: "За всеми",
          type: "WATCHING"
        }],
        status: "online"
    })
});


client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
// Команды
if(command === 'ping') {
    message.channel.send('pong!');
} else if (command === 'youtube'){
  message.channel.send('https://www.youtube.com/c/THI3F')
} else if(command ==='trovo') {
  message.channel.send('https://trovo.live/THI3F1')
}

});


client.login(token);
