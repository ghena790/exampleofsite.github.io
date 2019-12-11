import Game from './src/game.js';
import View from './src/view.js';



const game = new Game();
const view = new View(root , 250, 500, 20, 10);


window.game =game;
window.view = view;

document.addEventListener('keydown', event=>{
    switch (event.keyCode){
        case 37: //mve left
            game.movePieceLeft();
            view.renderPlayfield(game.getState());
            break;
        case 38: //up arrow
          game.rotatePiece();
          view.renderPlayfield(game.getState());
          break;
        case 39: //right
            game.movePieceRight();
            view.renderPlayfield(game.getState());
            break;
        case 40: // down
            game.movePieceDown();
            view.renderPlayfiled(game.getState());
            break;  
    }
})

 view.renderPlayfield(game.getState());
