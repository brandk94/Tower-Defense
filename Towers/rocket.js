class Rocket extends Tower {
  static cost = 75;
  constructor(gameEngine, x, y, level) {
    super(gameEngine, x, y, level);

    // spritesheet and animation
    this.spritesheet = ASSET_MANAGER.getAsset(
      "./sprites/towers/rocket/Level1/1_sheet.png"
    );
    this.animations = [];
    this.frameWidth = 23;
    this.frameHeight = 37;
    var i;
    for (i = 0; i < 8; i++) {
      this.animations.push(
        new Animator(
          this.spritesheet,
          this.frameWidth * i,
          0,
          this.frameWidth,
          this.frameHeight,
          1,
          1,
          0,
          false,
          true
        )
      );
    }

    //stats
    this.HP = 10;
    this.maxHP = this.HP;
    this.fireRate = 1.15; // Fire rate: Moderately Slow
    this.shootingRadius = 70 * PARAMS.SCALE; // Range: Long
    this.damage = 15; // Damage: Strong
    this.facing = 6; // facing left default
    this.depreciated = 0.8;
    this.radius = 10 * PARAMS.SCALE;

    // other
    this.xOffset = (this.frameWidth * PARAMS.SCALE) / 2 + 2;
    this.yOffset = this.frameHeight * PARAMS.SCALE - 15;

    this.buy(Rocket.cost);
  }
}
