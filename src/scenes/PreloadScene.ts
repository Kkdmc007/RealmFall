import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super("PreloadScene");
    }

    preload() {

        // -----------------------------
        // Tilemap
        // -----------------------------
        this.load.tilemapTiledJSON(
            "forest",
            "assets/maps/forest_01.json"
        );

        // -----------------------------
        // Tileset
        // -----------------------------
        this.load.image(
            "platformer",
            "assets/images/tiles/platformer.png"
        );

        // -----------------------------
        // Player Animations
        // -----------------------------
        this.load.spritesheet(
            "player_idle",
            "assets/player/Idle.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );

        this.load.spritesheet(
            "player_walk",
            "assets/player/Walk.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );

        this.load.spritesheet(
            "player_jump",
            "assets/player/Jump.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );

        this.load.spritesheet(
            "player_attack",
            "assets/player/Attack_1.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );

        this.load.spritesheet(
            "player_hurt",
            "assets/player/Hurt.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );

        this.load.spritesheet(
            "player_dead",
            "assets/player/Dead.png",
            {
                frameWidth: 128,
                frameHeight: 128
            }
        );
    }

    create() {

        this.scene.start("ForestScene");

    }

}