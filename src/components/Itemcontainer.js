import React, { Component } from 'react';
import Item from './Item';

class Itemcontainer extends Component {
    constructor(props){
        super(props)

        this.state = {
             items: []
        } 
    }

    componentWillMount(){
        //const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
        const url = 'http://127.0.0.1:8000/api/'

        console.log(url)
 
        //fetch is a promise, waiting for a data
        //declare a loader whiles loading the data
        fetch(url)
          .then(response => response.json()) //promise data
            .then(data => {
                this.setState({items:data})
            })
    }


  render(){
    return (
      <div className="container">
      <div className="row">
      {
          this.state.items.map((item,key) => {
              console.log(item)
              return(
                 <div key={key} className='col-md-4 myc'>
                    <Item  item={item}/>
                 </div>
              )
          })
      }
      </div>
      </div>
    );
  }
}

export default Itemcontainer;
