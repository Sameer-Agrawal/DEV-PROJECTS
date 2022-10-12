let precedingCellElement;


// Database, access

class database{  // Database class

    // Database constructor
    constructor(){  // Constructor function!
        this.database = [];  // Represent, local database instance
        // console.log(this);
        // Function declaration, this refer to an object instance, inturn which invoke the function/method
    }

    // Maintain database!
    databaseMaintainance(cellElement, database){  // Faith --> Maintain, database
        cellElement.addEventListener("blur", function(){  // Callback, trigger with a cell element, loosing focus!
            precedingCellElement = cellElement;
            // console.log(precedingCellElement);  // Faith --> Compute, cell datum, provided formula
            // console.log(cellElement);  
            const cellElementDatum = cellElement.innerText;  // Represent, cell element datum
            if(cellElementDatum == "") return;  // Represent, no mutation in cell datum 
            const {rowReservoirIndex, cellReservoirIndex} = workmate(cellElement);
            // The destructuring syntax, makes it possible to unveil properties from objects
            // console.log(typeof(rowIdentifier));  // typeof --> Return, data type, of provided argument!
            // In JavaScript parseInt() function (or a method) is used to convert the provided string parameter or variable declaration value, to an integer value.
            const rowReservoir = database[rowReservoirIndex];  // Represent, row reservoir, of row specified 
            const cellReservoir = rowReservoir[cellReservoirIndex];  // Represent, cell reservoir, provided cell reservoir index
            if(cellElementDatum == cellReservoir.cellDatum) return;  // Represent, no mutation in cell datum
            cellReservoir.cellDatum = cellElementDatum;  // Maintain, cell reservoir
            // Maintain, children datum, with mutation in parent datum
            maintainChildrenDatum(cellReservoir, database);  // Maintain, children datum, provided mutation in parent datum
            // console.log(cellReservoir);  // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string
        })
    }

    // Instante, database
    instantiateDatabase(database){  // Faith --> Database, incarnation!
        for(let row = 1 ; row <= 100 ; row++){  // Looping through, row
            const rowArray = [];  // suppress, a row
            for(let column = 1 ; column <= 26 ; column++){  // Looping through, column
                const cellIdentifier = String.fromCharCode(64+column) + row;  // Stringify, cell identifier
                // console.log(cellIdentifier);
                const datum = {cellIdentifier : cellIdentifier, cellDatum : "", formulaDatum : "", childrenDatum : [], parentDatum : []};  // Represent, cell identifier accompanying, cell datum 
                rowArray.push(datum);  // Append, cell datum, to a row
            }
            database.push(rowArray);  // Append, row datum, to database
        }
    }
}

// Abstract --> Classes are a template for creating objects. They encapsulate/enclose data with method's to work on that data

// A constructor is a special function that creates and initializes(Add attributes, methods) an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. 
// The purpose of a constructor is to create a new object and set values for any existing object properties

const databaseInstance = new database();  // Represent, database instance
databaseInstance.instantiateDatabase(databaseInstance.database);  // Instantiation, database
console.log(databaseInstance.database);


// Dynamic construction of cell

const cellContainer = document.querySelector(".cellContainer");  // Represent, cell container

function cellConstructor(database){  // Faith --> Construct cell!

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
    const mutableCellContainer = document.createElement("div");  // Represent, mutable cell container, which inturn bottle up cell element
    mutableCellContainer.classList.add("mutable-cell-container");  // add() method, to addjoin class to class list
    cellContainer.appendChild(mutableCellContainer);  // Adjoin, row element to a cell container
    for(let row = 1 ; row <= 100 ; row++){  // Represent, 100 static row
        const rowElement = document.createElement("div");  // Represent, row element
        rowElement.classList.add("rowElement");  // add() method, to addjoin class to class list
        for(let column = 1 ; column <= 26 ; column++){  // Represent, 100 static column
            const cellElement = document.createElement("div");  // createElement() is used to dynamically create an HTML element node
            // console.log(cellElement);  // Represent, cell element
            cellElement.classList.add("cellElement");  // To add one or more CSS classes to the class list of an element, you use the add() method of the classList
            cellElement.setAttribute("contentEditable", "true");  // The contenteditable attribute specifies whether the content of an element is editable or not
            // The setAttribute() method is used to set or add an attribute to a particular element and provides a value to it
            cellElement.setAttribute("columnIdentifier", String.fromCharCode(64+column));  // Represent, column identifier, cell element
            cellElement.setAttribute("rowIdentifier", row);  // Represent, row identifier, cell element
            cellIdentifier(cellElement, database.database); // Pin-point cell
            mutationCellDatum(cellElement, database.database);  // Maintainance, with mutation in cell datum, provided formula
            database.databaseMaintainance(cellElement, database.database);  // Maintain, database
            rowElement.appendChild(cellElement); // The appendChild() method appends a node (element) as the last child of an element.
        }
        mutableCellContainer.appendChild(rowElement);  // Adjoin, row element to a cell container
        // console.log(rowElement.children.length);  // Represent, row element
        // The childElementCount property returns the number of child elements of an element.
    }

}

cellConstructor(databaseInstance);  


// Maintain top, side panel through scrolling

const columnIdentifierElement = document.querySelector(".column-identifier-row");  // Represent, column identifier panel element
const rowIdentifierElement = document.querySelector(".row-identifier-column");  // Represent, row identifier panel element
const topLeftCellElement = document.querySelector(".top-left-cell");  // Represent, top left cell element

function maintainElement(){  // Faith --> Maintain top, side panel through scrolling
    cellContainer.addEventListener("scroll", function(event){  // Callback invoke, with scroll on cell container element
        console.log(event);  // Represent, scroll event
        const scrollTop = cellContainer.scrollTop;  // Event, maintain scrollTop attribute, which inturn represent, content scroll in px
        const scrollLeft = cellContainer.scrollLeft;  // Event, maintain scrollTop attribute, which inturn represent, content scroll in px 
        columnIdentifierElement.style.top = scrollTop + "px";  // With a scroll, column identifier element, maintainance with slide down
        topLeftCellElement.style.top = scrollTop + "px";  // With a scroll, top left cell element, maintainance with slide down
        topLeftCellElement.style.left = scrollLeft + "px";  // With a scroll, top left cell element, maintainance with slide left
        rowIdentifierElement.style.left = scrollLeft + "px";  // With a scroll, row identifier element, maintainance with slide left
    })
}

maintainElement();



function cellIdentifier(cellElement, database){  // Faith --> Pin-point cell
    const labelElement = document.querySelector(".labelElement");  // Represent, label element, which inturn unveil cell element identity
    const formulaElement = document.querySelector(".formulaElement");  // Represent, formula element
    cellElement.addEventListener('click', function(){  // Callback, invoke with click on cell element
        const rowIdentifier = cellElement.getAttribute("rowIdentifier");  // The getAttribute() method returns the value of an element's attribute
        const columnIdentifier = cellElement.getAttribute("columnIdentifier");  // Represent, column identifier, of a cell element clicked!
        const cellIdentifier = columnIdentifier + rowIdentifier;  // Represent, cell identity
        labelElement.innerText = cellIdentifier;  // Unveil cell element identity
        const cellReservoir = getCellReservoir(cellIdentifier, database);  // Return, cell reservoir, provided cell identifier
        formulaElement.innerText = cellReservoir.formulaDatum;  // Convey, cell element formula datum, if exist
    })
}


// Faith --> Return, column identifier, row identifier, row reservoir index provided row identifier, cell reservoir index provided column identifier
function workmate(cellElement){ 
    const columnIdentifier = cellElement.getAttribute("columnIdentifier");  // Represent, column identifier, cell element
    const rowIdentifier = parseInt(cellElement.getAttribute("rowIdentifier")); // Represent, row identifier, cell element
    // In JavaScript parseInt() function (or a method) is used to convert the provided string parameter or variable declaration value, to an integer value.
    const rowReservoirIndex = rowIdentifier-1;  // Represent, row reservoir index, of row specified 
    const cellReservoirIndex = columnIdentifier.charCodeAt(0) - 65;  // Represent, cell reservoir index, provided column identifier
    return {columnIdentifier, rowIdentifier, rowReservoirIndex, cellReservoirIndex};
}



// Faith --> Compute cell datum, provided formula
function computeCellDatum(database){  // Faith --> cell element is provided as an argument
    const formulaElement = document.querySelector(".formulaElement");  // Represent, formula element
    formulaElement.addEventListener("blur", function(event){
        const formula = formulaElement.innerText;  // Represent, formula
        // Check, formula disparate, formula datum
        if(formula == "") return;
        const {columnIdentifier, rowIdentifier, rowReservoirIndex, cellReservoirIndex} = workmate(precedingCellElement);  // Return, row reservoir index, cell reservoir index, provided cell element
        const rowReservoir = database[rowReservoirIndex];  // Represent, row reservoir, of row specified 
        const cellReservoir = rowReservoir[cellReservoirIndex];  // Represent, cell reservoir, provided cell reservoir index
        if(cellReservoir.formulaDatum == formula) return;  // Represent, no mutation in cell element formula 
        if(cellReservoir.formulaDatum != ""){  // Mutation, cell formula datum
            maintainParentDatum(cellReservoir, database);  // Maintainance, cell element's parent datum, parent's children datum, with mutation in cell element formula datum
        }
        const cellDatum = compute(formula, cellReservoir);  // Faith --> Return, computed cell datum, provided formula as an argument
        // Cell reservoir represent, preceding cell element / children
        // console.log(cellDatum);
        // console.log(decryptedFormulaArray);
        cellReservoir.cellDatum = cellDatum;  // Maintain, formula datum, cell datum
        cellReservoir.formulaDatum = formula;
        precedingCellElement.innerText = cellDatum;  // UI maintainance
        maintainChildrenDatum(cellReservoir, database);  // Maintain, children datum, with mutation in formula!
        // console.log(cellReservoir);
    })

    // Faith --> Return, computed cell datum, provided formula as a parameter
    function compute(formula, children){  // Cell reservoir represent, children
        let decryptedFormulaArray = decryptFormula(formula);  // Faith --> Return, decoded formula, as an array
        decryptedFormulaArray = decryptedFormulaArray.map(callbackFunction);  
        // Map is a high order function, which inturn return's a new array, and is used for transformation of provided array
        console.log(children);   
        // Faith --> Compute cell datum!
        let methodArgument = ""
        for(let index = 0 ; index < decryptedFormulaArray.length ; index++) {  // Looping through decrypted formula array
            methodArgument = methodArgument + decryptedFormulaArray[index];
        }

        const cellDatum = eval(methodArgument);  // Faith --> Return, cell datum, provided string argument

        return cellDatum;

        // Callback, function
        function callbackFunction(current){  // Current, represent, decrypt formula array element, in scope
            if(current[0] >= "A" && current[0] <= "Z"){  // Represent, valid cell identifier
                const columnIdentifier = current[0];  // Represent, column identifier, cell element
                const rowIdentifier = parseInt(current[1]); // Represent, row identifier, cell element
                const rowReservoirIndex = rowIdentifier-1;  // Represent, row reservoir index, of row specified 
                const rowReservoir = database[rowReservoirIndex];  // Represent, row reservoir, provided row reservoir index
                const cellReservoirIndex = columnIdentifier.charCodeAt(0) - 65;  // Represent, cell reservoir index, provided column identifier
                const cellReservoir = rowReservoir[cellReservoirIndex];  // Cell reservoir, represent parent
                if(children != undefined){
                    cellReservoir.childrenDatum.push(children.cellIdentifier);  // Maintain children datum, parent cell reservoir
                    children.parentDatum.push(current);  // Maintain, parent datum
                } 
                // console.log(cellReservoir);
                return cellReservoir.cellDatum;  // Append, cell datum, provided cell identifier
            }
            return current;
        }

        // Faith --> Return, decoded formula, as an array!
        function decryptFormula(formula){
            // The split() method splits a string into an array of substrings
            // The split() method returns the new array
            // The split() method does not change the original string
            // split() method, expect two parameter, namely separator and limit
            // Separator --> A string, use to split. If omitted, an array with the original string is returned
            // limit --> An integer that limits the number of splits(element in an array). substring after the limit are excluded
            const decryptedFormulaArray = formula.split(" ");  // Represent, decrypted formula, as an array
            return decryptedFormulaArray;
        }
    }

    return compute;
}



const compute = computeCellDatum(databaseInstance.database);


// Faith --> Maintain, children datum, with mutation in parent datum
function maintainChildrenDatum(cellReservoir, database){
    // console.log(cellReservoir);
    // Compute, children datum, provided mutation in children datum
    const childrenDatum = cellReservoir.childrenDatum;  // Represent, children datum
    // console.log(childrenDatum);
    for(let index = 0 ; index < childrenDatum.length ; index++){  // Looping through, children datum!
        const cellIdentifier = childrenDatum[index];  // Represent, children identifier
        const cellReservoir = getCellReservoir(cellIdentifier, database);  // Faith --> Return, cell reservoir, provided cell identifier
        const formulaDatum = cellReservoir.formulaDatum;  // Represent, children, formula datum
        const cellDatum = compute(formulaDatum);  // Represent, reform children cell datum, provided mutation in parent cell datum
        cellReservoir.cellDatum = cellDatum;  // Maintain children cell datum, database!
        console.log(cellReservoir);
        // The [attribute] selector is used to select elements with a specified attribute
        // input[name="Sex"][value="M"] --> Attribute selector --> Element, with multiple attribute specified
        const cellElement = document.querySelector(`div[columnIdentifier="${cellIdentifier[0]}"][rowIdentifier="${cellIdentifier[1]}"]`);  // Represent, children cell element
        cellElement.innerText = cellDatum;  // Maintain UI
        maintainChildrenDatum(cellReservoir, database);  // Faith --> Maintain, ancestor!
    }
}


// Faith --> Return, cell reservoir, provided cell identifier
function getCellReservoir(cellIdentifier, database) {
    const columnIdentifier = cellIdentifier[0];  // Represent, column identifier, cell element
    const rowIdentifier = parseInt(cellIdentifier[1]); // Represent, row identifier, cell element
    const rowReservoirIndex = rowIdentifier-1;  // Represent, row reservoir index, of row specified 
    const cellReservoirIndex = columnIdentifier.charCodeAt(0) - 65;  // Represent, cell reservoir index, provided column identifier
    const rowReservoir = database[rowReservoirIndex];  // Represent, row reservoir, of row specified 
    const cellReservoir = rowReservoir[cellReservoirIndex];  // Represent, cell reservoir, provided cell reservoir index
    return cellReservoir;
}


// Faith --> Maintainance, with mutation in cell datum, provided formula
function mutationCellDatum(cellElement, database){  // Maintainance, with mutation in cell datum, provided formula
    // The onkeydown event occurs when the user is pressing a key (on the keyboard)
    cellElement.addEventListener("keydown", callbackFunction);  // Callback trigger, with keydown

    
    function callbackFunction(event){
        const key = event.key;  // Represent, preceding key down
        const cellIdentifier = cellElement.getAttribute("columnIdentifier") + cellElement.getAttribute("rowIdentifier");  // Represent, cell identifier
        const cellReservoir = getCellReservoir(cellIdentifier, database);  // Return, cell reservoir, provided cell identifier
        const formulaDatum = cellReservoir.formulaDatum;  // Represent, formula datum, cell element
        if((formulaDatum != "") && (key == "Backspace")){  // Represent, mutation cell datum, provided formula
            const formulaElement = document.querySelector(".formulaElement");  // Represent, formula element
            formulaElement.innerText = "";  // Maintainance, UI, formula element
            cellElement.innerText = "";  // Maintainance, UI, cell element
            cellReservoir.formulaDatum = "";  // Maintain, formula datum
            cellReservoir.cellDatum = "";  // Maintain, cell datum
            maintainParentDatum(cellReservoir, database);  // Faith --> Removal, children cell identifier, parent's cell reservoir, children datum
            console.log(cellReservoir);
        }
    }
}


function maintainParentDatum(children, database){  // Faith --> Removal, children cell identifier, parent's cell reservoir, children datum
    const parentDatum = children.parentDatum;  // Represent, children's, parent datum
    for(let index = 0 ; index < parentDatum.length ; index++){  // Looping through, parent datum
        const parentIdentifier = parentDatum[index];  // Represent, parent identifier
        const parentReservoir = getCellReservoir(parentIdentifier, database);  // Represent, parent reservoir, provided parent identifier
        const childrenDatum = parentReservoir.childrenDatum; // Represent, children datum provided parent reservoir
        const refurbishChildrenDatum = childrenDatum.filter(filterCallbackFunction);  // Represent, refurbished children datum 
        console.log(refurbishChildrenDatum);
        parentReservoir.childrenDatum = refurbishChildrenDatum;  // Children datum, maintainance
        console.log(parentReservoir);
    }
    children.parentDatum = [];  // Maintainance, children's, parent datum

    function filterCallbackFunction(childrenIdentifier){
        return childrenIdentifier != children.cellIdentifier;  // Removal, children identifier, 
    }
}


// Dynamic, sheet construction!
function sheetConstruction(){
    const appendElement = document.querySelector(".appendElement");  // Represent, sheet append element 
    const catalogueElement = document.querySelector(".catalogueElement"); // Represent, sheet catalogue element
    let sheetIdentifier = 0;  // Represent, sheet identifier
    appendElement.addEventListener("click", function(){  // Callback trigger with click, on append element
        sheetIdentifier = sheetIdentifier + 1;  // Maintainance, sheet identifier

        // Maintainance active sheet, element
        const activeSheetElement = document.querySelector(".activeSheetElement");  // Represent, active sheet element
        activeSheetElement.classList.remove("activeSheetElement");  // Class removal, provided class list

        const sheetElement = document.createElement("div");  // Dynamic creation, div element
        sheetElement.classList.add("sheetElement");  // Append class, to HTML element class list
        sheetElement.classList.add("activeSheetElement");
        sheetElement.setAttribute("sheetIdentifier", sheetIdentifier);  // Represent, sheet identifier
        sheetElement.innerText = `Sheet ${sheetIdentifier + 1}`;  // The innerText property sets or returns the text content of an element.

        catalogueElement.appendChild(sheetElement);  // Append sheet element, to catalogue element
    })
}


sheetConstruction();




