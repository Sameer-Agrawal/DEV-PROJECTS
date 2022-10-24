// Carousel, represent banner, bootstrap

// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Banner.css';
import { movies } from '../Metadata/data.js';  // Import provided, named export
import axios from 'axios';

class Banner extends Component {
    constructor() {
        super();
        this.state = { metadata : {} }
    }

    async componentDidMount(){  // Invoked, followed with render method invocation
        const data = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=81242a2aa2066e052c78ec9ac1700c59");  // get() method is used to make an HTTP get request
        const metadata = data.data;  // metadata, represent JSON movie metadata
        // console.log(metadata.results[0]);  // Represent, array of an object
        this.setState( { metadata : metadata.results[0] } );  // Metadata represent, object reference
    }

    render() {
        const metadata = this.state.metadata;  // Represent, metadata
        const source = `https://image.tmdb.org/t/p/original${metadata.backdrop_path}`
        return(  // JSX, expected
            <React.Fragment>
                <div className="bannerElement">
                    <img src={ source } className="bannerImageElement" alt="Image representation"/>
                        <div className="bannerMetadataClosure">
                            <h5 className="bannerTitleElement">{ metadata.original_title }</h5>
                            <p className="bannerMetadataElement">{ metadata.overview }</p>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Banner;