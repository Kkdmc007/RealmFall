import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "player_idle");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.cursors = scene.input.keyboard!.createCursorKeys();

        this.setCollideWorldBounds(true);

        // Scale CraftPix character down
        this.setScale(0.4);

        // Adjust collision box
        this.setSize(28, 48);
        this.setOffset(50, 76);

        this.play("idle");
    }

    update() {

        const body = this.body as Phaser.Physics.Arcade.Body;
        const speed = 180;

        // Horizontal movement
        if (this.cursors.left.isDown) {

            this.setVelocityX(-speed);
            this.setFlipX(true);

            if (body.blocked.down) {
                this.play("walk", true);
            }

        }
        else if (this.cursors.right.isDown) {

            this.setVelocityX(speed);
            this.setFlipX(false);

            if (body.blocked.down) {
                this.play("walk", true);
            }

        }
        else {

            this.setVelocityX(0);

            if (body.blocked.down) {
                this.play("idle", true);
            }

        }

        // Jump
        if (this.cursors.up.isDown && body.blocked.down) {

            this.setVelocityY(-450);

        }

        // Jump animation
        if (!body.blocked.down) {

            this.play("jump", true);

        }

    }

}