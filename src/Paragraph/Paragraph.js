import React, { Component } from 'react'
import './Paragraph.css'

class Paragraph extends Component {
  render() {
    return (
      <p className="paragraph">{this.props.children}</p>
    )}
}

export default Paragraph