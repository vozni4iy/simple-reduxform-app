import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { validate } from '../validation/FormValidation'
import { Header, ProgressBar } from '../components/parts'
import View3 from '../components/view/View3'

class SimpleFormPage3 extends Component {
  handleFormSubmit (values) {
    console.log('submitting last page')
    console.log(values)
    this.props.actionSubmit(values)
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className="main-form">
        <Header name="Thank you!"/>
        <ProgressBar step={3} />
        <div className="data-container final-data">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
           <View3 />
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
})(SimpleFormPage3)
