const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./token');

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
          let name = mg[2].split(",");
          let arr_name = [];
          let i = 0;
          while(name.length > 1){
              i = Math.floor(Math.random() * name.length);
              arr_name.push(name[i]);
              name.splice(i,1);
          }
          arr_name.push(name[0]);
          let group = parseInt(mg[1]);
          let member = Math.round(arr_name.length/group);
          let answer = '';
          for(i = 0;i < group-1;i++){
              answer = answer+'กลุ่มที่ '+(i+1).toString()+'\n'
              for(let j = 0;j < member;j++){
                answer = answer+'- '+arr_name[0]+'\n'
                arr_name.splice(0,1);
              }
          }
          answer = answer+'กลุ่มที่ '+(group).toString()+'\n'
          for(i = 0;i < arr_name.length;i++){
            answer = answer+'- '+arr_name[i]+'\n'
          }
          message.channel.send(answer);
        }
      } catch (error) {
        message.channel.send("รูปแบบคำสั่งไม่ถูกต้อง");
      }
        

    }
    });

client.login(token())