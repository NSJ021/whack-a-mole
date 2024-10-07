console.log('Hello');


// Create the application helper and add its render target to the page
const app = new PIXI.Application();


const setup = async () => {
  // Set the game size based on the window size.
  // These work well on Robs machine!
  // TODO: Nathan to test on his machine
  let gameWidth = window.innerWidth /2;
  let gameHeight = gameWidth / 1.5;
  // TODO: These need to be altered based on if the screen is a small mobile device. 

  // let gameWidth = 640;
  // let gameHeight = 360; 

  await app.init({
    backgroundAlpha: 0.5,
    background: '#0000ff',
    width: gameWidth,
    height: gameHeight
  });
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.style.width = `${gameWidth}px`;
  gameBoard.style.height = `${gameHeight}px`;
  gameBoard.appendChild(app.view);
}

const preload = async () => {
  // Create the sprite and add it to the stage
  await PIXI.Assets.load('./assets/images/sample.png');
  let sprite = PIXI.Sprite.from('./assets/images/sample.png');
  app.stage.addChild(sprite);
  app.renderer.backgroundColor = 0x0000ff;

  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });

  app.ticker.add(gameLoop);

  //Make sprite interactive
  sprite.eventMode = "static";

  // Shows hand cursor
  sprite.cursor = 'pointer';

  // Pointers normalize touch and mouse (good for mobile and desktop)
  sprite.on('pointerdown', onClick);

  // Alternatively, use the mouse & touch events:
  // sprite.on('click', onClick); // mouse-only
  // sprite.on('tap', onClick); // touch-only

  app.stage.addChild(sprite);

  function onClick() {
    app.stage.removeChild(sprite);
  }
}


const AddGameEventListeners = () => {

}

const gameLoop = () => {
  //console.log('test');
}




(async () => {
  await setup();
  await preload();

})();