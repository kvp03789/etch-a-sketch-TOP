
const container = document.querySelector('#container');
const childDivs = container.childNodes;

let slider = document.getElementById("slider");
let output = document.getElementById("value");
let sliderValue = slider.value;


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

    
//FUNCTION TO UPDATE VALUE WITH RANGE INPUT
function updateInput() {
    let slider = document.getElementById("slider");  
    return slider.value;
}


slider.oninput = () => {
    output.innerHTML = this.value;
    output.innerHTML = slider.value;
 
}

slider.addEventListener('mouseup', function() {

    console.log(makeLotsDivs(updateInput(), updateInput()));
});

console.log(makeLotsDivs(updateInput(), updateInput()));








