import Phaser from "phaser";
import Player from "../entities/Player";

export default class ForestScene extends Phaser.Scene {

    private player!: Player;
    private ground!: Phaser.Physics.Arcade.StaticGroup;

    constructor() {
        super("ForestScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#87CEEB");

        // Create ground texture
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(0x3d8c40);
        graphics.fillRect(0, 0, 64, 64);
        graphics.generateTexture("ground", 64, 64);
        graphics.destroy();

        this.ground = this.physics.add.staticGroup();

        for (let i = 0; i < 25; i++) {
            this.ground.create(i * 64, 688, "ground")
                .setOrigin(0, 0)
                .refreshBody();
        }

        this.player = new Player(this, 150, 500);

        this.physics.add.collider(this.player, this.ground);

        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    }

    update() {
        this.player.update();
    }
}