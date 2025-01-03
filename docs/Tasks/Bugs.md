## Bugs
- Capture soul shouldn't change in health cost because that isn't explained
- investigate: `reportIfTakingTooLong Arrow 2;false`
- check decoy health in multiplayer vs singleplayer
- TheyCallMeWitch — 12/01/2023 8:15 PM
Swapping with Blue Portals then forces you to enter the portal
Resurrecting a player (at least with Toxic Res) does not consider that player's Ready status for determining the round's end
- TheyCallMeWitch — 12/01/2023 7:40 PM
Sometimes, for no apparent reason, only one purple portal will appear, leaving one player stranded at level's end
- fix: UI: Decoy health isn't listed in card like other summons
    - also fix: miniboss summon tooltips don't have correct health and mana listed
- Investigate console.error('Unable to end turn because caster is undefined') occurances
    - also: 'Cannot SPAWN_PLAYER, fromPlayer is undefined.'
    - also: console.error('Critical Error, caster unit not found');
- TheyCallMeWitch — Today at 9:00 PM
Multiplayer--Friend (host) got to choose class spec at level two, I had to wait until level three. 
    - Friend also got level up stat points at level four, where I did not get any. I was dead at the time, so it might have impacted that
- I spawned a deathmason on level 1 and I'm getting these errors:
    -    Guard against infinite loop, unit tried to move but it was not its turn.  Clearing stamina
    - Cannot remove subsprite spell-effects/modifiers/modifierShield.png subsprite is missing from sprite.children
    - on the unfocused browser (edge), it's not clearing the red portals after they're used
- Stamina is incorrect for selectedUnit of other player
    - after they walked into a stamina potion

- Joined saved multiplayer game that i didn't exist in.  Changed name so that it would assume control of another player
    - 2nd player quit
        - first bug: enemies took their turn
    - 2nd player rejoined
        - second bug: 2nd player now can't get past lobby
        - and first player go to choose another spawn with old player being left behind

- Clone can put units out of bounds
    - unable to reproduce
- bug: Best Spell on game over screen is bugged
- In multiplayer if you spawn in someone else's portal it goes away and you have to end your turn twice for it to come back
- bug: if a blast pushes you through a portal and also levels you up it will show you the upgrade screen while the cinematic is playing and if you reroll during the cinematic the upgrades just go away
- UI: LeoninoMalino: Mage type selection ui is cropped on some screens (steam community)
-  Dragon352 [has Spellmasons] 8 hours ago
    pathing bug
    If you start a summon-swarm against a enemy on the opposite side of a U-path or similar, as far as I can tell its inevitable that some of the units will start to walk through the wall.
    might be tied to priest summoning some units since they are always there when I see this, but might be coincidence.
- bug: menu-UI; I still get "unable to connect" doesn't clear even after you connect in multiplayer
- bug: Enemies that will die next turn due to curses like poison shouldn't show that they will attack you next turn with attack badge
- UI: Fix order of spells in codex and inventory
- zezeus — Today at 12:14 PM
Hello, 

Sorry I attempted to record my bug but my recording software leaves up the spellbook for the entirety of the recording
anyways, more accurately after testing a couple times. Deathmasons just cause major "lag" actions can take multiple minutes to resolve, this is without pressing end turn. This happens every time deathmasons are in my game. Funny enough pressing ESC or alt-tabbing causes the actions to resolve quickly.n
so desync was not the correct term for my single-player issue
The actions of the player (my actions) take a long time to resolve. 

The deathmasons work fine. 

I only experience the bug on the level with the deathmasons
- TheyCallMeWitch — Yesterday at 7:07 PM
**After a wipe and restart, is it intended that players start with more than three spells?**
meme_man — Yesterday at 11:58 PM
Happened to me once
TheyCallMeWitch — Today at 12:31 AM
It happens to me all the time, but it's really inconsistent. Sometimes I get four spells, once I got 20
I can't tell whether this is intended or not
    - WildBerryBlast — Yesterday at 6:47 PM
question and possible bug when me and my friend die and restart a game it seems that sometimes we'll start with the regular 3 spells and sometimes we'll start with a very high number of spells and the ability to start with a class
- Loaded multiplayer game if player is in water it loses the water shader on load

## SoulMuncher
- Decoy may be affected by co-op/unit difficulty scaling