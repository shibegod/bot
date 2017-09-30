const Discord = require("discord.js");
const prefix = "*"
var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("343037231734456322").send("Hey dumbass welcome to this toxic cancerous gay fucking discord server hope you don't have fun bitch. Eat a dick " + member);
    });

bot.on("message", message => {
      if (message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;

      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  console.log(command);
    
if (message.content.startsWith(prefix + "setgame")) {
    if (message.author.id == "251938340671062036") {
        let argsresult = args.join(' ')
        bot.user.setGame(argsresult)
        message.channel.send('game has been set')
    }
}
    
    bot.login(process.env.BOT_TOKEN); 
