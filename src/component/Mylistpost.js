import React, { Component } from 'react'
import './Mylistpost.css'
import Mylistpost1 from './Mylistpost1';
// This is basically a project of get api and place on the screen
 class Mylistpost  extends Component {
  constructor(props) {
    super(props)
      this.state = {
       post:[]
    }
  }
  


  
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";  
            const res = await fetch(url);
            const data = await res.json();  
            this.setState({post:data});
        //here we are tranfering data from api call to array of object
      
            // alert("hi");
    }
        
  

    render() {
    return (
         <>
        {/* <div>Mylistpost</div> */}
        <div> Fake API DATA</div>
         {this.state.post.map(item => <Mylistpost1 key={item.id}  id = {item.id} title= {item.title} body= {item.body} />)}
       

        
         </>
    )
  }
}
export default Mylistpost