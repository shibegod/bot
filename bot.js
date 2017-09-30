const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("343037231734456322").send("Welcome to the greatest discord server of all time!, " + member);
    });
    
    bot.login(process.env.BOT_TOKEN); 
