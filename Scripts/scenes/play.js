var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
        }
        Play.prototype.start = function () {
            console.log("Game Scene Started");
            this._gameBG = new createjs.Bitmap(assets.getResult("Space"));
            this._gameBG.scaleY = 1.5;
            var blurFilter = new createjs.BlurFilter(5, 5, 1);
            this._gameBG.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            this._gameBG.cache(bounds.x, bounds.y, config.Screen.WIDTH, config.Screen.HEIGHT);
            this.addChildAt(this._gameBG, 0);
            this._heart = new createjs.Bitmap(assets.getResult("Heart"));
            this._heart.regX = this._heart.getBounds().x * 0.5;
            this._heart.regY = this._heart.getBounds().y * 0.5;
            this._heart.x = 10;
            this._heart.y = 10;
            this.addChild(this._heart);
            this._heartNum = 3;
            this._heartText = new objects.Label("Heart: " + this._heartNum, "bold 20px Arial", "#FFFF00", 70, 10);
            //this._heartText.lineHeight=40;
            //this._heartText.lineWidth=86;
            this.addChild(this._heartText);
            this._spown();
            this._player = new objects.Cursor("Crosshair");
            this._player.scaleX = 0.5;
            this._player.scaleY = 0.5;
            this.addChildAt(this._player, 2);
            this._score = 0;
            this._scoreText = new objects.Label("Score: " +
                this._score, "bold 20px Arial", "#FFFF00", 330, 10);
            // this._scoreText.lineHeight=40;
            // this._scoreText.lineWidth=86;
            this.addChildAt(this._scoreText, 1);
            this._replay = new objects.Button("Replay", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._replay.on("click", this._onResume, this);
            this.addChild(this._replay);
            this._replay.visible = false;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._robber.y += 2; //ilgu
            if (this._robber.y > 550) {
                this._heartNum -= 1;
                if (this._heartNum > 0) {
                    currentScene.removeChild(this._robber);
                    this._spown();
                    this._heartText.text = "Heart: " + this._heartNum;
                }
                else {
                    this._heartText.text = "Heart: " + 0;
                    this._replay.visible = true;
                }
            } //ilgu
            if (this._robber.life == 0) {
                this._robber.update();
            }
            if (this._robber.currentFrame == 3 && this._robber.y <= 550) {
                currentScene.removeChild(this._robber);
                this._spown();
                this._score += 5;
                this._scoreText.text = "Score: " + this._score;
            }
            this._player.x = stage.mouseX;
            this._player.y = stage.mouseY;
        };
        Play.prototype._spown = function () {
            this._robber = new objects.Enemy("invader", Math.ceil(Math.random() * 5));
            this._robber.scaleX = 0.5;
            this._robber.scaleY = 0.5;
            var randPosition = new objects.Vector2(Math.random() * 300 + 50, 50);
            this._robber.setPosition(randPosition);
            this.addChildAt(this._robber, 1);
            this._robber.on("click", this._onEnemyClick, this);
        };
        Play.prototype._onEnemyClick = function (event) {
            this._robber.shot();
        };
        Play.prototype._onResume = function (event) {
            scene = config.Scene.GAME;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map