var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var How = (function (_super) {
        __extends(How, _super);
        // Menu Class Contructor
        function How() {
            _super.call(this);
        }
        How.prototype.start = function () {
            console.log("Howtoplay Scene Started");
            this._howtoBG = new createjs.Bitmap(assets.getResult("Howtoplay"));
            this.addChildAt(this._howtoBG, 0);
            this._goBack = new objects.Button("Goback", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this._goBack.on("click", this._goBackClick, this);
            this.addChildAt(this._goBack, 1);
            this._player = new objects.Cursor("Crosshair");
            this._player.scaleX = 0.5;
            this._player.scaleY = 0.5;
            this.addChildAt(this._player, 2);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        How.prototype.update = function () {
            this._player.x = stage.mouseX;
            this._player.y = stage.mouseY;
        };
        How.prototype._goBackClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.MENU;
            changeScene();
        };
        return How;
    }(objects.Scene));
    scenes.How = How;
})(scenes || (scenes = {}));
//# sourceMappingURL=how.js.map