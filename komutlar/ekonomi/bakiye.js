module.exports = {
  name: "bakiye",
  aliases: ["param"],
  description: "Size Paranızı Gösterir.",
  code:`
  
  $description[1; <@$mentioned[1]> Bilgileri. \n
  $addField[1;Bankadaki Paran;$getUserVar[bankap;$mentioned[1;yes]]]
  $addField[1;Paran;$getUserVar[para;$mentioned[1;yes]]]
  
  ]
  
  
  `
}