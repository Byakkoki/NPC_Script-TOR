/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 21/10/2025 --- 5:29 PM
  Last modified: 21/10/2025 --- 6:01 PM
  Description: System that stores all the “important” stored data for the player in the CustomNPC database / player data!
=====================================================================*/

function init(event) {

    /* We check if is the first connection of the player with the getStoreddata() && level 0.
       If its not we give all the storeddata he require for the aventure ! */
    if(event.player.getExpLevel() == 0 && !event.player.getStoreddata().get('firstJoin')) {
        // GIVE ALL THE STOREDDATA REQUIRE
        var playerData = event.player.getStoreddata()
        

        /*

            Player level + Attribute

        */
       
        playerData.put('playerHealth', 10) // --> Give More Heal to the player
        playerData.put('playerStrength', 0) // --> Give AttackDamage to the player
        playerData.put('playerLuck', 0) // --> Give More Luck to drop ect
        playerData.put('playerResistance', 0) // --> Give ResistanceDamage to the player
        playerData.put('playerAgility', 0) // --> Give DodgeChance to the player
        playerData.put('playerInteligence', 0) // --> Give More Mana to the player
        playerData.put('playerSagesse', 0) // --> Give Health Regen (MAYBE) && Mana Regen (MAYBE) to the player
        // playerData.put('playerMana', 100) // --> LATER
        playerData.put('playerLevel', 0) // --> Level of the player
        playerData.put('playerXP', 0) // --> XP of the Player
        playerData.put('attributePoint', 0) // --> Point for upgrade attribute for the player
        playerData.put('skillPoint') // --> Point for upgrade skill for the player LATER
        playerData.put('counter', 0) // --> XXXX
        playerData.put('class', 'null') // --> Class of the player (ONLY MELEE NOT RANGE) - Warrior/Assassin/Barbare etc

        /*

            Player Job

        */

        // Player Job Utils
        playerData.put('miner_level', 0)
        playerData.put('miner_xp', 0)
        playerData.put('lumberjack_level', 0)
        playerData.put('lumberjack_xp', 0)
        playerData.put('herbalist_level', 0)
        playerData.put('herbalist_xp', 0)
        playerData.put('fisherman_level', 0)
        playerData.put('fisherman_xp', 0)
        playerData.put('hunter_level', 0)
        playerData.put('hunter_xp', 0)

        // Player Job Unique --> He can have 2 Job in a list of 6-8 Job unique (Blacksmith (Weapon/Armor) - Alchemist - ect)
        playerData.put('first_job', 'null')
        playerData.put('first_job_level', 0)
        playerData.put('first_job_xp',0)
        playerData.put('second_job', 'null')
        playerData.put('second_job_level', 0)
        playerData.put('second_job_xp',0)

        /*

            Player Utils

        */

        // Player Guild
        playerData.put('guildName', 'null')

        // Player Money
        playerData.put('diamond', 100)
        playerData.put('cristal', 0)

        // Player Double XP
        playerData.put('doubleXP_on', 'false')
        playerData.put('doubleXP_time', 0)
        playerData.put('doubleXP_interactTime', 0)


        /* Here, we set the player's stored data "firstjoin" to true, so that on their next login, this script will no 
           longer run and all their stored data will be preserved! */
        playerData.put('firstJoin', 'true')


    } else {
        return
    }

}