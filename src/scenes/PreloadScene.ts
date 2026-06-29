import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        // Assets will be loaded here later
    }

    create() {
        this.scene.start("ForestScene");
    }
}