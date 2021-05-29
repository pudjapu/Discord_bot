const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./token');

client.once('ready', () => {
    console.log('Hello!');
})

const prefix  = '-';

client.on('message', message => {
    if (message.content === prefix+'myavatar') {
      message.reply(message.author.displayAvatarURL());
    }
    else if(message.content === prefix+'help'){
        message.channel.send("-help = แสดงคำสั่ง\n-myavatar = แสดงรูป avatar")
    }
  });

client.login(token())