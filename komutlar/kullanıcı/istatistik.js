module.exports = {
   name:"istatistik",
   aliases:"i",
   code:`
$color[1;$getVar[hex]]
$author[1;Bot İstataistikleri]
$footer[1;$usertag;$authoravatar]
$addField[1;Son Düşüş; $uptime]
$addField[1;Kullanılan Bellek;CPU: $cpu\nRam: $ram]
$addField[1;Kütüphane;Aoi.js@$packageVersion]
$addField[1;Toplam Sunucu;$servercount]
$addField[1;Toplam Üye;$allMemberscount]
$addField[1;Bot kuruluş tarihi;<t:$truncate[$math[$creationDate[$clientid;ms]/1000]]:F>]
$addField[1;Bot Sahibi;$usertag[$botownerid]]
`
} 
