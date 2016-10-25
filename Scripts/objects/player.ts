module objects {
    export class Cursor extends createjs.Bitmap {

        constructor(pathString: string) {
            super(assets.getResult(pathString));
            

            // Set the registration point of cursor. This is used for transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

        }
        start(){}
        update(){}
    }
}