// Create a function using map that returns an array like object of all the arguments passed to it.

// A Map holds key-value pairs where the keys can be any datatype
// You can create a Map by passing an Array to the new Map() constructor

// const map = new Map();
// console.log(map);

// You can add elements to a Map with the set() method

const handler = ( argument ) => {  // Faith, return map, provided argument which inturn represent an array

    const map = new Map();  // Represent map

    if( Array.isArray( argument ) ){  // Argument, represents an array

        for( let index = 0 ; index < argument.length ; index++ ){  // Looping through argument
            map.set( index , argument[ index ] );
        }

    }else if( typeof( argument ) == "object" ){  // Argument represent an object
        // console.log( Object.keys( argument ) );  // Return an array, which represent, object key set

        // console.log("Object representation");
        
        const keyset = Object.keys( argument );  // Represent object keyset

        keyset.forEach( ( key ) => {
            map.set( key , argument[key] );
        } )

    }else{
        map.set( 0 , argument )
    }

    return map;

}

const argument = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
const map = handler( argument );
// // const map = handler( "Sameer Atul Agrawal" );

// const object = { "Name" : "Sameer Atul Agrawal" , "Skill" : "Web development" }
// const map = handler( object );

console.log( map );