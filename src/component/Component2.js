import React, { Component } from 'react'
import SubComponent1 from './SubComponent1'
import SubComponent2 from './SubComponent2'

export class Component2 extends Component {
  render() {
    return (
      <div className='cmp2'>Component2
        <SubComponent1 />
        <SubComponent2 />
      </div>
    )
  }
}

export default Component2