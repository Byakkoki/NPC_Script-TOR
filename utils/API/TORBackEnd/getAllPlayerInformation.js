/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 24/10/2025 --- 6:56 PM
  Last modified: 24/10/2025 --- 7:09 PM
  Description: Return all player Information with the BackEnd 
=====================================================================*/

function getAllPlayerInformation(event) {
    if(event.player.getDisplayName === 'Byakkoki') {
        var url = "http://44.31.180.13:3000/player"
        var response = HTTPTORBackEnd.get(url)
        event.player.message(response)
    } else {
        return
    }
}