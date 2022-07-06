
const container = document.querySelector('#container');

//MAKE GIVEN NUMBER OF DIVS IN ROWS AND COLUMNS

function makeLotsDivs(x, y) {
    for (let i = 1; i <= (x*y); i++) {
        var newDivs = document.createElement('div');
        newDivs.className = "gridOfDivs";
        container.appendChild(newDivs);
            
    }
}
console.log(makeLotsDivs(16, 16));