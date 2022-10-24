// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Catalogue.css';
import { movies } from '../Metadata/data.js'
import axios from 'axios';

// The onmouseenter event occurs when the mouse pointer is moved onto an element.
// This event is often used together with the onmouseleave event, which occurs when the mouse pointer is moved out of an element.
// Axios is a Javascript library used to make HTTP requests

class Catalogue extends Component {
    constructor() {
        super();
        this.state = { hover : "" , metadata : [] };  // Represent, state
    }

    mouseEnterHandler = (Identifier) => {  // State maintainance
        this.setState({ hover : Identifier });
    }

    mouseLeaveHandler = () => {  // State maintainance
        this.setState({ hover : "" });
    }

    async componentDidMount(){  // Invoked, followed with render method invocation
        const data = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=81242a2aa2066e052c78ec9ac1700c59");  // get() method is used to make an HTTP get request
        const metadata = data.data;  // metadata, represent JSON movie metadata
        // console.log(metadata);  // Represent, array of an object
        this.setState( { metadata : [...metadata.results] } );  
    }

    render() {  // With mutation component state, render method invoked
        const metadata = this.state.metadata;  // Represent, metadata
        return(  // JSX, expected
        <React.Fragment>
            <div className="catalogueContainer">
                <div className="headlineElement">TRENDING</div>
                <div className="catalogueElement">
                    { metadata.map( (dataElement) => {  // Data element, represent movie metadata
                        return(  // Represent, block

                            <div className="cardElement" onMouseLeave={ this.mouseLeaveHandler } onMouseEnter={() => { this.mouseEnterHandler(dataElement.id) }}>
                            <img src={`https://image.tmdb.org/t/p/original${dataElement.backdrop_path}`} className="cardImageElement" alt="Movie representation"/>
                            <div className="cardMetadataClosure">
                                <h5 className="cardTitleElement">{ dataElement.original_title }</h5>
                                { this.state.hover == dataElement.id && <div className="appendContainer"><button className="appendElement btn btn-success">Append to preferable</button></div> }
                            </div>
                            </div>

                        );
                    } ) }
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Catalogue;