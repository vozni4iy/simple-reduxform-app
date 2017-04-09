import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Header, ProgressBar } from '../components/parts'
import { validate } from '../validation/FormValidation'
import View2 from '../components/view/View2'

class SimpleFormPage2 extends Component {
  handleFormSubmit (values) {
    console.log('submitting second page')
    console.log(values)
    this.props.nextStep()
  }

  render () {
    const { prevStep } = this.props
    const { handleSubmit } = this.props
    let options = [
      'Internet',
      'Television',
      'Friends'
    ]
    return (
      <div className="main-form">
        <Header name="Signup"/>
        <ProgressBar step={2} />
        <div className="data-container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
           <View2 prevStep={prevStep} options={options}/>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'simpleForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SimpleFormPage2)
