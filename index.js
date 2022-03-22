const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all"
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

bot.onInteractionCreate()

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()

////////// Durum \\\\\\\\\\
bot.status({
text:".yardım",
type:"PLAYING",
status:"dnd",
time: 12
})

bot.status({
text: "$serverCount Sunucuya ve $allMembersCount Kullanıcıya Hizmet Ediyorum!",
type: "PLAYING",
status: "dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
prefix:".",
cross: "<:error:949646528128098314>",
tick: "<:success:949647674431381524> ",
admin:"> <@$authorID>  Üzgünüm **Admin** Yetkin Yok",
sil: "0",
hex: "#BDAAF9",
log: "951522365425217646",
staff: "951522339709923418",
lengel: "kapalı"
})


const express = require('express');
const app = express()
app.get("/",(req,res) =>{
  res.send("Aktifim Knks")
})
app.listen(8080)

//////////// Komutlar \\\\\\\\\\
bot.guildJoinCommand({
channel: "951522361692291163",
code: `
$title[1;Bir Sunucuya Katıldım]
$description[1;
**Sunucu Adı:** _\`$serverName\`_
**Sunucu ID:** _\`$guildID\`_
**Üye Sayısı:** _\`$membersCount\`_

]
`
})
bot.onGuildJoin()

bot.guildLeaveCommand({
channel: "951522361692291163",
code: `
$title[1;Bir Sunucudan Çıktım]
$description[1;
**Sunucu Adı:** _\`$serverName\`_
**Sunucu ID:** _\`$guildID\`_
**Üye Sayısı:** _\`$membersCount\`_

]
`
})
bot.onGuildLeave()  



