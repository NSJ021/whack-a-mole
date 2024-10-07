// function mainMenu(app){
// console.log("Test");


async function mainMenu(app) {
    // Load the texture asynchronously
    const textureTopMenu = await PIXI.Assets.load('assets/images/paper_panel_681_x_150.png');

    // Create the sprite using the loaded texture
    const topMenuBar = new PIXI.Sprite(textureTopMenu);

    // Set the anchor to the center
    topMenuBar.anchor.set(0.5);

    // Set the position of the sprite
    topMenuBar.x = app.view.width / 2; // Horizontally center the sprite
    topMenuBar.y = 100; // Position it 100 pixels from the top


    // Add the sprite to the stage
    app.stage.addChild(topMenuBar);
}



// }

// loads mainMenu into global to allow game.js access
window.mainMenu = mainMenu;