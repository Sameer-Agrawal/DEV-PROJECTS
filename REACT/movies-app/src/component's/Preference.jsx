// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Preference.css';
// import { movies } from '../Metadata/data.js'

class Preference extends Component {
    constructor() {
        super();
        this.state = { category : ["Absolute category"] , metadata : [] , active : "Absolute category" , filtrate : [] }
    }

    filterPreference = (category) => {  // Faith --> Filter preference, provided category
        let filtrate;  // Represent, filtered metadata, provided category
        const genreIdentifier = { 28 : "Action" , 12 : "Adventure" , 16 : "Animation" , 35 : "Comedy" , 80 : "Crime" , 99 : "Documentary" , 18 : "Drama" , 10751 : "Family" , 14 : "Fantasy" , 36 : "History" , 27 : "Horror" , 10402 : "Music" , 9648 : "Mystery" , 10749 : "Romance" , 878 : "Science Fiction" , 10770 : "TV Movie" , 53 : "Thriller" , 10752 : "War" , 37 : "Western" }  // Represent genre, provided genre identifier

        if(category == "Absolute category"){  
            filtrate = [...this.state.metadata];
        }else{
            filtrate = this.state.metadata.filter( (dataElement) => {
                const genre = genreIdentifier[dataElement.genre_ids[0]];
                return genre == category;  // Filtrate represent, 
            } )
        }

        this.setState({ active : category , filtrate : [ ...filtrate ] });  // Active category, filtrate maintainance
    }

    categoryMaintainance = async (metadata) => {  // Category maintainance, provided metadata
        const genreIdentifier = { 28 : "Action" , 12 : "Adventure" , 16 : "Animation" , 35 : "Comedy" , 80 : "Crime" , 99 : "Documentary" , 18 : "Drama" , 10751 : "Family" , 14 : "Fantasy" , 36 : "History" , 27 : "Horror" , 10402 : "Music" , 9648 : "Mystery" , 10749 : "Romance" , 878 : "Science Fiction" , 10770 : "TV Movie" , 53 : "Thriller" , 10752 : "War" , 37 : "Western" }  // Represent genre, provided genre identifier

        const categoryArray = this.state.category;  // Represent, metadata category

        metadata.map( (dataElement) => {  // Looping through, metadata

            const genre = genreIdentifier[dataElement.genre_ids[0]];

            if(!(categoryArray.includes(genre))){  // The includes() method returns true if an array contains a specified value.
                categoryArray.push(genre);  // Category maintainance
            }  
        
        });


        this.setState( { category : [...categoryArray] , metadata : [ ...metadata ] , filtrate : [ ...metadata ] } );  // Maintainance, component state 
    }

    componentDidMount() {
        const metadata = (JSON.parse(localStorage.getItem("preference")) || []);
        this.categoryMaintainance(metadata);
        // this.setState({ filtrate : [...this.state.metadata] });  // Filtrate maintainance, provided component mount
    }

    render() {
        const metadata = this.state.metadata;  // Represent, metadata
        const genreIdentifier = { 28 : "Action" , 12 : "Adventure" , 16 : "Animation" , 35 : "Comedy" , 80 : "Crime" , 99 : "Documentary" , 18 : "Drama" , 10751 : "Family" , 14 : "Fantasy" , 36 : "History" , 27 : "Horror" , 10402 : "Music" , 9648 : "Mystery" , 10749 : "Romance" , 878 : "Science Fiction" , 10770 : "TV Movie" , 53 : "Thriller" , 10752 : "War" , 37 : "Western" }  // Represent genre, provided genre identifier
        

        return(  // JSX, expected
            <React.Fragment>
                <div className="preferenceElement">

                    <div className="col-3 filterElement">
                        <ul className="list-group">

                            {
                                this.state.category.map( (category) => {  // Looping through, category
                                    return ( this.state.active == category ?  <li className="row list-group-item active">{ category }</li> : <li className="row list-group-item" onClick={ () => { this.filterPreference(category) } } >{ category }</li> );
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
                                    this.state.filtrate.map( (dataElement) => {  // Looping through, metadata

                                        return(  // Expected, row
                                            <tr>
                                                <td className="titleClosure"><img src={`https://image.tmdb.org/t/p/original${dataElement.backdrop_path}`} alt="Image representation" className="dataElementImage"/><h6 className="dataElementTitle">{dataElement.title}</h6></td>
                                                <td>{ genreIdentifier[dataElement.genre_ids[0]] }</td>
                                                <td>{ dataElement.popularity }</td> 
                                                <td>{ dataElement.vote_average }</td>
                                                <td><button type="button" className="btn btn-danger">Remove</button></td>
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