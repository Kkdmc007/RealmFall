import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import PreloadScene from "./scenes/PreloadScene";
import ForestScene from "./scenes/ForestScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    backgroundColor: "#000000",

    scene: [
        BootScene,
        PreloadScene,
        ForestScene
    ],

    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 1200
            },
            debug: true
        }
    }
};

new Phaser.Game(config);