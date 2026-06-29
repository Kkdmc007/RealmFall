import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene, x: number, y: number) {

        // Create a blue rectangle texture if it doesn't exist
        if (!scene.textures.exists("player")) {
            const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x3366ff);
            graphics.fillRect(0, 0, 32, 48);
            graphics.generateTexture("player", 32, 48);
            graphics.destroy();
        }

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.cursors = scene.input.keyboard!.createCursorKeys();
    }

    update() {
        const speed = 250;

        if (this.cursors.left.isDown) {
            this.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(speed);
        } else {
            this.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.body.blocked.down) {
            this.setVelocityY(-500);
        }
    }
}