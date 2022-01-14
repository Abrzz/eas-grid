

let grid = document.querySelector(".grid-container")
let slider = document.querySelector(".grid-size")

let gridSize = slider.value;

let cleanGridBtn = document.querySelector(".clean-grid")


let calculateGridHeight = (gridSize) => {
    return ((700/gridSize)*100)/700;
}
let height = calculateGridHeight(gridSize);




gridSquaresEvent = () => {

    let gridSquares = document.querySelectorAll(".grid-square")
    gridSquares.forEach( (e)  => e.addEventListener('mouseover', (e) => {

        e.target.classList.add('painted');  
}
    ))
}

createGrid = (gridSize) => {
    
    for (let row = 0;row<gridSize;row++) {

        let gridRow = document.createElement("div");

        gridRow.style.width = '100%';
        gridRow.classList.add("grid-row");

        grid.appendChild(gridRow);

        for (let column = 0;column<gridSize;column++) {

            let gridSquare = document.createElement("div")

            gridSquare.style.height = `${height}%`;
           
            gridSquare.classList.add('grid-square');
            
            gridRow.appendChild(gridSquare);
            
        }

    }
    gridSquaresEvent();
}


createGrid(gridSize);


cleanGrid = () => {
    for (let row = 0;row<gridSize;row++) {

        gridRow = document.querySelector('.grid-row')
        grid.removeChild(gridRow)
        
    }
}

  



cleanGridBtn.addEventListener('click', () => {
    cleanGrid();
    createGrid(gridSize);})



let sliderContainer = document.querySelector('.slider-container')
let currentGridSize = document.createElement("p");
currentGridSize.classList.add('current-grid-size');

gridSizeText = () => {
currentGridSize.textContent = `${slider.value}x${slider.value}`
sliderContainer.appendChild(currentGridSize);
}

gridSizeText();

slider.oninput = () => {

    cleanGrid();
    gridSize = slider.value;
    console.log(`GRID SIZE: ${gridSize}`)
    height = calculateGridHeight(gridSize)
    createGrid(gridSize)
    gridSquaresEvent();
    gridSizeText();
}
  

