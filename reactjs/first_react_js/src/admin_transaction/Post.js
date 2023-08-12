import React, { Component } from 'react';

export default class Post extends Component {
    constructor (props){
        super (props);
    
        this.state = {
          posts : [],
          isloading: true,
          error: null
        }
      }

      componentDidMount(){

      }

      fetchData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

        }).catch(error => {});
      }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}
