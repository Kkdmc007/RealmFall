import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#87CEEB",

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1200 },
      debug: true
    }
  }
};

new Phaser.Game(config);
