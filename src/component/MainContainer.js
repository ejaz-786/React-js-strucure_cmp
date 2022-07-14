import React, { Component } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
// import SubComponent1 from './SubComponent1'
// import SubComponent2 from './SubComponent2'



class MainContainer extends Component {
  render() {
    return (
        <>
           <div className='container'>
             REACT
             <Component1 />
              <Component2 />
              <Component3 />

           </div>
        </>
   
    )
  }
}

export default MainContainer