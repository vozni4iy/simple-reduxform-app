import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validate } from '../validation/FormValidation'
import { Header, ProgressBar } from '../components/parts'
import View1 from '../components/view/View1'

class SimpleFormPage1 extends Component {

  handleFormSubmit (values) {
    console.log('submitting first page')
    console.log(values)
    this.props.nextStep()
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className="main-form">
        <Header name="Signup"/>
        <ProgressBar step={1} />
        <div className="data-container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
           <View1 />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
    validate: validate
  }), {})(reduxForm({
    form: 'simpleForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(SimpleFormPage1))
