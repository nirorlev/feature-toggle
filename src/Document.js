import React, { Component } from 'react'
import Header from './Header'
import Paragraph from './Paragraph'
import {toggleableComponents} from './featureToggleConfig'

const docStructure = require('./Document.json')

// This decorator should do --> Paragraph.onToggle(() => this.forceUpdate())
// @withComponentToggle(toggleableComponents.Paragraph)
class Document extends Component {
  render() {
    return (
      <div>
        {
          docStructure.map(({type, value}, index) => {
            switch (type) {
              case 'Header':
                return <Header key={index}>{value}</Header>
              case 'Paragraph':
                return <Paragraph key={index}>{value}</Paragraph>
              default:
                return <span key={index}>{value}</span>
            }
          })
        }
      </div>
    )
  }
}

export default Document
