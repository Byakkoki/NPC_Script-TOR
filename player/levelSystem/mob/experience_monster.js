/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 24/10/2025 --- 3:29 AM
  Last modified: 24/10/2025 --- 3:40 AM
  Description: System that give experience to the player with double xp ectc ect
=====================================================================*/

var doubleXP = false
var worldDoubleXP = false
var debug = false

// mobType --> Mob, MiniBoss, Boss
function giveXPMonster(event, mobLevel, mobXP, mobType) {
    // event.source --> Player that killed the mob
    var player = event.source
    var playerLevel = player.getExpLevel()
    var playerXP = player.getStoreddata().get('playerXP')

    var playerDoubleXP = player.getStoreddata().get('doubleXP_on')

    if(playerDoubleXP == 'true' || worldDoubleXP == true) {
        doubleXP = true
    }

    if(mobType == 'mob' && playerLevel > mobLevel + 3) {
        player.message("&4&l[ &cVotre niveau est trop élévé, nous n'avez pas gagné d'XP &4&l]")
    } else 
    if(mobType == 'miniboss' && playerLevel > mobLevel + 5) {
        player.message("&4&l[ &cVotre niveau est trop élévé, nous n'avez pas gagné d'XP &4&l]")
    } else
    if (mobType == 'boss' && playerLevel > mobLevel + 7) {
        player.message("&4&l[ &cVotre niveau est trop élévé, nous n'avez pas gagné d'XP &4&l]")
    } else {
        sendDebug(debug, player, "mobXP " + mobXP)
        if(doubleXP == true) {
            mobXP = mobXP * 2
        }
        sendDebug(debug, player, "New mobXP " + mobXP)
        player.getStoreddata().put('playerXP', playerXP + mobXP)
    }
}