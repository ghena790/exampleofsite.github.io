export default class View {
    static colors ={
        '1': 'red',
        '2': 'green',
        '3': 'yelow',
        '4': 'white',
        '5': 'blue',
        '6': 'grey',
        '7': 'orange'
    }
    
    constructor(element, width, height, rows, columns){
        this.element = element;
        this.width = width;
        this.height =height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;

        this.element.appendChild(this.canvas);
    }
    
    renderPlayfield(playfield) {
        /*ocistca holsta*/
        this.context.clearRect(0,0, this.width, this.height)

        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];
            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                if(block) {
                    this.renderblock(x * this.blockWidth, y * this.blockHeight , this.blockWidth, this.blockHeight, View.colors[block]);
                }
                
            }
            
        }
    }

    renderblock(x,y, width, height, color){
        this.context.fillstyle = color;
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;

        this.context.fillRect(x,y, width, height);
        this.context.strokeRect(x,y,  width, height);
    }
}