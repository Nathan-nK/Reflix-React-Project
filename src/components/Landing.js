import React, { Component } from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
              {name: 'Cartman', color: 'red'},
              {name: 'Kenny', color: 'orange'},
              {name: 'Stan', color: 'brown'},
              {name: 'Kyle', color: 'green'}
            ]
        }
      }
render() {
return (
    <div>
        <div className='whoWatch'>Who's Watching?</div>
        <div>
        {this.state.users.map(i => {
                        return <div className='user-box' name={i.name} key={i.name} style={{backgroundColor: i.color}}><Link to='/Catalog'><span>{i.name}</span></Link></div>
                    })}
        </div>
    </div>
)}
}

export default Landing