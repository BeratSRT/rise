module.exports = {
  name: "günlük",
  code: `
$title[1;$username Günlük Maaşını Aldı.]
$thumbnail[1;$userAvatar[$authorID]]
$description[1;$username Günlük Maaş Olarak \`$getVar[günlük]\` Aldı.]
$color[1;$getVar[hex]]
$addTimestamp[1]

$setUserVar[para;$sum[$getUserVar[para];$getVar[günlük]];$authorID]
$globalCooldown[1d;**⏰ Yeniden günlük komutunu kullanmak için %time% beklemen lazım!**]
`
}