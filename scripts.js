
const container = document.querySelector('#container');

//MAKE GIVEN NUMBER OF DIVS IN ROWS AND COLUMNS

function makeLotsDivs(x, y) {
    for (let i = 1; i <= y; i++) {
        var newDivsY = document.createElement('div');
        newDivsY.className = "verticalDivs";
        newDivsY.setAttribute("id", `verticalDiv${i}`);
        container.appendChild(newDivsY);
            for (let j = 0; j < x; j++) {
                var newDivsX = document.createElement('div');
                newDivsX.className = "horizontalDiv";
                newDivsY.setAttribute("id", `horizontalDiv${j}`)
                document.querySelector(`#verticalDiv${i}`).appendChild(newDivsX);              
        }
    }
}
console.log(makeLotsDivs(16, 16));