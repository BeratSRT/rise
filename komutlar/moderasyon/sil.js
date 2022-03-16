module.exports = [{
  name:"sil",
  code:`
  $color[1;$getVar[hex]]
  $thumbnail[1;$userAvatar[$clientID]]
  $description[1;
  ☔ •  \`\$message[1]\`\ Mesaj Silmek İstediğine Emin Misin?
    • Silmek İçin 🗑️
    • İşlemi İptal Etmek İçin 🚯]
  $addButton[1;Sil;1;sil;no;🗑️]
  $addButton[1;İptal;1;siptal;no;🚯]
  $setServerVar[sil;$message[1]]
  $onlyIf[$message[1]!=;> $getVar[çarpı] | <@$authorID> **Lütfen Silmek İstediğin Mesaj Sayısını Girin**]
  $onlyIf[$message[1]<101;> $getVar[çarpı] | <@$authorID> Lütfen 100'den Fazla Mesaj Girmeyin]
  $onlyPerms[admin;$getServerVar[admin]]
  `},{
    name:"sil",
    type:"interaction",
    prototype:"button",
    code:`
    
  $clear[$math[$getServerVar[sil]+2]]
   `
   },{
     name:"siptal",
     type:"interaction",
     prototype:"button",
     code:`
       $interactionReply[> <@$authorID> • Silme İşlemi Başarıyla İptal Edildi]
  $clear[2]
     `
   }]