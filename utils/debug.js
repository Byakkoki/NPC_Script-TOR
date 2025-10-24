/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 24/10/2025 --- 3:43 AM
  Last modified: 24/10/2025 --- 3:45 AM
  Description: Utils that send to the player debug if the state is to true
=====================================================================*/

function sendDebug(debugState, player, message) {
    if (!debugState) return;
    if (player && typeof player.message === 'function') {
        try { player.message(message); } catch (e) { /* ignore */ }
    }
}