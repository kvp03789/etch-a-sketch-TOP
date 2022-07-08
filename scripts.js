
const container = document.querySelector('#container');
const childDivs = container.childNodes;


//MAKE GIVEN NUMBER OF DIVS IN ROWS AND COLUMNS
function makeLotsDivs(x, y) {
    for (let i = 1; i <= (x*y); i++) {
        var newDivs = document.createElement('div');
        newDivs.className = "gridOfDivs";
        newDivs.addEventListener("mouseover", turnWhite)
        container.appendChild(newDivs);       
    }
}

//THIS FUNCTION IS CALLED FOR EVENT LISTENER
function turnWhite(event) {
    event.target.classList.add("changeColor");
    }


let slider = document.getElementById("slider");
let output = document.getElementById("value");

//output.innerHTML = slider.value;
//console.log(slider.value);
//slider.oninput = () => {
//    output.innerHTML = this.value;
//}

console.log(makeLotsDivs(16, 16));








