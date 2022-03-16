module.exports = {
  name: "gönder",
  aliases: "",
  code: `
  $setUserVar[para;$sub[$getUserVar[para;$authorID];$noMentionMessage[1]];$authorID] 
$setUserVar[para;$sum[$getUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısına $noMentionMessage miktarda para gönderildi.]
  $footer[1;Komutu Kullanan: $nickname[$authorID]]
  $onlyIf[$getUserVar[para;$authorID]>=$noMentionMessage;Yeterli miktarda para yok.]
  $onlyIf[$checkContains[$message;-]!=true; ]
  $argsCheck[2;Komutun kullanım şekli \`.göner <@kullanıcı> <Miktar>\`]
    $color[1;RANDOM]

  `
}
