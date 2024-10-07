
console.log('Hello');
 
(async () =>
    {
    // Create the application helper and add its render target to the page
    const app = new PIXI.Application();

      await app.init({ backgroundAlpha: 0.5, background: '#0000ff', width: 640, height: 360 });
      document.body.appendChild(app.view);

      // Create the sprite and add it to the stage
      await PIXI.Assets.load('./assets/images/sample.png');
      let sprite = PIXI.Sprite.from('./assets/images/sample.png');
      app.stage.addChild(sprite);
      app.renderer.backgroundColor = 0x0000ff;

      // Add a ticker callback to move the sprite back and forth
      let elapsed = 0.0;
      app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
      });

      sprite.eventMode = "static";
          // Shows hand cursor
    sprite.cursor = 'pointer';

    // Pointers normalize touch and mouse (good for mobile and desktop)
    sprite.on('pointerdown', onClick);

    // Alternatively, use the mouse & touch events:
    // sprite.on('click', onClick); // mouse-only
    // sprite.on('tap', onClick); // touch-only

    app.stage.addChild(sprite);

    function onClick()
    {
        app.stage.removeChild(sprite);
    }

})();

setup = async () => {

}

preload = async () => {
    
}