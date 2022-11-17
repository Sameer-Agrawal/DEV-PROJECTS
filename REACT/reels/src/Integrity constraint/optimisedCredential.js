
// Handler method
const credentialConstraintClosure = () => {
    const map = new Map();  // Represent map

    const mapMutator = ( identifier ) => {
        const frequency = map.get(identifier);  // Represent, symbol frequency

        if( frequency == undefined ){  // Append symbol key, provided value 1
            map.set( identifier , 1 );
        }else{  // Mutation, symbol frequency
            map.set( identifier , frequency + 1 );
        }        
    }

    const credentialConstraint = ( credential ) => {
        if( credential.length < 10 ) return 'not lengthy, enough'; 
        
        for( let index = 0 ; index < credential.length ; index++ ) { 
    
            const code = credential.charCodeAt( index );  // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
    
            if( code >= 33 && code <= 47 || code >= 58 && code <= 64 || code >= 91 && code <= 96 || code >= 123 && code <= 126 ) { mapMutator("symbol") }
            else if( code >= 48 && code <= 57 ) { mapMutator("number") }
            else if( code >= 65 && code <= 90 ) { mapMutator("capital") }
            else if( code >= 97 && code <= 122 ) { mapMutator("alphabet") }
        }

        if( map.size != 4 ) return 'include symbol , number , capital , alphabet'
        else return 'authentic';
    }

    return credentialConstraint
}

// const credentialConstraint = credentialConstraintClosure();  // Represent, handler

const debounceClosure = () => { 
    let timer;
    const debounce = ( handler , argument , delay ) => {
        clearTimeout( timer );
        timer = setTimeout( () => { handler(argument) } , delay )
    }

    // const bundle = { debounce , outcome }

    return debounce;
}
// const debounce = debounceClosure();  // Return, debounce polyfill

const bundle = { credentialConstraintClosure , debounceClosure }

export default bundle;






