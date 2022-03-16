module.exports = [{
 name:"ban",
 code: `$ban[$mentioned[1];$guildID;0;$if[$noMentionMessage==;Sebebi;$noMentionMessage]]
 $title[1;Üye Yasaklandı!]
 $description[1;<@$authorID> Yasaklandı <@$mentioned[1]>
 Banlanma Sebebi: $if[$noMentionMessage==;Sebep;$noMentionMessage]
 $color[1;RED]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];:warning: | Senden daha yüksek bir role sahip birini yasaklayamazsın]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];:warning: | Aynı en yüksek role sahip birini yasaklayamazsınız]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];:warning: | Benden daha yüksek rolü olan birini banlayamam]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];:warning: | Benimle aynı en yüksek role sahip birini yasaklayamam]
 $onlyIf[$mentioned[1]!=$ownerID;:warning: | Sunucu sahibini yasaklayamazsınız]
 $onlyIf[$mentioned[1]!=$authorID;:warning: | eminim bunu yapmak istemezsin]
 $onlyIf[$mentioned[1]!=$clientID;:warning: | kendimi yasaklayamam]
 $onlyIf[$isMentioned[$mentioned[1]]==true;:warning: | Yasaklamamı istediğin kişiyi etiketlemelisin]
 $onlyIf[$hasPerms[$guildID;$authorID;ban]==true;:warning: | Üzgünüm Yetkin Yok]
 $onlyBotPerms[ban;:warning: | Üzgünüm Yetkim Yok]`
},{
 name: "unban",
 code: `$unban[$message[1];$guildID]
 $title[1;Üye Yasağı Kaldırıldı!]
 $description[1;<@$authorID> adlı Kişinin Banı Açıldı <@$message[1]>]
 $color[1;GREEN]
 $onlyIf[$message[1]!=;:warning: | Bir kullanıcı id'si girmelisin]
 $onlyIf[$isBanned[$message[1];$guildID]==true;:warning: | Bu kullanıcı yasaklı değil]
 $onlyIf[$hasPerms[$guildID;$authorID;ban]==true;:warning: | üzgünüm yetkin yok]
 $onlyBotPerms[ban;:warning: | Üzgünüm yetkim yok]`
}] 