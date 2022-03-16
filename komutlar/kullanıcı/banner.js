module.exports = {
  name: "banner",
  code:`
$author[1;$userTag[$mentioned[1;yes]]'in Banneri;$userAvatar[$mentioned[1;yes]]]
$image[1;$getUserBanner[$mentioned[1;yes]]]
$color[1;BLUE]
$footer[1;$username İstedi]
$addTimesTamp[1]
$onlyIf[$getUserBanner[$mentioned[1;yes]]!=null;Kişinin Bannerı Yok]
`
} 