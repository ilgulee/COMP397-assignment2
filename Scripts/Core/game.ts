/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;
var enemyAtlas:createjs.SpriteSheet;
var animation:createjs.Sprite;
// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "PlayBtn", src: "../../Assets/images/start.png"},
    {id:"HowToPlay",src:"../../Assets/images/how.png"},
    {id: "Space", src:"../../Assets/images/space.png"},
    {id: "Invader",src:"../../Assets/images/invader.png"},
    {id: "Heart",src:"../../Assets/images/heart.png"},
    {id: "Invader",src:"../../Assets/images/invader.png"},
    {id: "Invasion",src:"../../Assets/images/invasion.png"},
    {id: "Replay",src:"../../Assets/images/replay.png"},
    {id: "Goback",src:"../../Assets/images/back.png"},
    {id: "Howtoplay",src:"../../Assets/images/howtoplay.png"},
    {id: "BankSafe",src:"../../Assets/images/bank1.png"},
    {id: "Crosshair",src:"../../Assets/images/crosshair.png"},
    {id: "Robber",src:"../../Assets/images/robber.png"},
    {id: "Poof",src:"../../Assets/images/poof.png"},
    {id: "EnemyRobber",src:"../../Assets/images/enemy.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    let atlasData = {

        "images": [
            assets.getResult("Invasion")
        ],
       "frames": [
    [1, 1, 69, 71, 0, 0, 0],
    [72, 1, 97, 69, 0, -1, -1],
    [1, 74, 129, 111, 0, 0, 0],
    [1, 187, 157, 154, 0, 0, 0],
    [1, 343, 166, 154, 0, 0, 0],
    [1, 499, 172, 163, 0, 0, 0],
    [1, 664, 176, 175, 0, 0, 0],
    [1, 841, 180, 180, 0, 0, 0]
],
      "animations": {
    "exp1": { "frames": [0] },
    "invader": { "frames": [1] },
    "exp2": { "frames": [2] },
    "exp7": { "frames": [3] },
    "exp3": { "frames": [4] },
    "exp6": { "frames": [5] },
    "exp5": { "frames": [6] },
    "exp4": { "frames": [7] },
    "explosion": {
                "frames": [0,2,4,7,6,5,3], "speed": 0.1, next:false
            }
        },
       "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:589a6aa70b058f6b30d887487c05fa75:93bdd7a3108d6d77e0ea953bde61567f:b3119ab32ae83ffff15c70ca2801b717$",
        "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
]
    }
    enemyAtlas=new createjs.SpriteSheet(atlasData);
   
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting SHOOTER scene");
            break;
        case config.Scene.HOW:
            stage.removeAllChildren();
            currentScene=new scenes.How();
            console.log("Starting HowtoPlay scene");
            break;
        
    }
    
}