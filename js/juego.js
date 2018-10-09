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
        create: create,
        update: update
    }
};

var cursors;
var actor;

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

  cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.setBounds(0, 0, 800*2, 600*2);
  this.physics.world.setBounds(0, 0, 800*2, 600*2);
  this.add.tileSprite(0, 0, 3400*2, 1000*2, 'sky');


    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 10,
        scale: { start: 0.5, end: 0 },
        blendMode: 'ADD'
    });

    actor = this.physics.add.image(400, 100, 'actor');

    actor.setVelocity(100, 200);
    actor.setBounce(1, 1);
    actor.setCollideWorldBounds(true);

    this.cameras.main.startFollow(actor);

    emitter.startFollow(actor);
}

function update ()
{

    if (cursors.left.isDown)
    {
        actor.setVelocityX(-100);
    }
    else if (cursors.right.isDown)
    {
        actor.setVelocityX(100);
    }

    if (cursors.up.isDown)
    {
        actor.setVelocityY(-300);
    }
    else if (cursors.down.isDown)
    {
        actor.setVelocityY(300);
    }
}
