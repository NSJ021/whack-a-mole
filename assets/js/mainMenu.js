import {Graphics} from 'pixi.js';

export function mainMenu(app){

    const rectangle = new Graphics();

    rectangle.rect(200, 200, 100, 150);

    rectangle.fill({
        color: 0xffea00,
        alpha: 0.9
    });

    app.stage.addChild(rectangle);

}

    



