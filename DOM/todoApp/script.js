let inputElement = document.querySelector('#taskInput'); // Represent input document element 
const ulElement = document.querySelector('.parentContainer'); // Represent unordered list
inputElement.addEventListener('keydown', function(event){ // Callback trigger's, with a change in input document element
    console.log(inputElement.value); // Every time a key is triggered/down, callback fires up
    // Every time callback is triggered, input document element holds up different value
    console.log(event.key); // Event object, has key attribute, which represents last key triggered
    if(event.key == 'Enter'){
        const task = inputElement.value; // Successfully fetched, the task value
        inputElement.value = ''; // Reset value of input element to empty string
        const liTaskElement = document.createElement('li'); // Dynamic creation of list item
        // liTaskElement.innerText = task; // liTaskElement represent document element, which inturn holds up innerText attribute, used to get or set the inner text of document element
        liTaskElement.innerHTML = `<div class="taskElement">
                                        <div class = "taskValue">${task}</div>
                                        <div class="deleteBtn">
                                            <i class="fa fa-trash"></i>
                                        </div>
                                    </div>`
        handleElementRemoval(liTaskElement); // Handle task element removal, which inturns add event listner to task element, providing delete functionality
        ulElement.appendChild(liTaskElement); // Append node element at the end of a node list, provided parent element
    }
})

function handleElementRemoval(liTaskElement){
    const deleteIconElement = liTaskElement.querySelector('.deleteBtn i'); // Represent, Delete Icon Element for every task element
    deleteIconElement.addEventListener('click', function(){ // Callback is invoked, with a click event on delete icon
        ulElement.removeChild(liTaskElement); // Removal of respective liTaskElement, from unordered list
    })
}