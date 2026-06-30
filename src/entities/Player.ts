import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private attackKey: Phaser.Input.Keyboard.Key;

    private isAttacking = false;

    constructor(scene: Phaser.Scene, x: number, y: number) {

        super(scene, x, y, "player_idle");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.cursors = scene.input.keyboard!.createCursorKeys();

        this.attackKey = scene.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.J
        );

        this.setCollideWorldBounds(true);

        // Scale the CraftPix sprite
        this.setScale(0.4);

        // Collision box
        this.setSize(28, 48);
        this.setOffset(50, 76);

        this.play("idle");
    }

    update() {

        const body = this.body as Phaser.Physics.Arcade.Body;
        const speed = 180;

        //------------------------------------
        // Attack
        //------------------------------------

        if (
            Phaser.Input.Keyboard.JustDown(this.attackKey) &&
            !this.isAttacking &&
            body.blocked.down
        ) {

            this.attack();

            return;

        }

        if (this.isAttacking) {

            this.setVelocityX(0);

            return;

        }

        //------------------------------------
        // Movement
        //------------------------------------

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

        //------------------------------------
        // Jump
        //------------------------------------

        if (
            this.cursors.up.isDown &&
            body.blocked.down
        ) {

            this.setVelocityY(-450);

        }

        if (!body.blocked.down) {

            this.play("jump", true);

        }

    }

    //------------------------------------
    // Attack
    //------------------------------------

    private attack() {

        this.isAttacking = true;

        this.setVelocityX(0);

        this.play("attack", true);

        this.once(
            Phaser.Animations.Events.ANIMATION_COMPLETE,
            () => {

                this.isAttacking = false;

                this.play("idle", true);

            }
        );

    }

}