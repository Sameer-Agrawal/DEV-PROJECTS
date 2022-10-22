// Carousel, represent banner, bootstrap

// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Banner.css';

class Banner extends Component {
    constructor() {
        super();
    }
    render() {
        return(  // JSX, expected
            <React.Fragment>
                <div className="bannerElement">
                    <img src="https://assets.reedpopcdn.com/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg/BROK/thumbnail/1600x900/quality/100/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg" className="bannerImageElement" alt="Image representation"/>
                        <div className="bannerMetadataClosure">
                            <h5 className="bannerTitleElement">Card title</h5>
                            <p className="bannerMetadataElement">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Banner;