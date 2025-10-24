/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 21/10/2025 --- 5:25 PM
  Last modified: 24/10/2025 --- 3:22 AM
  Description: System that allows players to gain XP and level up!
=====================================================================*/


// A FAIRE: / skill a chaque passage de level / 

var experienceRequired = {
  1: 250,
  2: 250,
  3: 250,
  4: 250,
  5: 250
}

var levelReward = {
  1: { strength: 0, health: 2, mana: 1 }
}

// If the player is level 5-10-15 he can't xp more
var levelLimit = 5

var playerLevel
var playerXP

// In case the first login didn’t set the stored data for the Experience System ! And we put for each init the counter to 0
function init(event) {
  if(event.player.getExpLevel() === 0 && !event.player.getStoreddata().get('class')) {
    event.player.setMaxHealth(event.player.getStoreddata().get('playerHealth'))
    event.player.setHealth(event.player.getStoreddata().get('playerHealth'))
  }
  event.player.getStoreddata().put('counter', 0)
} 

function tick(event) {
  var player = event.player

  var counter = player.getStoreddata().get('counter')

  if(counter == 5) {
    player.getStoreddata().put('counter', 0)
    var playerHP = player.getStoreddata().get('playerHealth')
    player.setMaxHealth(playerHP)
    checkXPForLeveling(event)
  } else {
    player.getStoreddata().put('counter', counter + 1)
  }
}

function checkXPForLeveling(event) {
  var player = event.player

  playerLevel = player.getExpLevel()
  playerXP = player.getStoreddata().get('PlayerXP')

  if(playerXP >= experienceRequired[playerLevel + 1]) {
    if(playerLevel == levelLimit) {
      player.getStoreddata().put('playerXP', 0)
      return
    } else {
      // If the player have the experience required whe give him one level and executeCommand
      player.getStoreddata().put('playerXP', playerXP - experienceRequired[playerLevel + 1])
      playerLevel = playerLevel + 1
      player.setExpLevel(playerLevel)
      player.getStoreddata().put('playerLevel', playerLevel)
      player.playSound('entity.player.levelup', 1, 1)
      // Execute a command to say to the player he have levelUp !
      event.API.executeCommand(player.getWorld(), 'title @p title {"text":"LEVEL UP", "color":"blue"}') // --> UPGRADE THIS LATER
      event.API.executeCommand(player.getWorld(), 'heal ' + player.getDisplayName())

      // Here we give to the player one attribute/skill point and the reward for leveling
      player.getStoreddata().put('attributePoint', player.getStoreddata().get('attributePoint') + 1)
      player.getStoreddata().put('skillPoint', player.getStoreddata().get('skillPoint') + 1)
      playerRewardLevelUp(event.player, event.player.getExpLevel())
    }
  }
}

function playerRewardLevelUp(player, lvl) {
  if(player.getExpLevel() != lvl) {
    return
  } else {
    var playerHP = player.getStoreddata().get('playerHealth') + levelReward[lvl].health
    player.getStoreddata().put('playerHealth', playerHP)
    player.setMaxHealth(playerHP)
  }
}