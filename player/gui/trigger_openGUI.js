/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 26/10/2025 --- 4:43 PM
  Last modified: 26/10/2025 --- 4:46 PM
  Description: Trigger to open all the GUI (make with the command /noppes script trigger [ID])
=====================================================================*/

function trigger(event) {
    var player = event.entity
    if(event.id == 1000) {
        openMainGUI(event, player)
    }
}