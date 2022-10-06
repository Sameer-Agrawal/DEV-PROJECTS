// Dynamic construction of cell

const cellContainer = document.querySelector(".cellContainer");  // Represent, cell container

function cellConstructor(){  // Faith --> Construct cell!

    // Dynamic creation, top left cell container

    const topLeftCellElement = document.createElement("div");  // Dynamic creation, div, representing top left cell
    topLeftCellElement.classList.add("top-left-cell");  // add() method, to addjoin class to class list
    cellContainer.appendChild(topLeftCellElement);  // Append top left cell, cell container


    // Dynamic creation, column identifier

    const columnIdentifierElement = document.createElement("div"); // Represent, column identifier
    columnIdentifierElement.classList.add("column-identifier-row", "rowElement");  // add() method, to addjoin class to class list
    for(let cell = 1 ; cell <= 26 ; cell++) {  // Dynamic creation, column identifier
        const cellElement = document.createElement("div");  // createElement() is used to dynamically create an HTML element node
        // console.log(cellElement);  // Represent, cell element
        cellElement.classList.add("column-identifier-element" , "cellElement");  // To add one or more CSS classes to the class list of an element, you use the add() method of the classList
        cellElement.innerText = String.fromCharCode(64+cell);  // Dynamic adjoin, identifier to column
        columnIdentifierElement.appendChild(cellElement);  // Append element node, to an element
    }
    cellContainer.appendChild(columnIdentifierElement);  // Append, column identifier element(row), to cell container
    // The innerText property sets or returns the text content of an element.
    // The String.fromCharCode() method converts Unicode values to characters.
    // Representation, of character in terms of value --> Unicode values
    // The String.fromCharCode() is a static method of the String object.

    // Dynamic creation, row identifier

    const rowIdentifierElement = document.createElement("div"); // Represent, row identifier
    rowIdentifierElement.classList.add("row-identifier-column");  // add() method, to addjoin class to class list
    for(let cell = 1 ; cell <= 100 ; cell++) {  // Dynamic creation, row identifier
        const cellElement = document.createElement("div");  // createElement() is used to dynamically create an HTML element node
        // console.log(cellElement);  // Represent, cell element
        cellElement.classList.add("row-identifier-element");  // To add one or more CSS classes to the class list of an element, you use the add() method of the classList
        cellElement.innerText = cell;  // Dynamic adjoin, identifier to row
        rowIdentifierElement.appendChild(cellElement);  // Append element node, to an element
    }
    cellContainer.appendChild(rowIdentifierElement);  // Append, row identifier element(column), to cell container


    // Dynamic creation, cell container

    // for(let row = 1 ; row <= 100 ; row++){  // Represent, 100 static row
    //     const rowElement = document.createElement("div");  // Represent, row element
    //     rowElement.classList.add("rowElement");  // add() method, to addjoin class to class list
    //     for(let column = 1 ; column <= 26 ; column++){  // Represent, 100 static column
    //         const cellElement = document.createElement("div");  // createElement() is used to dynamically create an HTML element node
    //         // console.log(cellElement);  // Represent, cell element
    //         cellElement.classList.add("cellElement");  // To add one or more CSS classes to the class list of an element, you use the add() method of the classList
    //         rowElement.appendChild(cellElement); // The appendChild() method appends a node (element) as the last child of an element.
    //     }
    //     cellContainer.appendChild(rowElement);  // Adjoin, row element to a cell container
    //     // console.log(rowElement.children.length);  // Represent, row element
    //     // The childElementCount property returns the number of child elements of an element.
    // }
}


cellConstructor();

