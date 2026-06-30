import Phaser from "phaser";
import Player from "../entities/Player";
import PlayerAnimations from "../animations/PlayerAnimations";

export default class ForestScene extends Phaser.Scene {

    private player!: Player;

    constructor() {
        super("ForestScene");
    }

    create() {

        //----------------------------------
        // Create Player Animations
        //----------------------------------

        PlayerAnimations.create(this);

        //----------------------------------
        // Load Tilemap
        //----------------------------------

        const map = this.make.tilemap({
            key: "forest"
        });

        const tileset = map.addTilesetImage(
            "Platformer",
            "platformer"
        );

        if (!tileset) {
            console.error("Tileset not found!");
            return;
        }

        //----------------------------------
        // Layers
        //----------------------------------

        map.createLayer(
            "Background",
            tileset,
            0,
            0
        );

        const groundLayer = map.createLayer(
            "Ground",
            tileset,
            0,
            0
        );

        map.createLayer(
            "Decorations",
            tileset,
            0,
            0
        );

        if (!groundLayer) {
            console.error("Ground layer not found!");
            return;
        }

        groundLayer.setCollisionByExclusion([-1]);

        //----------------------------------
        // Player
        //----------------------------------

        this.player = new Player(
            this,
            200,
            100
        );

        this.physics.add.collider(
            this.player,
            groundLayer
        );

        //----------------------------------
        // Camera
        //----------------------------------

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.startFollow(this.player);

        this.cameras.main.setZoom(2);

    }

    update() {

        this.player.update();

    }

}