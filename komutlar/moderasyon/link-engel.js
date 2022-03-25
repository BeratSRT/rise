module.exports = {
    name: "link-engel",
    $if:"v4",
    code: `
    $if[$toLowercase[$message[1]]==aç]
        $setServerVar[linkengel;1]
        $title[1;Link Engel Sistemi Başarıyla Açıldı]
        $description[1;
            **Artık link içeren bir mesaj atıldığında o mesaj silinecek**
            **İpucu: Log'u açmak için** \`\`$getServerVar[prefix]link-engel log ayarla <#kanal>\`\` **yazmanız yeterlidir**
        ]
        $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar]
        $onlyIf[$getServerVar[linkengel]!=1;{newEmbed:{title:Sistem Zaten Açık}{description: **İpucu: Sistemi kapatmak için \`\`$getServerVar[prefix]link-engel kapat\`\` **Yazmanız Yeterlidir**}{color:303136}}]
    $elseIf[$toLowercase[$message[1]]==kapat]
        $setServerVar[linkengel;0]
        $setServerVar[linkengellog;]
        $title[1;Link Engel Sistemi Başarıyla Kapatıldı]
        $description[1;
            **Artık link içeren bir mesaj atıldığında o mesaj silinmeyecek**
            **Uyarı ! log ve muaf sistemleri sıfırlandı! **
        ]
        $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar]
        $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Sistem Zaten Kapalı}{description: **İpucu: Sistemi açmak için \`\`$getServerVar[prefix]link-engel aç\`\` Yazmanız Yeterlidir**}{color:303136}}]
    $endelseIf
    $elseIf[$toLowercase[$message[1]]==log]
        $if[$toLowercase[$message[2]]==ayarla]
            $setServerVar[linkengellog;$mentionedChannels[1]]
            $title[1;Link Engel Log Başarıyla Ayarlandı]
            $description[1;**Artık link içeren bir mesaj atıldığında <#$mentionedChannels[1;no]> kanalına bildirim atılacak**]
            $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
            $onlyIf[$mentionedChannels[1;no]!=$getServerVar[linkengellog];{newEmbed:{title:Hata}{description: **Etiketlenen kanal zaten log kanalı olarak ayarlanmış**}{color:303136}}]
            $onlyIf[$mentionedChannels[1;no]!=undefined;{newEmbed:{{title:Yanlış Kullanım}{description: **Doğru kullanım:** \`\`$getServerVar[prefix]link-engel log ayarla <#kanal>\`\`}{color:303136}}]
            $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
        $elseIf[$toLowercase[$message[2]]==sıfırla]
            $setServerVar[linkengellog;]
            $title[1;Link Engel Log Başarıyla Sıfırlandı]
            $description[1;**Artık link içeren bir mesaj atıldığında bildirim atılmayacak**]
            $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
            $onlyIf[$getServerVar[linkengellog]!=;{newEmbed:{title:Link Engel Log Sistemi Zaten Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel log ayarla <#kanal>\`\` **yazmanız yeterlidir**}{color:303136}}]
            $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
        $endelseIf
        $else
            $title[1;Şunu Mu Demek İstemiştiniz]
            $description[1;
                **$getServerVar[prefix]link-engel log ayarla <#kanal>**
                **$getServerVar[prefix]link-engel log sıfırla**
            ] 
        $endif
    $endelseIf
    $elseIf[$toLowercase[$message[1]]==muaf]
        $if[$toLowercase[$message[2]]==kanal]
            $if[$toLowercase[$message[3]]==ekle]
                $setChannelVar[linkengelkanalmuaf;1;$mentionedChannels[1;no]]
                $title[1;Link Engel Kanal Muaf Başarıyla Ayarlandı]
                $description[1;**Artık <#$mentionedChannels[1;no]> kanalında link engel sistemi çalışmayacak**]
                $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
                $onlyIf[$getChannelVar[linkengelkanalmuaf;$mentionedChannels[1]]!=1;{newEmbed:{title:Hata}{description:**Etiketlenen kanalda zaten link engel çalışmıyor**}{color:303136}}]
                $onlyIf[$mentionedChannels[1;no]!=undefined;{newEmbed:{title:Yanlış Kullanım}{description:**Doğru kullanım:** \`\`$getServerVar[prefix]link-engel muaf kanal ekle <#kanal>\`\`}{color:303136}}]  
                $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
            $elseIf[$toLowercase[$message[3]]==çıkar]
                $setChannelVar[linkengelkanalmuaf;0;$mentionedChannels[1;no]]
                $title[1;Link Engel Kanal Muaf Başarıyla Ayarlandı]
                $description[1;**Artık <#$mentionedChannels[1;no]> kanalında link engel sistemi çalışacak**]
                $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
                $onlyIf[$getChannelVar[linkengelkanalmuaf;$mentionedChannels[1;no]]!=0;{newEmbed:{title:Hata}{description:**Etiketlenen kanalda zaten link engel çalışıyor**}{color:303136}}]
                $onlyIf[$mentionedChannels[1;no]!=undefined;{newEmbed:{title:Yanlış Kullanım}{description:**Doğru kullanım:** \`\`$getServerVar[prefix]link-engel muaf kanal çıkar <#kanal>\`\`}{color:303136}}]  
                $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
            $endelseIf
            $else
            $title[1;Şunu Mu Demek İstemiştiniz]
            $description[1;
                **$getServerVar[prefix]link-engel muaf kanal ekle <#kanal>**
                **$getServerVar[prefix]link-engel muaf kanal çıkar <#kanal>**
            ]
            $endif
        $elseIf[$toLowercase[$message[2]]==kişi]
            $if[$toLowercase[$message[3]]==ekle]
                $setUserVar[linkengelkisimuaf;1;$mentioned[1;no]]
                $title[1;Link Engel Kişi Muaf Başarıyla Ayarlandı]
                $description[1;**Artık <@$mentioned[1;no]> kişisi link attığında etkilenmeyecek**]
                $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
                $onlyIf[$getUserVar[linkengelkisimuaf;$mentioned[1;no]]!=1;{newEmbed:{title:Hata}{description:**Etiketlenen kişi için zaten link engel çalışmıyor**}{color:303136}}]
                $onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{title:Yanlış Kullanım}{description:**Doğru kullanım:** \`\`$getServerVar[prefix]link-engel muaf kişi ekle <#kanal>\`\`}{color:303136}}] 
                $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
            $elseIf[$toLowercase[$message[3]]==çıkar]
                $setUserVar[linkengelkisimuaf;0;$mentioned[1;no]]
                $title[1;Link Engel Kişi Muaf Başarıyla Ayarlandı]
                $description[1;**Artık <@$mentioned[1;no]> kişisi link attığında mesajlar silinecek**]
                $footer[1;| Komutu Kullanan Kişi $userTag;$authorAvatar] 
                $onlyIf[$getUserVar[linkengelkisimuaf;$mentioned[1;no]]!=0;{newEmbed:{title:Hata}{description:**Etiketlenen kişi için zaten link engel çalışmıyor**}{color:303136}}]
                $onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{title:Yanlış Kullanım}{description:**Doğru kullanım:** \`\`$getServerVar[prefix]link-engel muaf kişi ekle <#kanal>\`\`}{color:303136}}] 
                $onlyIf[$getServerVar[linkengel]!=0;{newEmbed:{title:Link Engel Sistemi Kapalı}{description:**İpucu: sistemi açmak için** \`\`$getServerVar[prefix]link-engel aç\`\` **yazmanız yeterlidir**}{color:303136}}] 
            $endelseIf
            $else
            $title[1;Şunu Mu Demek İstemiştiniz]
            $description[1;
                **$getServerVar[prefix]link-engel muaf kişi ekle <#kanal>**
                **$getServerVar[prefix]link-engel muaf kişi çıkar <#kanal>**
            ]
            $endif
        $endelseIf
        $else
            $title[1;Şunu Mu Demek İstemiştiniz]
            $description[1;
                **$getServerVar[prefix]link-engel muaf kanal ekle <#kanal>**
                **$getServerVar[prefix]link-engel muaf kanal çıkar <#kanal>**
                **$getServerVar[prefix]link-engel muaf kişi ekle <@etiket>**
                **$getServerVar[prefix]link-engel muaf kişi çıkar <@etiket>**
            ]
        $endif
    $endelseIf
    $else
        $title[1;Şunu Mu DemeK İstemiştiniz ?]
        $description[1;
            **$getServerVar[prefix]link-engel aç**
            **$getServerVar[prefix]link-engel kapat**
            **$getServerVar[prefix]link-engel log ayarla <#kanal>**
            **$getServerVar[prefix]link-engel log sıfırla**
            **$getServerVar[prefix]link-engel muaf kanal ekle <#kanal>**
            **$getServerVar[prefix]link-engel muaf kanal çıkar <#kanal>**
            **$getServerVar[prefix]link-engel muaf kişi ekle <@etiket>**
            **$getServerVar[prefix]link-engel muaf kişi çıkar <@etiket>**
        ]
        $endif
        $onlyBotPerms[managemessages;{newEmbed:{title:Botun Yetkisi Yok}{description:**Lütfen Bota Şu İzini Verin:\`\`Mesajları Yönet\`\`**}{color:303136}}]
        $onlyPerms[admin;{newEmbed:{title:Üzgünüm Yetkin Yok}{description: **Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız:** \`\`Yönetici\`\`}{color:303136}}]
        $cooldown[3s;{newEmbed:{title:Lütfen Bekleyin}{description:**Bu Komutu Kullanmak İçin Lütfen \`\`3\`\` Saniye Bekleyin**}{color:303136}}]
        $color[1;303136]
        $deleteIn[2m]
        $deletecommand
    `
}