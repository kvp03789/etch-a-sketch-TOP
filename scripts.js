
const container = document.querySelector('#container');
const childDivs = container.childNodes;

let slider = document.getElementById("slider");
let output = document.getElementById("value");
let sliderValue = slider.value;
const toggleSwitch = document.getElementById("toggle");



//MAKE GIVEN NUMBER OF DIVS IN ROWS AND COLUMNS
function makeLotsDivs(x, y) {
    for (let i = 1; i <= (x*y); i++) {
        var newDivs = document.createElement('div');
        newDivs.className = "gridOfDivs";
        if (!toggleSwitch.checked) {
        newDivs.addEventListener("mouseover", turnWhite)
        }
        else {newDivs.addEventListener("mouseover", turnRGB)};
        container.appendChild(newDivs);      
    }
}

//WHITE COLOR FOR EVENT LISTENER
function turnWhite(event) {
    event.target.classList.add("changeColor");
    }

//RGB FOR EVENT LISTENER
function turnRGB(event) {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rgbValue = `rgb(${r},${g},${b})`;
    event.target.style.backgroundColor = `${rgbValue}`;

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
    console.log(makeLotsDivs(newSliderValue, newSliderValue));
    container.style.cssText = `grid-template-columns: repeat(${newSliderValue}, 1fr);grid-template-rows: repeat(${newSliderValue}, 1fr);`;
});

//TOGGLE EVENT
toggleSwitch.addEventListener('change', function() {
    killChildNodes(container);
    let newSliderValue = slider.value;
    console.log(makeLotsDivs(newSliderValue, newSliderValue));
    container.style.cssText = `grid-template-columns: repeat(${newSliderValue}, 1fr);grid-template-rows: repeat(${newSliderValue}, 1fr);`;
});



// function changeCSS(sliderValue) {
//     let newestSliderValue = slider.value;
//         document.querySelector("#container").style.cssText = `grid-template-column(, 1fr)`;

// }



console.log(makeLotsDivs(updateInput(), updateInput()));








