module scenes {
    export class How extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _goBack : objects.Button;
        private _howtoBG:createjs.Bitmap;
        private _player:objects.Cursor;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Howtoplay Scene Started");
           this._howtoBG=new createjs.Bitmap(assets.getResult("Howtoplay"));
           this.addChildAt(this._howtoBG,0);

           this._goBack=new objects.Button("Goback",config.Screen.CENTER_X,config.Screen.CENTER_Y+150);
           this._goBack.on("click",this._goBackClick,this);
           this.addChildAt(this._goBack,1);

           this._player=new objects.Cursor("Crosshair");
            this._player.scaleX=0.5;
            this._player.scaleY=0.5;
            this.addChildAt(this._player,2);

    


            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
           this._player.x = stage.mouseX;
            this._player.y = stage.mouseY;
        }

        private _goBackClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}