// Carousel, represent banner, bootstrap

// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Banner.css';
import { movies } from '../Metadata/data.js';  // Import provided, named export

class Banner extends Component {
    constructor() {
        super();
    }
    render() {
        const metadata = movies.results[0];  // Represent, metadata
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