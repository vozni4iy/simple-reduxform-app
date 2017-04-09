import React, { Component } from 'react'
import SimpleFormPage1 from './SimpleFormPage1'
import SimpleFormPage2 from './SimpleFormPage2'
import SimpleFormPage3 from './SimpleFormPage3'

class SimpleFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.actionSubmit = this.actionSubmit.bind(this)
  }

  nextStep () {
    this.setState({
      step: this.state.step + 1
    })
  }

  prevStep () {
    this.setState({
      step: this.state.step - 1
    })
  }

  actionSubmit (values) {
    console.log('submitting form')
    console.log(values)
  }

  render () {
    let step = this.state.step
    return (
      <div>
        {(step === 1) && <SimpleFormPage1 nextStep={this.nextStep}/>}
        {(step === 2) && <SimpleFormPage2 prevStep={this.prevStep}
          nextStep={this.nextStep}/>}
        {(step === 3) && <SimpleFormPage3
          actionSubmit={this.actionSubmit}/>}
      </div>
    )
  }
}

export default SimpleFormContainer
