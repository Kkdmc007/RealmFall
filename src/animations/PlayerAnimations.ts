import Phaser from "phaser";

export default class PlayerAnimations {

    static create(scene: Phaser.Scene) {

        // Prevent duplicate animations
        if (scene.anims.exists("idle")) {
            return;
        }

        //----------------------------------------
        // Idle
        //----------------------------------------

        scene.anims.create({

            key: "idle",

            frames: scene.anims.generateFrameNumbers(
                "player_idle",
                {
                    start: 0,
                    end: 5
                }
            ),

            frameRate: 8,

            repeat: -1

        });

        //----------------------------------------
        // Walk
        //----------------------------------------

        scene.anims.create({

            key: "walk",

            frames: scene.anims.generateFrameNumbers(
                "player_walk",
                {
                    start: 0,
                    end: 8
                }
            ),

            frameRate: 10,

            repeat: -1

        });

        //----------------------------------------
        // Jump
        //----------------------------------------

        scene.anims.create({

            key: "jump",

            frames: scene.anims.generateFrameNumbers(
                "player_jump",
                {
                    start: 0,
                    end: 8
                }
            ),

            frameRate: 14,

            repeat: 0

        });

        //----------------------------------------
        // Attack
        //----------------------------------------

        scene.anims.create({

            key: "attack",

            frames: scene.anims.generateFrameNumbers(
                "player_attack",
                {
                    start: 0,
                    end: 3
                }
            ),

            frameRate: 14,

            repeat: 0

        });

        //----------------------------------------
        // Hurt
        //----------------------------------------

        scene.anims.create({

            key: "hurt",

            frames: scene.anims.generateFrameNumbers(
                "player_hurt",
                {
                    start: 0,
                    end: 2
                }
            ),

            frameRate: 8,

            repeat: 0

        });

        //----------------------------------------
        // Death
        //----------------------------------------

        scene.anims.create({

            key: "dead",

            frames: scene.anims.generateFrameNumbers(
                "player_dead",
                {
                    start: 0,
                    end: 5
                }
            ),

            frameRate: 6,

            repeat: 0

        });

    }

}