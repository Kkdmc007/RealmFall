import Phaser from "phaser";
import Player from "../entities/Player";

export default class ForestScene extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super("ForestScene");
    }

    create() {
        // Create the map
        const map = this.make.tilemap({ key: "forest" });

        // Add the tileset
        const tileset = map.addTilesetImage(
            "Platformer",
            "platformer"
        );

        if (!tileset) {
            console.error("Tileset not found!");
            return;
        }

        // Create layers
        const backgroundLayer = map.createLayer(
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

        const decorationLayer = map.createLayer(
            "Decorations",
            tileset,
            0,
            0
        );

        // Enable collisions on the Ground layer
        groundLayer.setCollisionByExclusion([-1]);

        // Create player
        this.player = new Player(this, 100, 300);

        // Player collides with the ground
        this.physics.add.collider(this.player, groundLayer);

        // Camera
        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.startFollow(this.player);

        // Zoom (optional)
        this.cameras.main.setZoom(2);
    }

    update() {
        this.player.update();
    }
}