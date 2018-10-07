var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 900 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/starfield.jpg');
    this.load.image('actor', 'assets/sprites/p1.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 10,
        scale: { start: 0.5, end: 0 },
        blendMode: 'ADD'
    });

    var actor = this.physics.add.image(400, 100, 'actor');

    actor.setVelocity(100, 200);
    actor.setBounce(1, 1);
    actor.setCollideWorldBounds(true);

    emitter.startFollow(actor);
}
