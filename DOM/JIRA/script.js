const addBtnElement = document.querySelector('.addTaskContainer') // Represent add action element
const floatingContainerElement = document.querySelector('.floatingContainer');
let flag = false; // Represent, visiblity of floating container. By default false
let slipFilter = 'blackFilter'; // By default slip filter, value
addBtnElement.addEventListener('click', function(event) { // Trigger callback, with a click on add button
    if(flag == false){ // Request for floating container visiblity
        floatingContainerElement.style.display = 'flex';
    }else{ // Request, to hide floating container
        floatingContainerElement.style.display = 'none';
    }
    flag = !flag; // Maintainance of flag
})

// Dynamic creation of tickets

const textContainerElement = floatingContainerElement.querySelector('.textAreaElement');  // Represent text area element in floating container element
const bodyContainer = document.querySelector('.bodyContainer');  // Represent parent body container
textContainerElement.addEventListener('keydown', function(event){  // Trigger with keydown
    console.log(textContainerElement.value);  // text container element, holds up value attribute, representing string value of text area element
    console.log(event.key); // key attribute represent, last key triggered
    const key = event.key;
    if(key == 'Enter'){
        const textAreaElementValue = textContainerElement.value;
        textContainerElement.value = ''; // Reset text area container's, value to default
        generateSlip(textAreaElementValue, slipFilter);  // Faith --> slip generation, provided 'textAreaElementValue' value
        floatingContainerElement.style.display = 'none'; // Request, to hide floating container
        flag = !flag; // Maintainance of flag
    }
})

// Slip filter functionality

const floatingFilterElementArray = floatingContainerElement.querySelectorAll('.floatingFilterElement'); // Represent filter element's from floating filter container
for(let idx = 0 ; idx < floatingFilterElementArray.length ; idx++){  
    const floatingFilterElement = floatingFilterElementArray[idx]; // Represent each floating filter element
    floatingFilterElement.addEventListener('click', function(){ // Update slip filter
        // console.log(floatingFilterElement.classList); // Attribute, represent an array, holding up document element class
        // console.log(floatingFilterElement.classList[0]); // 0th index represent filter element, class which inturn represent its filter color
        slipFilter = floatingFilterElement.classList[0]; // Maintain slip filter
        maintainActiveClause(floatingFilterElement);  // Faith --> Maintain active clause
    })
}

// Method

function maintainActiveClause(elementClassListToBeUpdated){
    for(let idx = 0 ; idx < floatingFilterElementArray.length ; idx++){
        const floatingFilterElement = floatingFilterElementArray[idx]; // Represent each floating filter element
        console.log(floatingFilterElement.classList); // Attribute, represent an array, holding up document element class
        floatingFilterElement.classList.remove('active'); // Class removal, document element. If provided class is absent, nothing happens!
    }
    // elementClassListToBeUpdated --> Represent, triggered filter element
    elementClassListToBeUpdated.classList.add('active'); 
}

// classList.remove('class name') --> Removes one or more tokens from the list, provided argument(class name)

function generateSlip(textAreaElementValue, slipFilterColor){ 
    const slipElement = document.createElement('div'); // Dynamic creation of div element
    slipElement.classList.add('slipElement'); // Append 'slipElement' class to slip element
    slipElement.innerHTML = `<div class="filter ${slipFilterColor}"></div>
                             <div class="credentials">#S014</div>
                             <div class="chore">${textAreaElementValue}</div>`
    bodyContainer.appendChild(slipElement); // Append slip element into body container element
}