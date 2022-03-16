module.exports = {
  name:"timeout",
  aliases:["zamanaşımı","mute","sustur","seskes","cazyapma","caz-yapma"],
  code:`
  $channelSendMessage[$getServerVar[log];{newEmbed:{author:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}
  {description:Bir üye mutelendi.}
  {field:Mute Sebebi:$replaceText[$noMentionMessage;$noMentionMessage[1];]}
  {field:Mute Süresi:<t:$truncate[$divide[$get[time];1000]]:R> biticek.}
  {field:Mutelenen Kişi:<@$mentioned[1]> - \`( $mentioned[1] )\`}
  {field:Muteleyen Yetkili:<@$authorID> - \`( $authorID )\`}
  {color:BLACK}
  {thumbnail:$userAvatar[$mentioned[1]]}}]
  
  
  $author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
  $description[1;Bir üye mutelendi.]
  $addField[1;Mute Sebebi;$replaceText[$noMentionMessage;$noMentionMessage[1];]]
  $addField[1;Mute Süresi;<t:$truncate[$divide[$get[time];1000]]:R> biticek.]
  $addField[1;Mutelenen Kişi;<@$mentioned[1]> - \`( $mentioned[1] )\`]
  $addField[1;Muteleyen Yetkili;<@$authorID> - \`( $authorID )\`]
  $color[1;BLACK]
  $thumbnail[1;$userAvatar[$mentioned[1]]]
  
  $let[time;$timeoutMember[$guildID;$mentioned[1];$noMentionMessage[1];yes;$noMentionMessage]]
  
  $onlyIf[$noMentionMessage[2]!=;❎ <@$authorID>, Mute sebebini gir.]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;];m;];h;];d;]]==true;❎ <@$authorID>, Mute süresini gir. \`Örnek: $getServerVar[prefix]mute @rise 15m spam\`]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];❎ <@$authorID>, Rolünden üstte birini muteleyemezsin.]
  $onlyIf[$mentioned[1]!=$authorID;❎ <@$authorID>, Kendini muteleyemezsin.]
  $onlyIf[$mentioned[1;no]!=undefined;❎ <@$authorID>, Mutelenicek kişiyi etiketleyin.]
  $onlyForRoles[$getServerVar[staff];<@$authorID>, Bunu kullanamazsın.]
  $onlyForServers[939277813226283039;:x: Bu Rise Sunucusuna Özel Bir Komuttur]
  `
  }