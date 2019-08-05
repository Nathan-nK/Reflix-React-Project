import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Movie from './Movie'
class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
        }
      }
    updateInput = (event) => {
        this.setState({
          name: event.target.value
        })
      }

    render() {
        return (
            <div>
                <input type='text' placeholder='Type Your Movie Here!' value={this.state.name} onChange={this.updateInput}/>
                <div class='budget'>Budget:{this.props.budget}$</div>
                <Movie movies = {this.props.movies} input = {this.state.name} budget = {this.props.budget} rentMovie={this.props.rentMovie} returnMovie={this.props.returnMovie} />
            </div>
        )
    }
}
export default Catalog