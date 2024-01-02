const gridContainer = document.getElementById('grid-container');
let drawingPenType = 'black';

const blackPenButton = document.getElementById('pen-black');
const whitePenButton = document.getElementById('pen-white');
const rainbowPenButton = document.getElementById('pen-rainbow');

const grid16Button = document.getElementById('grid-16');
const grid32Button = document.getElementById('grid-32');
const grid64Button = document.getElementById('grid-64');

function resetButtonTheme(button) {
    button.style.backgroundColor = 'white';
    button.style.borderColor = 'black';
    button.style.color = 'black';
}

function usingButtonTheme(button) {
    button.style.backgroundColor = 'black';
    button.style.borderColor = 'white';
    button.style.color = 'white';
}

function changePenType(newType) {
    resetButtonTheme(blackPenButton);
    resetButtonTheme(whitePenButton);
    resetButtonTheme(rainbowPenButton);
    drawingPenType = newType;

    let button = document.getElementById(`pen-${newType}`)
    usingButtonTheme(button);
}

function drawOnGrid(cell) {
    if (drawingPenType === 'black') {
        cell.style.backgroundColor = 'black';
    } else if (drawingPenType === 'white') {
        cell.style.backgroundColor = 'white';
    } else if (drawingPenType === 'rainbow') {
        cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
}

function generateGrid(widthCells, heightCells) {
    resetButtonTheme(grid16Button);
    resetButtonTheme(grid32Button);
    resetButtonTheme(grid64Button);

    let gridSizeButton = document.getElementById(`grid-${widthCells}`);
    usingButtonTheme(gridSizeButton);

    Array.from(gridContainer.children).forEach((cell) => {
        cell.remove();
    });

    for (let i = 0; i < widthCells * heightCells; i++) {
        let cell = document.createElement('div')
        cell.style.width = `${1/widthCells*100}%`;
        cell.style.height = `${1/heightCells*100}%`;
        cell.style.backgroundColor = 'white';
        cell.style.display = 'inline';
        cell.style.borderRadius = '1px';
        
        cell.addEventListener('mouseover', () => {
            drawOnGrid(cell);
        });

        gridContainer.appendChild(cell);
    }
}

function clearGrid() {
    Array.from(gridContainer.children).forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

generateGrid(16,16);
changePenType('black');