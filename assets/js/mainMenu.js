

  // TODO: Robertooo, none of this is responsive and breaks easily with screen-size changes

async function mainMenu(app) {

    // Main Menu Banner / Top Box --------------------------------------

    // Load the texture asynchronously
    const txtTopMenu = await PIXI.Assets.load('assets/images/paper_panel_681_x_150.png');

    // Create the sprite using the loaded texture
    const top_MenuBar = new PIXI.Sprite(txtTopMenu);

    // Set the anchor to the center
    top_MenuBar.anchor.set(0.5);

    // Set the position of the sprite
    top_MenuBar.x = app.view.width / 2; // Horizontally center the sprite
    top_MenuBar.y = 100; // Position it 100 pixels from the top

    // Add the sprite to the stage
    app.stage.addChild(top_MenuBar);


    // Main Menu Box, containing play buttons etc  --------------------------------------

    const txtMainMenu = await PIXI.Assets.load('assets/images/paper_panel_360_x_240.png');
    const main_MenuBar = new PIXI.Sprite(txtMainMenu);

    main_MenuBar.anchor.set(0.5);
    main_MenuBar.x = app.view.width / 2; // Horizontally center the sprite
    main_MenuBar.y = 325; // Position it 100 pixels from the top

    app.stage.addChild(main_MenuBar);

    // Play Button

    const txtPlayBtn = await PIXI.Assets.load('assets/images/play-unpressed.png');
    const txtPlayBtnPressed = await PIXI.Assets.load('assets/images/play-pressed.png');
    const mainMenu_PlayBtn = new PIXI.Sprite(txtPlayBtn);

    mainMenu_PlayBtn.anchor.set(0.5);
    mainMenu_PlayBtn.x = app.view.width / 2; // Horizontally center the sprite
    mainMenu_PlayBtn.y = 325; // Position it 100 pixels from the top
    mainMenu_PlayBtn.scale.set(0.2);  // Uniform scaling to 75%

    let isPlayBtn = true;

    


    mainMenu_PlayBtn.eventMode = "static";

    // Shows hand cursor
    mainMenu_PlayBtn.cursor = 'pointer';

    // Pointers normalize touch and mouse (good for mobile and desktop)
    mainMenu_PlayBtn.on('pointerdown', onButtonClick);
    mainMenu_PlayBtn.on('pointerup', onButtonUp); 

    app.stage.addChild(mainMenu_PlayBtn);

    function onButtonClick()
        {
            this.isdown = true;
            isPlayBtn = !isPlayBtn;
            // Dynamically swap the texture
            mainMenu_PlayBtn.texture = isPlayBtn ? txtPlayBtn : txtPlayBtnPressed;
        };

    function onButtonUp()
    {
        this.isdown = false;
        if (this.isOver)
        {
            this.texture = txtPlayBtnPressed;
        }
        else
        {
            this.texture = txtPlayBtn;
        }
    }
    


};

// loads mainMenu into global to allow game.js access
window.mainMenu = mainMenu;