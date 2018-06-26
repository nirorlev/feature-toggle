import React, { Component } from 'react'
import Document from './Document'
import './App.css'
import {transform} from 'lodash'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Document />
        {transform(this.props, (collect, val, key) => {collect.push(`${key} = ${val}`)}, []).map(str => <div>{`${this.constructor.name}: ${str}`}</div>)}
      </div>
    );
  }
}

export default App
