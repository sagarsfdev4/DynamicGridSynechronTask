import { LightningElement } from 'lwc';

export default class GridTaskSynechron extends LightningElement {
    //default Size given for grid,  if gridSize not provided froom from the user it will by default set to 3
    gridSize = 3;
    gridNumbers = [];

    //this is the getter which has the style to decorate the grid with user given input.
    get gridStyle() {
        return this.gridSize
        ? `display: grid; grid-template-columns: repeat(${this.gridSize}, 50px); gap: 5px;` 
        : '';
    }

    //when component loads first time it will call the method to shoe grid with default value.
    connectedCallback() {
        this.generateGrid(); // Generate grid on component load
    }

    //this method is to read the value from user and call the function generateGrid with chnaged grid size.
    handleGridSizeChange(event) {
        const size = Number(event.target.value);
        if (size > 0) {
            this.gridSize = size;
            this.generateGrid();
        } else {
            this.gridSize = null;
            this.gridNumbers = [];
        }
    }

    //this the method where the main logic has been implemented to generate the grid.
    generateGrid() {
        this.gridNumbers = [];
        let num = 1;
        let tempGrid = [];

        for (let row = 0; row < this.gridSize; row++) {
            let rowNumbers = [];
            for (let col = 0; col < this.gridSize; col++) {
                rowNumbers.push({
                    id: `cell-${num}`,
                    value: num,
                    colorStyle: `background-color: ${num % 2 === 0 ? 'blue' : 'yellow'}; 
                                color: black; 
                                border: 2px solid black; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                width: 50px; 
                                height: 50px;`
                });
                num++;
            }
            tempGrid.unshift(rowNumbers);
        }
        this.gridNumbers = tempGrid.flat(); 
    }
}