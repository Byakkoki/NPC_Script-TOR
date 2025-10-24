/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 21/10/2025 --- 6:02 PM
  Last modified: 21/10/2025 --- 6:15 PM
  Description: System that allows players to earn 2x/3x/4x XP for a limited time through bonuses, etc.!
=====================================================================*/

function interact(event) {
    var player = event.player
    var playerData = player.getStoreddata()
    if(playerData.get('doubleXP_on') == 'true') {
        player.message('Vous avez déja un Double XP actif !')
    } else {
        playerData.put('doubleXP_on', 'true')
        playerData.put('doubleXP_time', 60) // IN SECOND
        playerData.put('doubleXP_interactTime', new Date().getTime())
        player.message("Double xp activé pendant 60 Seconde !")
    }
}