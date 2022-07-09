
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


//FUNCTION TO KILL ALL CHILD NODES AND DELETE GRID
const killChildNodes = (parent) => {
   while(parent.firstChild) {
       parent.removeChild(parent.lastChild);} 
}

//CHANGE RANGE SLIDER TEXT
slider.oninput = () => {
    output.innerHTML = this.value;
    output.innerHTML = slider.value;
 
}


//RANGE SLIDER EVENT
slider.addEventListener('mouseup', function() {
    killChildNodes(container);
    let newSliderValue = slider.value;
    console.log(makeLotsDivs(newSliderValue, newSliderValue))
    console.log(changeCSS());
});


//CHANGE CSS FOR GRID
function changeCSS() {
    switch (slider.value) {
        case '16':
            container.classList.add('.container24');
            break;
        case '24':
            container.classList.add('container32');
            break; 
        case '32':
            container.classList.add('container40');
            break;    

    }
}

console.log(makeLotsDivs(updateInput(), updateInput()));








