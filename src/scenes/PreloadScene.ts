import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.tilemapTiledJSON(
    "forest",
    "assets/maps/forest_01.json"
);

this.load.image(
    "platformer",
    "assets/images/tiles/platformer.png"
);
    }

    create() {
        this.scene.start("ForestScene");
    }
}