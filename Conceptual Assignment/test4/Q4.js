// Create a trap for the following object so private data cannot be accessed 

// Proxy --> Validate mutation, provided object

let userObj = {
    private:{
        dob:"12/3/4"
    },
    public:{
        name:"Anas"
    }
}

const handler = {  // handler, represent condition's to mutate user object

    // Define condition's to read user object

    get : function( target , property ){  // Condition provided, read user object
        if( property === "private" ){
            return "Access denied"
        }else{
            return target[property];  // Target represent, user object
        }
    }

}


const proxy = new Proxy( userObj , handler );  // handler, represent condition's to mutate user object
console.log(proxy.private);