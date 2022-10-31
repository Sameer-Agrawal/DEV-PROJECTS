import React , { useState } from 'react'

function Immutable() {

  const [ datum , mutateDatum ] = useState( { identifier : "Sameer Agrawal" } )

  // const mutateIdentifier = () => { datum.identifier = "Sameer Atul Agrawal" }  // Identifier transformed, provided fixation, component state

  const mutateIdentifier = () => { { mutateDatum( { identifier : "Sameer Atul Agrawal" } ) } };  // datum address identifier, alteration

  // If preceding state is indistinguishable, provided state alteration, UI will not fluctuate

  return (
    <React.Fragment>
      { console.log("UI mutation, provided component state mutation") }
      <h1>Hey, there { datum.identifier }</h1>

      <button onClick={ mutateIdentifier } >Mutate datum</button>
    </React.Fragment>
  )
}

export default Immutable;
