/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _menuBG:createjs.Bitmap;
        private _player:objects.Cursor;
        private _gameTitle:objects.Label;
        private _howToPlay:objects.Button;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            this._menuBG=new createjs.Bitmap(assets.getResult("Space"));
            this._menuBG.scaleY=1.5;
            var blurFilter=new createjs.BlurFilter(5,5,1);
            this._menuBG.filters=[blurFilter];
            var bounds = blurFilter.getBounds();
            this._menuBG.cache(bounds.x,bounds.y,config.Screen.WIDTH,config.Screen.HEIGHT);
            this.addChildAt(this._menuBG,0);

            this._gameTitle=new objects.Label("Defense Earth","bold 37px Arial", "#FFFF00",250,200);
            this._gameTitle.lineHeight=39;
            this._gameTitle.lineWidth=86;
            this.addChildAt(this._gameTitle,1);

            this._player=new objects.Cursor("Crosshair");
            this._player.scaleX=0.5;
            this._player.scaleY=0.5;
            this.addChild(this._player);

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this._playBtn.scaleX=0.5;
            this._playBtn.scaleY=0.5;
            this._playBtn.on("click", this._playBtnClick, this);
            this.addChild(this._playBtn);
            

            this._howToPlay=new objects.Button("HowToPlay",config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this._howToPlay.scaleX=0.7;
            this._howToPlay.scaleY=0.7;
            this._howToPlay.on("click",this._howToPlayClick,this);
            this.addChild(this._howToPlay);
            
            


            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
            this._player.x = stage.mouseX;
            this._player.y = stage.mouseY;
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        }
        private _howToPlayClick(event: createjs.MouseEvent){
            console.log("PRINT");
            scene = config.Scene.HOW;
            changeScene();
        }
    }
}