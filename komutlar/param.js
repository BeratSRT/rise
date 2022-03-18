module.exports = {
	name:"param",
	aliases:["para","bakiye","cüzdan","money","cash"],
	description:["Etiketlenen kişinin bakiye durumuna bakabilirsin"],
	code:`
$color[1;$getVar[hex]]
$description[1;
    Kişi: \`$userTag[$mentioned[1;yes]]\`

    Kişinin Üstündeki Para: \`$getGlobalUserVar[coin;$mentioned[1;yes]]\`
    Kişinin Banka Durumu: \`$getGlobalUserVar[bcoin;$mentioned[1;yes]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]\`
    ]
    $author[1;Sorgulanan Kişi = $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
    $footer[1;Sorgulayan = $username;$authorAvatar]
    $thumbnail[1;$userAvatar[$clientID]]
	`
}