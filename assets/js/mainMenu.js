
function mainMenu(app){
    console.log("Test");
    const rectangle = new PIXI.Graphics();

    rectangle.rect(100, 100, 760, 150);

    rectangle.fill({
        color: 0xffea00,
        alpha: 0.9
    });

    app.stage.addChild(rectangle);


    const triangle = new PIXI.Graphics()
    .poly([
        75, 50,
        100, 300,
        160, 300
    ])
    .fill({
        color: 0x8f5ff2
    })
    .stroke({
        color: 0xf5fa2f
    });
    app.stage.addChild(triangle);


}

// loads mainMenu into global to allow game.js access
 window.mainMenu = mainMenu;
    



