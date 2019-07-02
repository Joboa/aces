import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Item extends Component {
  constructor(props){
    super(props)


  }
  render(){
    return (
      <Link to={{ pathname:'/details', data:this.props.item}}>
      <div className="card">  
      {/* src={require('../assets/images/'+this.props.item.imageUrl)} */}
        <img src={(this.props.item.imageUrl)}  className="card-img-top" alt="..." width={200} height={200}/>
         <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary">Go to hotel details</button>
        </div>
      </div>
      </Link>
    );
  }
}

export default Item;
