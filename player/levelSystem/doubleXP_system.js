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
  Last modified: 22/10/2025 --- 5:44 PM
  Description: System that allows players to earn 2x/3x/4x XP for a limited time through bonuses, etc ! (For now only x2 xp)
=====================================================================*/

// In case the first login didn’t set the stored data for double XP!
function init(event) {
    if(!event.player.getStoreddata().get('doubleXP_time')) {
        var player = event.player
        var playerData = player.getStoreddata()
        playerData.put('doubleXP_on', 'false')
        playerData.put('doubleXP_time', 0)
        playerData.put('doubleXP_interactTime', 0)
    }
}

/* For each tick we check if the player have the storeddata on and if it yes we check the start of double xp
   And the current time to check if the time is passed (So if the player disconnect the timer down) */
function tick(event) {
    var player = event.player
    var playerData = player.getStoreddata()
    if(playerData.get('doubleXP_on') == 'true') {
        var currentTime = new Date().getTime()
        var timeDoubleXP = playerData.get('doubleXP_time')
        var interactTimeDoubleXP = playerData.get('doubleXP_interactTime')
        var elapsedTime = (currentTime - interactTimeDoubleXP) / 1000 // millisecond -> seconde
        // player.message(elapsedTime) // --> DEBUG
        if(elapsedTime >= timeDoubleXP) {
            // Here we send to the player the double xp is finish and stop the storeddata
            player.message('Votre bonus double XP est finis !')
            playerData.put('doubleXP_on', 'false')
            playerData.put('doubleXP_time', 0)
            playerData.put('doubleXP_interactTime', 0)
        }
    }
}