/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 24/10/2025 --- 1:08 PM
  Last modified: 24/10/2025 --- 1:09 PM
  Description: Player Damage with his bonus (Attribute/Ring/Bracelet ect)
=====================================================================*/

function damagedEntity(event) {
    var player = event.player
    var playerDataStrength = player.getStoreddata().get('playerStrength')

    event.damage = event.damage + playerDataStrength
}