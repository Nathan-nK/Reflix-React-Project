import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Movie extends Component {
    rentMovie = (e) => {
        let id = e.target.id
        this.props.rentMovie(id)
  }

  returnMovie = (e) => {
    let id = e.target.id
    this.props.returnMovie(id)
  
}
        render() {
            let input = this.props.input
        return (
        <div> 
                <div>
                {this.props.movies.filter(f => f.isRented).length > 0 ? <div class='Catalog'>Rented:</div> : null}
                <div className='movie-grid'>  
                    {this.props.movies.filter(f => f.isRented && f.title.toLowerCase().includes(input)).map(f => {
                        return ( 
                                <div className="movie-box">
                                <Link to={`/movies/${f.id}`}><img className="directory-img" src={f.img} alt=""/></Link>
                                <button className='plusSign' id={f.id} onClick={this.returnMovie}>-</button>
                            </div>
                        )
                    })}</div>


                    <div class='Catalog'>Catalog:</div> 
                    <div className='movie-grid'>    
                    {this.props.movies.filter(f => f.title.toLowerCase().includes(input)).map(f => {
                        return ( 
                           <div className="movie-box">
                                <Link to={`/movies/${f.id}`}><img className="directory-img" src={f.img} alt=""/></Link>
                                <button className='plusSign' id={f.id} onClick={this.rentMovie}>+</button>
                            </div>
                        )
                    })}</div>
                </div>
</div>
)}
}

export default Movie