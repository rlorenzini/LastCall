import React, { Component } from 'react';
import * as keys from '../.env.json';
import movieData from '../movieData.json'
import handleCountdown from './utils/handleCountdown'
import brokenImg from '../images/clock.png'
import './styling/UserWatchList.css'
import { WatchList } from './WatchList.js';
import { FindAndAdd } from './FindAndAdd.js';

export class UserWatchList extends Component {
    constructor() {
        super()
        // this.state = {
        //     title: '',
        //     returnedMovies: [],
        // }
    }

    // handleFindMovie = () => {
    //     let title = this.state.title
    //     let moviesURL = "http://www.omdbapi.com/?s=" + title + "&apikey=" + keys.OMDB_API_KEY

    //     console.log(keys)
    //     fetch(moviesURL)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //             this.setState({
    //                 returnedMovies: json.Search
    //             })
    //         }).then(() => {
    //             console.log(this.state.returnedMovies)
    //         })
    // }


    // handleTextBoxChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     }, () => {
    //         console.log(this.state.title)
    //         let omdbList = this.state.returnedMovies
    //         let movieItems = omdbList.map((movie) => {
    //             return (
    //                 movie.imdbID
    //             )
    //         })
    //         console.log(movieItems)
    //     })
    // }

    // handleAddToWatchList = (e) => {
    //     console.log("Clicked")
    //     console.log(e.target.name)
    //     console.log(e.target.id)
    //     fetch('http://localhost:8080/add-movie', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: e.target.name,
    //             imdbID: e.target.id
    //         })
    //     })

    // }

    render() {
        // let omdbList = this.state.returnedMovies
        // let movieItems = omdbList.map((movie) => {
        //     return (
        //         <li key={movie.imdbID}>
        //             <img className="omdb-poster" src={movie.Poster}></img>
        //             <p>{movie.Title}</p>
        //             <button onClick={this.handleAddToWatchList} name={movie.Title} id={movie.imdbID}>Add to Watch List</button>
        //         </li>
        //     )
        // })
        return (
            <div>
                <div className="lists-container">
                    <div className="watchlist">
                        <WatchList />
                    </div>
                    <div className="omdb-list">
                        <FindAndAdd />
                    </div>
                </div>
                {/* <h1>Your WatchList</h1>
                <input type="text" onChange={this.handleTextBoxChange} name="title" placeholder="Movie Title"></input>
                <button onClick={this.handleFindMovie}>Find Movie</button>
                <div className="lists-container">
                    <div className="watchlist">
                        <ul>Watchlist goes here</ul>
                    </div>
                    <div className="omdb-list">
                        <h1>OMDB movies go here</h1>
                        <ul>{movieItems}</ul>

                    </div>

                </div> */}
            </div>
        )
    }
}

