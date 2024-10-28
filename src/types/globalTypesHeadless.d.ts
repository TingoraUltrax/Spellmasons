import type * as PIXI from 'pixi.js';
import type * as Player from '../entity/Player';
import type * as Unit from '../entity/Unit';
import type * as Pickup from '../entity/Pickup';
import type Underworld from '../Underworld';
import type PieClient from '@websocketpie/client';
import type { Vec2 } from '../jmath/Vec';
import type { View } from '../View';
import type { IHostApp } from '../network/networkUtil';
import type { Localizable } from '../localization';
import type { PromptArgs } from '../graphics/Jprompt';
import { Faction, JEmitter, Mod } from './commonTypes';
import { ICard } from '../cards';
import keyMapping from '../graphics/ui/keyMapping';

declare global {
  var SPELLMASONS_PACKAGE_VERSION: string;
  var underworld: Underworld;
  // Allows manually overriding the underworld seed via the JS console
  var seedOverride: string | undefined;
  // true if this instance is the headless server with no visuals or audio, just the game logic
  var headless: boolean;
  // Returns true if client is playing singleplayer OR if hostapp
  var isHost: (pie: PieClient | IHostApp) => boolean;


  // The following are undefined in the headless server
  // var pixi: undefined;
  // var latencyPanel: undefined;
  // var runPredictionsPanel: undefined;
  // var player: undefined;
  // var connect_to_wsPie_server: undefined;
  // var joinRoom: undefined;
  // var setupPixiPromise: undefined;
  // var pixiPromiseResolver: undefined;
  // var exitCurrentGame: undefined;
  // var closeMenu: undefined;
  // var setMenu: undefined;
  // var updateInGameMenuStatus: undefined;
  // var skipTutorial: undefined;
  // var save: undefined;
  // var load: undefined;
  // var getAllSaveFiles: undefined;
  // var clientId: undefined;
  // var animatingSpells: undefined;
  // var view: undefined;
  // var showDebug: undefined;
  // var walkPathGraphics: undefined;
  // var debugGraphics: undefined;
  // var devDebugGraphics: undefined;
  // var radiusGraphics: undefined;
  // var thinkingPlayerGraphics: undefined;
  // var unitOverlayGraphics: undefined;
  // var planningViewGraphics: undefined;
  // var debugCave: undefined;
  // var privacyPolicyAndEULAConsent: undefined;
  // var playMusic: undefined;
  // var changeVolume: undefined;
  // var changeVolumeMusic: undefined;
  // var changeVolumeGame: undefined;
  // var volume: undefined;
  // var volumeMusic: undefined;
  // var volumeGame: undefined;
  // var startSingleplayer: undefined;
  // var startMultiplayer: undefined;
  // var playerWalkingPromise: undefined;
  // var cookieConsentPopup: undefined;
  // var zoomTarget: any;
  // var enemyEncountered: undefined;
  // var superMe: undefined;
  // var resMarkers: undefined;
  // var castThisTurn: undefined;
  // var monitorFPS: undefined;
  // var MMBDown: undefined;
  // var setMMBDown: undefined;
  // var RMBDown: undefined;
  // var setRMBDown: undefined;
  // var notifiedOutOfStamina: undefined;
  // var map: any;
  // var devRemoveAllEnemies: undefined;
  // var playNextSong: undefined;
  // var playSFX: undefined;
  // var playSFXKey: undefined;
  // var sfx: undefined;
  var pixi: typeof PIXI | undefined;
  var latencyPanel: undefined | Stats.Panel;
  var runPredictionsPanel: undefined | Stats.Panel;
  // A reference to the player instance of the client playing on this instance
  var player: Player.IPlayer | undefined;
  var connect_to_wsPie_server: undefined | ((wsUri?: string) => Promise<void>);
  var joinRoom: undefined | ((_room_info: any, isHosting: boolean) => (undefined | Promise<unknown>));
  var setupPixiPromise: undefined | Promise<void>;
  var pixiPromiseResolver: undefined | (() => void);
  // Svelte menu handles
  var exitCurrentGame: undefined | (() => void);
  var closeMenu: undefined | (() => void);
  // Sets which route of the menu is available; note, the view must also
  // be set to Menu in order to SEE the menu
  // Set in golem-menu repo
  var setMenu: undefined | ((route: string) => void);
  // Set in golem-menu repo, returns the current menu route
  var getMenuRoute: undefined | (() => string);
  // Used to tell the menu if a game is ongoing or not
  var updateInGameMenuStatus: undefined | (() => void);
  // The menu will call this if the user chooses to skip the tutorial
  var skipTutorial: undefined | (() => Promise<void>);
  var isTutorialComplete: undefined | (() => boolean);

  var save: undefined | ((title: string, forceOverwrite?: boolean) => Promise<string>);
  var deleteSave: undefined | ((title: string) => Promise<void>);
  var load: undefined | ((title: string) => void);
  var getAllSaveFiles: undefined | (() => string[]);
  // Current client's id
  var clientId: undefined | string;
  var animatingSpells: undefined | boolean;
  var view: undefined | View;
  // Set to true in developer console to see debug information
  var showDebug: undefined | boolean;
  // Draw the "walk rope" to show a player how far they can travel.
  var walkPathGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing debug information, use window.showDebug = true
  // to show at runtime. Automatically draws pathing bounds, walls, etc
  var debugGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing debug information a-la-carte
  var devDebugGraphics: PIXI.Graphics | undefined;
  // Shows radiuses for spells
  var radiusGraphics: PIXI.Graphics | undefined;
  // Graphics to show what other players are thinking
  var thinkingPlayerGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing unit health and mana bars
  var unitOverlayGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing spell effects such as bolt
  var projectileGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing unit attack radius and such
  var selectedUnitGraphics: PIXI.Graphics | undefined;
  // Graphics for drawing the spell effects during the dry run phase
  var predictionGraphicsGreen: PIXI.Graphics | undefined;
  var predictionGraphicsRed: PIXI.Graphics | undefined;
  var predictionGraphicsWhite: PIXI.Graphics | undefined;
  var predictionGraphicsBlue: PIXI.Graphics | undefined;
  // Graphics for rendering above board and walls but beneath units and doodads,
  // see containerPlanningView for exact render order.
  var planningViewGraphics: PIXI.Graphics | undefined;
  // Graphics for debugging the cave
  var debugCave: PIXI.Graphics | undefined;
  var privacyPolicyAndEULAConsent: undefined | boolean;
  var acceptPrivacyPolicyAndEULA: undefined | (() => void);
  var configPlayer: undefined | (({ color, name }: { color?: number, name?: string, lobbyReady?: boolean }) => void);
  var playMusic: undefined | (() => void);
  var changeVolume: undefined | ((volume: number, saveSetting: boolean) => void);
  var changeVolumeMusic: undefined | ((volume: number, saveSetting: boolean) => void);
  var changeVolumeGame: undefined | ((volume: number, saveSetting: boolean) => void);
  var setOption: undefined | ((key: string, value: any) => void);
  var playMusicIfNotAlreadyPlaying: undefined | (() => void);
  var volume: undefined | number;
  var volumeMusic: undefined | number;
  var volumeGame: undefined | number;
  // connectToSingleplayer connects pieclient in solomode, it is called when loading a game
  // or from startSingleplayer
  var connectToSingleplayer: undefined | (() => Promise<void>);
  var startSingleplayer: undefined | ((numberOfHotseatPlayers: number) => Promise<void>);
  var startMultiplayer: undefined | ((wsPieUrl: string) => Promise<void>);
  // Used to ensure that the current client's turn doesn't end while they are still walking
  // If they invoke endMyTurn() while they are walking, it will wait until they are done
  // walking to end their turn.  If they are not walking, it will end immediately.
  // This property will always be a promise, since it is set immediately below as a resolved
  // promise.  This is so that the promise is always resolved UNLESS the player is currently
  // walking.
  var playerWalkingPromise: undefined | Promise<void>;
  // makes a pop up prompting the user to accept cookies
  var cookieConsentPopup: undefined | ((forcePopup: boolean) => void);
  // A zoom value that the camera zoom will lerp to
  var zoomTarget: undefined | number;
  // A list of enemy ids that have been encountered by this client
  // Used to introduce new enemies
  var enemyEncountered: undefined | string[];
  // A array for the codex of spells that have been seen
  var spellsDiscovered: undefined | string[];
  // Make me superhuman (used for dev)
  var superMe: undefined | ((underworld: Underworld, player?: Player.IPlayer) => void);
  // set to true once superMe is used
  var isSuperMe: undefined | boolean;
  // Shows icon for units that will be successfully resurrected
  var resMarkers: undefined | Vec2[];
  // True if client player has casted this turn;
  // Used to prompt before ending turn without taking any action
  var castThisTurn: undefined | boolean;
  // Turns on fps monitoring
  var monitorFPS: undefined | (() => void);
  // Middle Mouse Button Down
  // Note: do NOT set directly, use setMMBDown instead
  var MMBDown: undefined | boolean;
  // Used to set MMBDown so it will affect CSS too
  var setMMBDown: undefined | ((isDown: boolean) => void);
  // Right Mouse Button Down
  // Note: do NOT set directly, use setRMBDown instead
  var RMBDown: undefined | boolean;
  // Used to set Right mouse button down
  var setRMBDown: undefined | ((isDown: boolean, underworld: Underworld) => void);
  var notifiedOutOfStamina: undefined | boolean;
  // devAutoPickUpgrades: auto pick upgrades
  var devAutoPickUpgrades: undefined | boolean;
  // Set to true if the build is run as a desktop app through electron
  var isElectron: undefined | boolean;
  // Allows toggling off hud and access to the admin menu
  var adminMode: undefined | boolean;
  var devKillAll: undefined | (() => void);
  var devRemoveAllEnemies: undefined | (() => void);
  // Move audio functions into global so they can be injected IF audio is supported
  var playNextSong: undefined | (() => Promise<void> | undefined);
  var playSFX: ((path?: string) => void | undefined);
  var playSFXKey: ((key: string) => void | undefined);
  var testAllSFXKey: ((key: string) => void | undefined);
  var sfx: { [key: string]: string[] } | undefined;
  // Returns pie.isConnected()
  var isConnected: undefined | (() => boolean);
  // Disconnects pie from server
  var pieDisconnect: undefined | (() => Promise<void>);
  var setDifficulty: undefined | ((gameMode: 'normal' | 'hard' | 'impossible') => void);
  var pieLeaveRoom: undefined | (() => void);
  var pieInhabitPlayer: undefined | ((asPlayerClientId: string) => void);
  // the currently selected unit, useful as a devTool, click on a unit and they will be available in the console
  var selectedUnit: Unit.IUnit | undefined;
  var selectedPickup: Pickup.IPickup | undefined;
  // used for hiding the HUD for recording purposes
  var isHUDHidden: boolean | undefined;
  // Used for UI to determine if which element is currently
  // being hovered by the mouse
  var hoverTarget: HTMLElement | undefined | null;
  // Used in dev to prompt tutorial popup
  var menuExplain: (key: string) => void;
  var explainKeys: string[];
  // List of players to display in the lobby
  var lobbyPlayerList: { name: string, clientId: string, clientConnected: boolean, status: string, color: string, ready: string }[];
  var i18n: (key: Localizable) => string;
  var setLanguage: (langCode: string, doStore: boolean) => void;
  var refreshMenu: undefined | (() => void);
  var refreshSummonCardDescriptions: undefined | ((underworld: Underworld) => void);
  var getSupportedLanguages: () => { language: string, code: string }[];
  var getChosenLanguageCode: () => string;
  // Tutorial
  var doUpdateTutorialChecklist: boolean;
  var resetTutorial: () => void;

  var usingTestRunner: boolean;
  var fullyExitGame: () => void;
  // Mapping of game controls
  var controlMap: typeof keyMapping;
  // Returns a standardized keycode for mouse buttons
  // to make input reassignment easier
  var mouseButtonToKeyCode: (button: number) => string;
  // Save control scheme
  var persistControls: () => void;

  // Expose to global so that menu can "resume run"
  // The string that prefixes the localStorage save files
  var savePrefix: string;
  // The name of the quicksave file
  var quicksaveKey: string;

  // Expose storage functions so golems-menu can access them:
  var storageSet: (key: string, value: string) => void;
  var storageGet: (key: string) => string | null;
  // If this program is running via electron, electron will set
  // diskStorage as a global so that the code in this repo can
  // save files to disk instead of to local storage
  var diskStorage: undefined | {
    set: (key, value) => void;
    remove: (key) => void;
    getDiskStorage: () => Promise<{ [key: string]: string }>;
  }
  // Exposed to global so that golems-menu can access it
  var STORAGE_ID_UI_ZOOM: undefined | string;
  var electronSettings: undefined | {
    setFullscreen: (value: boolean) => void;
    setUIZoom: (value: number) => void;
  }
  var steamworks: undefined | {
    shiftTab: () => void;
    achievements: (value: number) => void;
  }
  // A target that controls what the cinematic camera is moving to
  var cinematicCameraTarget: Vec2 | undefined;
  var cinematicCameraEnabled: boolean;
  var setCinematicCameraEnabled: undefined | ((enabled: boolean, saveSetting: boolean) => void);
  // It should only be defined when there is a cinematic to skip
  var skipCinematic: undefined | (() => void);
  // For the frontend to get the update status when electron updates the app
  var update: undefined | {
    onUpdateCounter: (callback: (_sender: any, updateState: ({ complete: boolean, error: string, progress: number })) => void) => void;
  }
  var Jprompt: (prompt: PromptArgs) => Promise<boolean>;
  var JtextPrompt: (prompt: PromptArgs) => Promise<string>;
  // Updates the server connection state in the menu
  var syncConnectedWithPieState: () => void;
  var currentPredictionId: number | undefined;
  var isDemo: boolean;
  var testPerks: () => void | undefined;
  // emitters in a list to allow for clean up
  // if cleanAfterTurn is false it will clean after level
  var emitters: undefined | JEmitter[];
  // Help prevents accidental spawn choice when choosing upgrade or perk.
  // Everything relating to timeLastChoseUpgrade should happen on the client side
  // NOT after the network message but before the network message is sent
  var timeLastChoseUpgrade: number | undefined;
  // How many players are playing hotseat multiplayer on a single computer
  var numberOfHotseatPlayers: number;
  var hotseatPlayerConfig: {
    name: string,
    color: number,
    colorMagic: number
  }[] | undefined;
  var limitParticleEmitters: number | undefined;
  var UIEasyOnTheEyes: boolean | undefined;
  // This type is used in public/mods and defined in the globalTypes.d.ts in public/mods
  // since it is not used in this project it need not be typed here
  var SpellmasonsAPI: any;
  var SpellmasonsAPIFrontend: any | undefined;
  // Note: Initialized in the mods repo
  var mods: Mod[];
  // This will always be undefined on headless so as to not pollute multiple independent
  // games with the same mods.  Only underworld objects will have an activeMods list on headless
  var activeMods: string[] | undefined;
  var saveActiveMods: (activeMods: string[]) => void | undefined;
  // Makes ghost spawner Player stop moving after click so that clients get immediate feedback
  // that they've chosen a spawn point event while they have to wait to actually spawn because
  // another ally is casting
  // NOT FOR HEADLESS
  var awaitingSpawn: boolean | undefined;
  // Denotes if the user intended to disconnect from the server or if it was unexpected.
  // Unexpected disconnects should result in a change to View.Disconnected
  var intentionalDisconnect: boolean | undefined;
  // Defined in Golems-menu repo
  // Allows Golems repo to modify isInRoom store state of menu
  var setMenuIsInRoom: undefined | ((inRoom: boolean) => void);
  // Used to stop sending PLAYER_THINKING if player is hovering over non game space
  var currentHoverElement: undefined | HTMLElement | null;
  var adminPickMageType: boolean | undefined;
  // A list of upgrades to omit for the next reroll
  var rerollOmit: string[] | undefined;
  var saveASAP: undefined | string;
  var remoteLog: undefined | ((...args: any[]) => void);
  // Used for the menu and inventory
  var allCards: { [cardId: string]: ICard } | undefined;
  // For menu
  var pie: PieClient | undefined;
  var adminPowerBarIndex: number;
  var adminPowerBarSelection: string;
  var accessibilityOutline: {
    [Faction.ALLY]: {
      regular: { thickness: number, color: number },
      targeted: { thickness: number, color: number },
      outOfRange: { thickness: number, color: number }
    },
    [Faction.ENEMY]: {
      regular: { thickness: number, color: number },
      targeted: { thickness: number, color: number },
      outOfRange: { thickness: number, color: number }
    },
  } | undefined;
  // Feature flag set by spellmaons.com's server list for whether or not to send events to
  // the server hub
  var useEventLogger: boolean;
  var resetControlMap: undefined | (() => void);
  var setFontOverride: undefined | ((font: string) => void);
  var noGore: undefined | boolean;
  // True when a SPELL message is currently being executed
  var spellCasting: boolean | undefined;
  var _queueLastPredictionMousePos: Vec2 | undefined;
  var lastPredictionMousePos: Vec2 | undefined;
  var cheapestAvailableRune: number | undefined;
  // Set to a string to stop promises from being tracked
  // the string should be a label explaining why tracking has stopped
  // This is used in simpleEmitter for example, because I don't
  // have a reference to the promise created by the library but
  // I want it not to be tracked
  var test_ignorePromiseTracking: string | undefined;
  var showCastRangeForUpgrade: boolean | undefined;
  var alwaysDrawHealthBars: boolean | undefined;
  var currentChunk: number | undefined;
  var recordingShorts: boolean | undefined;
}
