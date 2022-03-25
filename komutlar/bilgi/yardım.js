module.exports = [{
  name: "yardım",
  code: `
  $color[1;RANDOM]
$author[1;$username[$clientID] Komutlar;$userAvatar[$clientID]]
$thumbnail[1;$authorAvatar]
$footer[1;Sorgulayan: $username#$discriminator[$authorID];$authorAvatar]
$description[1;
:green_book: [Moderasyon Komutları]($getBotInvite) (**??**)
:closed_book: [Ayarlamalı Komutlar]($getBotInvite) (**??**)
:blue_book: [Eğlence Komutları]($getBotInvite) (**??**)
:orange_book: [Genel Komutları]($getBotInvite) (**??**)

⭕ [Ana Menü]($getBotInvite)
]
$addButton[1;;3;genel;no;📙]
$addButton[1;;1;eglence;no;📘]
$addButton[1;;2;menu;yes;⭕]
$addButton[1;;4;ayarlamali;no;📕]
$addButton[1;;3;mod;no;📗]`
},{
  type: "interaction",
  prototype: "button",
  name: "mod",
  code: `$interactionUpdate[
  ;{newEmbed:{author:$username[$clientID] Bot Moderasyon Komutları:$userAvatar[$clientID]}{thumbnail:$authorAvatar}
  {footer:Sorgulayan = $userTag:$authorAvatar}
  {description:
:green_book: \`.ban @kullanıcı (isteğe bağlı)sebep\` **Etiketlediğiniz Kişiyi Banlar. İsteğe Bağlı Olarak Sebep Girebilirsiniz.** 
:green_book: \`.unban -kullanıcıid-:\` **İdsini Girdiğiniz Kişinin Banını Kaldırır.**
:green_book: \`.sil\` **Girdiğiniz Miktarda Mesaj Siler.**}{color:GREEN}};{actionRow:{button::3:mod:yes:📗}
{button::4:ayarlamali:no:📕}
{button::2:menu:no:⭕}
{button::1:eglence:no:📘}
{button::3:genel:no:📙}}]
  `}, 
{
  type: "interaction",
  prototype: "button",
  name: "ayarlamali",
  code: `$interactionUpdate[
  ;{newEmbed:{author:$username[$clientID] Botun Ayarlamalı Komutları:$userAvatar[$clientID]}{thumbnail:$authorAvatar}
  {footer:Sorgulayan = $userTag:$authorAvatar}
  {description:
:closed_book: \`.link-engel aç/kapat:\` **Üyelerin Reklamlarını Engeller. Diğer Komutlar İçin .link-emgel**
}{color:RED}};{actionRow:{button::3:mod:no:📗}
{button::4:ayarlamali:yes:📕}
{button::2:menu:no:⭕}
{button::1:eglence:no:📘}
{button::3:genel:no:📙}}]
  `},{
  type: "interaction",
  prototype: "button",
  name: "menu",
  code: `$interactionUpdate[
  ;{newEmbed:{author:$username[$clientID] Bot Komutları:$userAvatar[$clientID]}{thumbnail:$authorAvatar}
  {footer:Sorgulayan = $userTag:$authorAvatar}
  {description:
  :green_book: [Moderasyon Komutları]($getBotInvite) (**??**)
:closed_book: [Ayarlamalı Komutları]($getBotInvite) (**??**)
:blue_book: [Eğlence Komutları]($getBotInvite) (**??**)
:orange_book: [Genel Komutları]($getBotInvite) (**??**)

⭕ [Ana Menü]($getBotInvite)
}{color:RANDOM}};{actionRow:{button::3:mod:no:📗}
{button::4:ayarlamali:no:📕}
{button::2:menu:yes:⭕}
{button::1:eglence:no:📘}
{button::3:genel:no:📙}
}]
  `} 
,{
  type: "interaction",
  prototype: "button",
  name: "eglence",
  code: `$interactionUpdate[
  ;{newEmbed:{author:$username[$clientID] Bot Eğlence Komutları:$userAvatar[$clientID]}{thumbnail:$authorAvatar}
  {footer:Sorgulayan = $userTag:$authorAvatar}
  {description:
:blue_book: \`yakında\` **yakında.**}{color:BLUE}};{actionRow:{button::3:mod:no:📗}
{button::4:ayarlamali:no:📕}
{button::2:menu:no:⭕}
{button::1:eglence:yes:📘}
{button::3:genel:no:📙}}]
  `},{
  type: "interaction",
  prototype: "button",
  name: "genel",
  code: `$interactionUpdate[
  ;{newEmbed:{author:$username[$clientID] Bot Genel Komutlar:$userAvatar[$clientID]}{thumbnail:$authorAvatar}
  {footer:Sorgulayan = $userTag:$authorAvatar}
  {description:
:orange_book: \`.avatar\` **Etiketlediğiniz kişinin avatarını gösterir.**
:orange_book: \`.davet\` **Botun davet linklerini gönderir.**
:orange_book: \`.istatistik\` **Botun istatistiklerini gösterir.**
:orange_book: \`.ping\` **Botun pingini gösterir.**
:orange_book: \`.banner\` **Etiketlediğiniz kişinin bannerini gösterir.**
}{color:YELLOW}};{actionRow:{button::3:mod:no:📗}
{button::4:ayarlamali:no:📕}
{button::2:menu:no:⭕}
{button::1:eglence:no:📘}
{button::3:genel:yes:📙}}]
  `}] 
