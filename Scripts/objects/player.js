var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Cursor = (function (_super) {
        __extends(Cursor, _super);
        function Cursor(pathString) {
            _super.call(this, assets.getResult(pathString));
            // Set the registration point of cursor. This is used for transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        Cursor.prototype.start = function () { };
        Cursor.prototype.update = function () { };
        return Cursor;
    }(createjs.Bitmap));
    objects.Cursor = Cursor;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map