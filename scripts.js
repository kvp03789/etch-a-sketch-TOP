
const container = document.querySelector('#container');
const childDivs = container.childNodes;


//MAKE GIVEN NUMBER OF DIVS IN ROWS AND COLUMNS

function makeLotsDivs(x, y) {
    for (let i = 1; i <= (x*y); i++) {
        var newDivs = document.createElement('div');
        newDivs.className = "gridOfDivs";
        container.appendChild(newDivs);
            
    }
}

//THIS FUNCTION IS CALLED FOR EVENT LISTENER

function turnWhite(event) {
event.target.classList.add("changeColor");
}

const childDivs2 = Array.from(childDivs);
for (let i = 0; i < childDivs2.length; i++) {
    childDivs2[i].addEventListener("mouseover", turnWhite);
}

//for(const element of childDivs) {
//    element.addEventListener("mouseover", turnWhite);
//}

console.log(makeLotsDivs(16, 16));



