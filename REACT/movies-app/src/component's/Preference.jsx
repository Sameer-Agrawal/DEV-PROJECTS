// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Preference.css';
// import { movies } from '../Metadata/data.js'

class Preference extends Component {
    constructor() {
        super();
        this.state = { category : ["Absolute category"] , metadata : [] , active : "Absolute category" , filtrate : [] , strainer : "" }
    }

    // Faith --> Preference removal
    preferenceRemoval = async (identifier) => {
        const metadata = this.state.metadata.filter( (dataElement) => { return dataElement.id != identifier } )
        
        await this.categoryMaintainance(metadata);  // Category maintainance

        localStorage.setItem("preference" , JSON.stringify(metadata));  // Browser storage, maintainance
        
        this.filterPreference(this.state.active);  // Filter preference, provided active category
    }

    strainerMaintainance = async (event) => {
        // console.log(event.target.value);  // Represent, on change event
        await this.setState({ strainer :  event.target.value });  // Strainer maintainance
        // console.log(this.state.strainer);
        this.filterMaintainanceProvidedStrainer();
    }

    filterMaintainanceProvidedStrainer = () => {
        if(this.state.strainer == ""){

            this.setState({ filtrate : [ ...this.state.metadata ] })

        }else{

            // The includes() method returns true if a string contains a specified string, otherwise it returns false
            // The includes() method is case sensitive
    
            const strainer = this.state.strainer.toLowerCase();  // toLowerCase() method converts a string to lowercase letters
    
            const filtrate = this.state.metadata.filter( (dataElement) => { 
                const title = dataElement.title.toLowerCase();  // Lowercase, data element title
                return title.includes(strainer);
            } );
    
            this.setState({ filtrate : [ ...filtrate ] })
            
        }

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


        this.setState( { category : [...categoryArray] , metadata : [ ...metadata ] } );  // Maintainance, component state 
    }

    async componentDidMount() {
        const metadata = (JSON.parse(localStorage.getItem("preference")) || []);
        await this.categoryMaintainance(metadata);
        this.setState({ filtrate : [...this.state.metadata] });  // Filtrate maintainance, provided component mount
    }


    handleSorting = ( Entity , Sort ) => {  // Sort an 'entity', provided 'sort' category
        let compare;
        if(Sort == "Ascending"){
            compare = (a, b) => { return a[Entity] - b[Entity] };
        }else{  // Represent sort, descending
            compare = (a, b) => { return b[Entity] - a[Entity] };
        }

        let filtrate = this.state.filtrate;

        filtrate.sort(compare);  // Sort entity, provided compare function
        // console.log(filtrate);
        this.setState( { filtrate : [ ...filtrate ] } );

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
                                <input type="text" className="form-control col searchElement" placeholder="Search" value={ this.state.strainer } onChange={ (event) => { this.strainerMaintainance(event) } } />
                            </div>                  
                        </div>

                        <table className="col-9 directoryElement">
                            <thead>
                                <tr>
                                    {/* The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows. */}
                                    <th scope="col" className="center">Title</th>
                                    <th scope="col" className="center">Genre</th>
                                    <th scope="col" className="center">
                                        <i className="fa fa-sort-up" onClick={ () => { this.handleSorting("popularity" , "Ascending") } }></i>
                                        Popularity
                                        <i className="fa fa-sort-down" onClick={ () => { this.handleSorting("popularity" , "Descending") } }></i>
                                    </th>
                                    <th scope="col" className="center">
                                        <i className="fa fa-sort-up" onClick={ () => { this.handleSorting("vote_average" , "Ascending") } }></i>
                                        Rating
                                        <i className="fa fa-sort-down" onClick={ () => { this.handleSorting("vote_average" , "Descending") } }></i>
                                    </th>
                                    <th scope="col" className="center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filtrate.map( (dataElement) => {  // Looping through, metadata

                                        return(  // Expected, row
                                            <tr>
                                                <td className="titleClosure"><img src={`https://image.tmdb.org/t/p/original${dataElement.backdrop_path}`} alt="Image representation" className="dataElementImage"/><h6 className="dataElementTitle">{dataElement.title}</h6></td>
                                                <td className="center">{ genreIdentifier[dataElement.genre_ids[0]] }</td>
                                                <td className="center">{ dataElement.popularity }</td> 
                                                <td className="center">{ dataElement.vote_average }</td>
                                                <td className="center"><button type="button" className="btn btn-danger" onClick={ () => { this.preferenceRemoval(dataElement.id) } } >Remove</button></td>
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