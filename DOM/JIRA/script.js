const addBtnElement = document.querySelector('.addTaskContainer') // Represent add action element
const floatingContainerElement = document.querySelector('.floatingContainer');
let flag = false; // Represent, visiblity of floating container. By default false
let slipFilter = 'blackFilter'; // By default slip filter, value
let deleteFlag = false; // Represent, deletion capability. By default false
let manipulationFlag = false; // Represent, chore manipulation capability, default false
const slipFilterPanelArray = ['blackFilter', 'lightPinkFilter', 'lightBlueFilter', 'lightGreenFilter'];

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

// Slip Element Removal
const deleteSlipElement = document.querySelector('.deleteTaskContainer');  // Represent delete icon, which inturn provide, delete slip functionality
deleteSlipElement.addEventListener('click', function(){  // Trigger with click on delete icon element
    if(deleteFlag == false){ // Request deletion capability
        deleteSlipElement.style.color = 'red'; // Update delete icon element color to red, indicating, deletion possible
    }else{  // Turnoff deletion capablity
        deleteSlipElement.style.color = 'black'; // Update delete icon element color to black, indicating, deletion not possible
    }
    deleteFlag = !deleteFlag  // Maintain delete flag
})


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
                             <div class="chore" contentEditable="false">${textAreaElementValue}</div>
                             <div class="choreManipulation"><i class="fa fa-lock"></i></div>`
    
    // By default, chore manipulation prohibited

    // Deletion Functionality
    slipElement.addEventListener('click', function(){  // Trigger with click on slip element 
        if(deleteFlag){  // Deletion possible, only if delete flag is true
            deleteSlip(slipElement);  // Abstract --> On click, slip deletion
        }
    })

    // Chore manipulation 
    const choreElement = slipElement.querySelector('.chore')  // Represent, chore
    const choreManipulationElement = slipElement.querySelector('.choreManipulation i');  // Dynamic lock-unlock entity, chore manipulation
    choreManipulationElement.addEventListener('click', function(){  // Trigger, with click on chore manipulation element
        if(manipulationFlag == false){ // Request, chore manipulation
            choreManipulationElement.classList = "fa fa-unlock"  // Classlist updation, representing, chore manipulation possible
            choreElement.setAttribute('contentEditable','true');  // Enable chore manipulation, div element
        }else{  // Abort, chore manipulation
            choreManipulationElement.classList = "fa fa-lock"  // Classlist updation, representing, chore manipulation not possible
            choreElement.setAttribute('contentEditable','false');  // Disable chore manipulation, div element
        }
        manipulationFlag = !manipulationFlag  // Maintain manipulation flag 
    })


    bodyContainer.appendChild(slipElement); // Append slip element into body container element
    const slipFilterPanelElement = slipElement.querySelector('.filter'); // Represent slip filter panel, in slip element

    // Slip filter panel updation
    slipFilterPanelElement.addEventListener('click', function(){ // Trigger with click on slip filter panel, provided deleteFlag is false
        if(deleteFlag == false){
            slipFilterPanelUpdation(slipFilterPanelElement);  // Abstract --> Provide slip filter panel updation 
        }
    })
}

function slipFilterPanelUpdation(slipFilterPanelElement){
    const currentSlipFilter = slipFilterPanelElement.classList[1]; // Represent, slip filter panel element's, class clause, which inturn represent color
    console.log(currentSlipFilter);
    for(let idx = 0 ; idx < slipFilterPanelArray.length ; idx++){
        const slipFilterPanel = slipFilterPanelArray[idx];
        if(slipFilterPanel == currentSlipFilter){
            slipFilterPanelElement.classList.remove(currentSlipFilter); // Removal of current slip filter class, from slip filter panel, to ease filter panel updation
            const toBeSlipFilterPanel = slipFilterPanelArray[(idx+1) % slipFilterPanelArray.length]; // Represent to be slip filter panel element's, class clause, which inturn represent color
            slipFilterPanelElement.classList.add(toBeSlipFilterPanel); // Update, slip filter panel
        }
    }
}

function deleteSlip(slipElement){
    bodyContainer.removeChild(slipElement); // Removal of slip element from body container node list
}