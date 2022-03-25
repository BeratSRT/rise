module.exports = [{
  name: "ping",
  code:`
Gecikmem **$ping** Ms
$addButton[1;Sil;primary;sil_$authorID;no;<:error:949646528128098314>]
  `
}, {
  type: 'interaction',
  prototype: "button",
  code:`
$interactionDelete

$wait[3s]

$interactionUpdate[Mesaj 3 Saniye İçinde Mesaj Siliniyor]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" : "Bu Mesaj <@$advancedTextSplit[$interactionData[customId];_;2]> Kişinin Embedı","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sil;]
  `
}]
//her kodun altına $addButton[Sil;primary;sil_$authorID;no;istediğiniz emoji]