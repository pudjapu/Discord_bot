const Discord = require('discord.js');

const client = new Discord.Client();

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

client.login("ODQ4Mjg3ODUxNzAyMzg2NzE4.YLKboA.iPo_gb331EMX0xZhlB9su2naFpQ")