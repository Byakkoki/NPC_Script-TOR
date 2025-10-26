/*=====================================================================
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██████╔╝
  ░░░██║░░░██║░░██║██╔══██╗
  ░░░██║░░░╚█████╔╝██║░░██║
  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

  Project: TOR
  Author: Byakko
  Created on: 24/10/2025 --- 7:40 PM
  Last modified: 24/10/2025 --- 7:40 PM
  Description: Post in the database after the first join
=====================================================================*/

function postFirstJoin(event) {
  var url = 'http://44.31.180.13:3000/player/firstjoin'
  var payload = {
    "idMinecraft": event.player.getUUID(),
    "minecraftName": event.player.getName(),

    "level": event.player.getExpLevel(),
    "xp": event.player.getStoreddata().get('playerXP'),
    "classe": event.player.getStoreddata().get('class'),

    "attributePoint": event.player.getStoreddata().get('attributePoint'),
    "vitalitySkill": event.player.getStoreddata().get('playerHealth'),
    "strengthSkill": event.player.getStoreddata().get('playerStrength'),
    "luckSkill": event.player.getStoreddata().get('playerLuck'),
    "resistanceSkill": event.player.getStoreddata().get('playerResistance'),
    "agilitySkill": event.player.getStoreddata().get('playerAgility'),
    "inteligenceSkill": event.player.getStoreddata().get('playerInteligence'),
    "sagesseSkill": event.player.getStoreddata().get('playerSagesse'),

    "money": event.player.getStoreddata().get('diamond'),
    "diamond": event.player.getStoreddata().get('diamond'),
    "crystal": event.player.getStoreddata().get('cristal'),

    "minerLevel": event.player.getStoreddata().get('miner_level'),
    "minerXP": event.player.getStoreddata().get('miner_xp'),
    "lumberjackLevel": event.player.getStoreddata().get('lumberjack_level'),
    "lumberjackXP": event.player.getStoreddata().get('lumberjack_xp'),
    "herbalistLevel": event.player.getStoreddata().get('herbalist_level'),
    "herbalistXP": event.player.getStoreddata().get('herbalist_xp'),
    "fishermanLevel": event.player.getStoreddata().get('fisherman_level'),
    "fishermanXP": event.player.getStoreddata().get('fisherman_xp'),
    "hunterLevel": event.player.getStoreddata().get('hunter_level'),
    "hunterXP": event.player.getStoreddata().get('hunter_xp'),

    "firstJobName": event.player.getStoreddata().get('first_job'),
    "firstJobLevel": event.player.getStoreddata().get('first_job_level'),
    "firstJobXP": event.player.getStoreddata().get('first_job_xp'),
    "secondJobName": event.player.getStoreddata().get('second_job'),
    "secondJobLevel": event.player.getStoreddata().get('second_job_level'),
    "secondJobXP": event.player.getStoreddata().get('second_job_xp')
  }
    
  event.player.message(new String(JSON.stringify(payload)))

  HTTPTORBackEnd(url, payload)
}