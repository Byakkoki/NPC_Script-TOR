/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 26/10/2025 --- 4:40 PM
  Last modified: 26/10/2025 --- 4:45 PM
  Description: GUI with all the information of the player (level, money, attribute point, skill, job, codex, ect)
=====================================================================*/

var gui

function openMainGUI(event, player) {
    gui = event.API.createCustomGui(1, 256, 256, false, player)


    


    player.showCustomGui(gui)
}