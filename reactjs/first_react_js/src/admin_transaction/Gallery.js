import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';




export default class Gallery extends Component {
  constructor (props){
    super (props);

    this.state = {
      count: 0,
      even: false,
      name: 'gallery',
    }
  }

  plus1(){
    this.setState ((prevState) => ({
      count: prevState.count + 1,
      even: (prevState.count +1) % 2 ===0 ? true : false
    }));
  }

  render() {
    return (
      <div>
         <h1>Gallery</h1>
         <p>Count: {this.state.count}</p>
         {this.state.even ? 'Count is even' : 'Count is odd'}
         <Button variant= "seondary" onClick={()=> this.plus1()}>Plus 1</Button>
      </div>
    );
  }
}

