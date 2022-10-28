import React from 'react'

const style = { Dark : { backgroundColor : 'black' , color : 'white' } }

function HOC(Children) {
  return function Modifier( Argument ){  // Implement mutation's, provided component as an argument
    let design = {} 
    if(Argument.Dark == true ){  // Implement mutation's
        design = { ...style.Dark }
    }

    const prop = { ...Argument , style : design }  // Represent, modified prop, provided children component

    return <Children { ...prop }/>

  }
}

export default HOC;