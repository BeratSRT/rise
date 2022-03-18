module.exports = {
  name: "yardım",
  aliases: ["help", "y", "h"],
  descrption: "",
  code:`
  $title[1;$userTag[$clientID] Yardım Menüsü]
  $thumbnail[1;$userAvatar]
  $description[1; Botun Prefixi: \`$getServerVar[prefix]\`
  Botu Davet Etmek ve Destek Sunucusuna Katılmak İçin \`$getServerVar[prefix]davet\` Yaz!]
  $addField[1;Moderasyon Komutları;\`.ban\`, \`.sil\`]
  $addField[1;Sahibe Özel;\`.eval\`]
$addField[1;Kullanıcı Komutları;\`.avatar\`, \`.davet\`, \`.istatistik\`, \`.banner\`, \`.ping\`]
  
  
  `
}