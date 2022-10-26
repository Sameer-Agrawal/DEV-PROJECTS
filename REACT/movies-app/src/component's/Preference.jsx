// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Preference.css';
import { movies } from '../Metadata/data.js'

class Preference extends Component {
    constructor() {
        super();
        this.state = { category : ["Absolute category"] }
    }

    // categoryMaintainance() {  // Category maintainance, provided metadata
    //     const genreIdentifier = { 28 : "Action" , 12 : "Adventure" , 16 : "Animation" , 35 : "Comedy" , 80 : "Crime" , 99 : "Documentary" , 18 : "Drama" , 10751 : "Family" , 14 : "Fantasy" , 36 : "History" , 27 : "Horror" , 10402 : "Music" , 9648 : "Mystery" , 10749 : "Romance" , 878 : "Science Fiction" , 10770 : "TV Movie" , 53 : "Thriller" , 10752 : "War" , 37 : "Western" }  // Represent genre, provided genre identifier

    //     const categoryArray = this.state.category;  // Represent, metadata category

    //     this.state.metadata.map( (dataElement) => {  // Looping through, metadata

    //         const genre = genreIdentifier[dataElement.genre_ids[0]];

    //         if(!(categoryArray.includes(genre))){  // The includes() method returns true if an array contains a specified value.
    //             categoryArray.push(genre);  // Category maintainance
    //         }  
        
    //     });


    //     this.setState( { category : [...categoryArray] } );  // Maintainance, component state
    // }

    render() {
        const metadata = movies.results;  // Represent, metadata
        const genreIdentifier = { 28 : "Action" , 12 : "Adventure" , 16 : "Animation" , 35 : "Comedy" , 80 : "Crime" , 99 : "Documentary" , 18 : "Drama" , 10751 : "Family" , 14 : "Fantasy" , 36 : "History" , 27 : "Horror" , 10402 : "Music" , 9648 : "Mystery" , 10749 : "Romance" , 878 : "Science Fiction" , 10770 : "TV Movie" , 53 : "Thriller" , 10752 : "War" , 37 : "Western" }  // Represent genre, provided genre identifier

        const categoryArray = this.state.category;  // Represent, metadata category

        metadata.map( (dataElement) => {  // Looping through, metadata

            const genre = genreIdentifier[dataElement.genre_ids[0]];

            if(!(this.state.category.includes(genre))){  // The includes() method returns true if an array contains a specified value.
                categoryArray.push(genre);  // Category maintainance
            }  
        
        });

        this.setState( { category : [...categoryArray] } );  // Maintainance, component state

        return(  // JSX, expected
            <React.Fragment>
                <div className="preferenceElement">

                    <div className="col-3 filterElement">
                        <ul className="list-group">

                            {
                                categoryArray.map( (category) => {  // Looping through, category
                                    return(
                                        <li className="row list-group-item">{ category }</li>
                                    );
                                } )
                            }
                            
                        </ul>
                    </div>

                    <div className="rightClosure">
                        <div className="col-9 assistElement">
                            <div className="row assistClosure">  
                            {/* row keyword represent, a row */}
                                <input type="text" className="form-control col searchElement" placeholder="Search"/>
                                <input type="number" className="form-control col unknown" />
                            </div>                  
                        </div>

                        <table className="col-9 directoryElement">
                            <thead>
                                <tr>
                                    {/* The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows. */}
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    metadata.map( (dataElement) => {  // Looping through, metadata

                                        return(  // Expected, row
                                            <tr>
                                                <td className="titleClosure"><img src={`https://image.tmdb.org/t/p/original${dataElement.backdrop_path}`} alt="Image representation" class="dataElementImage"/><h6 className="dataElementTitle">{dataElement.title}</h6></td>
                                                <td>{ genreIdentifier[dataElement.genre_ids[0]] }</td>
                                                <td>{ dataElement.popularity }</td> 
                                                <td>{ dataElement.vote_average }</td>
                                                <td><button type="button" className="btn btn-danger">Danger</button></td>
                                            </tr>
                                        );

                                    } )

                                }     

                            </tbody>
                        </table>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Preference;