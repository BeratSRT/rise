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
text:".yardım",  //Oynuyor kısmında yazacak olan.
type:"PLAYING",  //PLAYING: OYNUYOR, WATCHING: İZLİYOR, LISTENING: DİNLİYOR
status:"dnd",    //dnd: rahatsız etme, idle: boşta, online: çevrimiçi
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
  linkengel: "0",
  linkengellog: "",
  linkengelkanalmuaf: "0",
  linkengelkisimuaf: "0"
})

//replit kısmı

/*const express = require('express');
const app = express()
app.get("/",(req,res) =>{
  res.send("Aktifim Knks")
})
app.listen(8080) */

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

//Link engel

bot.command({
    name:"$alwaysExecute",
    $if:"v4",
    code:`
    $if[$getServerVar[linkengellog]!=]
        $channelSendMessage[$getServerVar[linkengellog];{execute:linkengel}]
    $endif
    $title[1;Link Engel Sistemi Açık]
    $description[1;**<@$authorID> Link Atamazsın**]
    $deleteIn[5s]
    $color[1;303136]
    $deletecommand
    $onlyIf[$checkContains[$toLowercase[$message];https://;http://;discord.gg;discord.gift;.com;.net;.cf;.tk;.gq;.org]==true;]
    $onlyIf[$getUserVar[linkengelkisimuaf]==0;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
    $onlyIf[$getChannelVar[linkengelkanalmuaf]==0;]
    $onlyIf[$getServerVar[linkengel]==1;]
    `,
    nonPrefixed: true
  })
  bot.updateCommand({ 
    channel: "$channelID", 
    $if:"v4",
    code: `
    $if[$getServerVar[linkengellog]!=]
        $channelSendMessage[$getServerVar[linkengellog];{execute:linkengel}]
    $endif
    $title[1;Link Engel Sistemi Açık]
    $description[1;**<@$authorID> Link Atamazsın**]
    $deleteIn[5s]
    $color[1;303136]
    $deletecommand
    $onlyIf[$checkContains[$toLowercase[$message];https://;http://;discord.gg;discord.gift;.com;.net;.cf;.tk;.gq;.org]==true;]
    $onlyIf[$getUserVar[linkengelkisimuaf]==0;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
    $onlyIf[$getChannelVar[linkengelkanalmuaf]==0;]
    $onlyIf[$getServerVar[linkengel]==1;]
    `
  })
  bot.awaitedCommand({
    name: "linkengel",
    code: `
    $useChannel[$getServerVar[linkengellog]]
    $title[1;Bir Kişi Link İçeren Bir Mesaj Attı]
    $addField[1;**Yazdığı Mesaj**:;\`\`\`$message\`\`\`;no]
    $addField[1;**Kanal**:;<#$channelID>;yes]
    $addField[1;**ID**:;**$authorID**;yes]
    $addField[1;**Kişi**:;<@$authorID>;yes]
    $addTimestamp[1;]
    $color[1;303136]
    $thumbnail[1;$userAvatar[$authorID]]
  `
  })  

