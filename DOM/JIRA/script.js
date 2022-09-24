const addBtnElement = document.querySelector('.addTaskContainer') // Represent add action element
const floatingContainerElement = document.querySelector('.floatingContainer');
let flag = false; // Represent, visiblity of floating container. By default false
addBtnElement.addEventListener('click', function(event) { // Trigger callback, with a click on add button
    if(flag == false){ // Request for floating container visiblity
        floatingContainerElement.style.display = 'flex';
    }else{ // Request, to hide floating container
        floatingContainerElement.style.display = 'none';
    }
    flag = !flag; // Maintainance of flag
})