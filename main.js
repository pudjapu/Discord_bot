const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./token/token');
const random_group = require('./function/random_group')

client.once('ready', () => {
    console.log('Online');
})

const prefix  = '-';

client.on('message', message => {

    if(message.author.bot) return;

    const mg = message.content.split(" ");

    if (mg[0] === prefix+'myavatar') {
        message.reply(message.author.displayAvatarURL());
    }
    else if(mg[0] === prefix+'help'){
        message.channel.send("-help : แสดงคำสั่ง\n-myavatar : แสดงรูป avatar\n-rg : แบ่งกลุ่ม")
    }
    else if(mg[0] === prefix+'rg'){
      try {
        if(mg[1] === '-help'){
          message.channel.send("รูปแบบคำสั่ง : -rg จำนวนกลุ่ม ชื่อ_1,ชื่อ_2");
        }
        else{
          let answer = random_group(mg[1],mg[2])
          message.channel.send(answer);
        }
      } catch (error) {
        message.channel.send("รูปแบบคำสั่งไม่ถูกต้อง");
      }
        

    }
    });

client.login(token())