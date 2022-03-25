module.exports = {
  name: "davet",
  aliases: "invite",
  description: "Botun davet linklerini gösterir.",
  code: `
  $title[1;$username[$clientID] Yardım Menüsü]
  $description[1;
  
  [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8) 
  [Botun Destek Sunucusu](https://discord.gg/YzpDsUCbz7)
  
  ]
$thumbnail[1;$userAvatar[$clientId]] 
  
  `
}