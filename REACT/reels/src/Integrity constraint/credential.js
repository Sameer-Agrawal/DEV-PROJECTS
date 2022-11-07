
const credentialConstraint = ( credential ) => {  // Integrity constraint, credential
    if( credential.length < 10 ) return 'not lengthy, enough';

    let number = false;
    let alphabet = false;
    let symbol = false;
    let capital = false;

    for( let index = 0 ; index < credential.length ; index++ ) {  // Looping through, credential
        // The charAt() method returns the character at a specified index in a string
        // const character = credential.charAt( index ); 
        
        if( symbol && number && capital && alphabet ) return 'authentic';

        const code = credential.charCodeAt( index );  // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

        if( code >= 33 && code <= 47 || code >= 58 && code <= 64 || code >= 91 && code <= 96 || code >= 123 && code <= 126 ) { symbol = true }
        else if( code >= 48 && code <= 57 ) { number = true }
        else if( code >= 65 && code <= 90 ) { capital = true }
        else if( code >= 97 && code <= 122 ) { alphabet = true }
    }

    if( symbol && number && capital && alphabet ) return 'authentic';
    
    return 'include symbol , number , capital , alphabet'
}


export default credentialConstraint;