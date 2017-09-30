const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("343037231734456322").send("Hey dumbass welcome to this toxic cancerous gay fucking discord server hope you don't have fun bitch. Eat a dick " + member);
    });
    
    bot.login(process.env.BOT_TOKEN); 
