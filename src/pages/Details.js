import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Details extends Component {
    constructor(props){
        super(props)

        console.log(props.location)
    }



    render() {
        const {data} = this.props.location

        return (
            <>
            <div className='container'>
            { data ? 
            <div className="card">
            <img src={ data.imageUrl}  className="card-img-top" alt="..." width={200} height={600}/>
             <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><Link to='/hire'><button className='btn btn-primary'>Want to hire</button></Link>
   
            </div>
          </div> : 'Hey do not reload this page'}
          </div>
          </>
        )
    }
}


export default Details;