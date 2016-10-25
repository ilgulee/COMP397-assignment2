/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._menuBG = new createjs.Bitmap(assets.getResult("Space"));
            this._menuBG.scaleY = 1.5;
            var blurFilter = new createjs.BlurFilter(5, 5, 1);
            this._menuBG.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            this._menuBG.cache(bounds.x, bounds.y, config.Screen.WIDTH, config.Screen.HEIGHT);
            this.addChildAt(this._menuBG, 0);
            this._gameTitle = new objects.Label("Defense Earth", "bold 37px Arial", "#FFFF00", 250, 200);
            this._gameTitle.lineHeight = 39;
            this._gameTitle.lineWidth = 86;
            this.addChildAt(this._gameTitle, 1);
            this._player = new objects.Cursor("Crosshair");
            this._player.scaleX = 0.5;
            this._player.scaleY = 0.5;
            this.addChild(this._player);
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this._playBtn.scaleX = 0.5;
            this._playBtn.scaleY = 0.5;
            this._playBtn.on("click", this._playBtnClick, this);
            this.addChild(this._playBtn);
            this._howToPlay = new objects.Button("HowToPlay", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this._howToPlay.scaleX = 0.7;
            this._howToPlay.scaleY = 0.7;
            this._howToPlay.on("click", this._howToPlayClick, this);
            this.addChild(this._howToPlay);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
            this._player.x = stage.mouseX;
            this._player.y = stage.mouseY;
        };
        Menu.prototype._playBtnClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        };
        Menu.prototype._howToPlayClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.HOW;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map