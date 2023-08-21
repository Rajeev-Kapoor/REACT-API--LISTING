import React, { Component } from 'react'
import './Mylistpost.css'
class Mylistpost1 extends Component {


    render() {
        
        const {id,title,body}= this.props
        return (
      <>
      <section>
        <div className='box'>
          <div>User id : {id} </div>
          <div> Title : {title}</div>
          <div>Description : {body}</div>
        </div>
      </section>
      </>)
  }
}

export default Mylistpost1