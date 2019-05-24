import React, { Component } from 'react';
import movieData from '../movieData.json'
import handleCountdown from './utils/handleCountdown'
import brokenImg from '../images/clock.png'
import './styling/movieList.css'
import replaceASCII from './utils/replaceASCII'


export class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: movieData,
            imdbid: '',
            title: '',
            expiration: '',
            synopsis: '',
            released: 0,
            imageURL: '',
            rating: ''
        }
    }
    componentDidMount() {
        let url = "http://localhost:8080/expiring"
        fetch(url)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    ...this.state.movies,
                    movies: json
                })
                localStorage.setItem('movieData', JSON.stringify(json))
            })
    }
    render() {
        // MIKES'S CODE =======
        let movies = []
        movies = JSON.parse(localStorage.getItem('movieData')).ITEMS
        // MIKES'S CODE ======
        let movieItem = movies.map((movie) => {
            let str = replaceASCII(movie.title)
            return (
                <div className="listElementContainer">
                    <li className="listElement" key={movie.imdbid}>
                        <div>
                            <img src={movie.image} alt={brokenImg}></img>
                            <p className="listElementMovieTitle">{str}</p>
                            <p className="listElementMovieEndDate">{movie.unogsdate}</p>
                            <p className="listElementMovieCountdown">{(handleCountdown(movie.unogsdate) === 0) ? <p className="noLongerAvailable">No Longer Available</p> : (handleCountdown(movie.unogsdate) === 1) ? <p className="lastDayToWatch">Last Day to Watch</p> : `${handleCountdown(movie.unogsdate)} days remaining`}</p>
                            <p>{}</p>
                        </div>
                    </li>
                </div>

            )

        })
        return (
            <div className="listElementBody">
                <div className="listElementHeader">
                    <h1>This is What's Leaving</h1>
                </div>
                <ul className="movieItemList">{movieItem}</ul>
            </div>
        )
    }
}
