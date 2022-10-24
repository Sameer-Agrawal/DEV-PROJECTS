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
        this.state = { hover : "" , metadata : [] , active : 1 , pagination : [1] };  // Represent, state
    }

    mouseEnterHandler = (Identifier) => {  // State maintainance
        this.setState({ hover : Identifier });
    }

    mouseLeaveHandler = () => {  // State maintainance
        this.setState({ hover : "" });
    }

    async componentDidMount(){  // Invoked, followed with render method invocation
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.active}`);  // get() method is used to make an HTTP get request
        const metadata = data.data;  // metadata, represent JSON movie metadata
        // console.log(metadata);  // Represent, array of an object
        this.setState( { metadata : [...metadata.results] } );  
    }

    metadataMaintainance = async () => {  // Metadata maintainance, provided active page mutation
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.active}`);  // get() method is used to make an HTTP get request
        const metadata = data.data;  // metadata, represent JSON movie metadata
        // console.log(metadata);  // Represent, array of an object
        this.setState( { metadata : [...metadata.results] } );  
    }

    nextHandler = async () => {  // Spread, catalogue provided active page
        await this.setState({ active : this.state.active + 1 , pagination : [...this.state.pagination, this.state.pagination.length + 1] });  // Active page, pagination maintainance
        this.metadataMaintainance();  // Metadata maintainance
        // Observation --> setState() is an asynchronous method
    }

    render() {  // With mutation component state, render method invoked
        const metadata = this.state.metadata;  // Represent, metadata
        return(  // JSX, expected
        <React.Fragment>
            <div className="headlineElement">TRENDING</div>
            <div className="catalogueContainer">
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
            <div className="paginationElement">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                                this.state.pagination.map( (present) => <li className="page-item"><a className="page-link" href="#">{present}</a></li> )
                            }
                            <li className="page-item" onClick={ this.nextHandler }><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
        </React.Fragment>
        )
    }
}

export default Catalogue;