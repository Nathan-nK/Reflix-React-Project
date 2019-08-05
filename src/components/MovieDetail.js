import React, { Component } from 'react' 

class MovieDetail extends Component {
render() {
    console.log(this.props.match.params.movieId)
    // console.log(this.props.match.params.movieId)
    // let matchId = this.props.match.params.movieId
    // console.log(matchId)
    let matchId = this.props.match.params.movieId
    let currentMovie = this.props.movies.find( f => f.id == matchId)
return (
<div class='movieDetailGrid'>
    <div class='title'>{currentMovie.title}</div>
    <div class='year'>Year of Release: {currentMovie.year}</div>
    <div class='descrShort'>{currentMovie.descrShort}</div>
    <img src={currentMovie.img} class='movieImg'/>
    
</div>
)}
}

export default MovieDetail