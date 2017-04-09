import React from 'react'
import { Field } from 'redux-form'
import { Input, ArrowButton } from '../parts'

const View1 = () => (
  <div className="view">
    <div className="view form-columns">
      <Field label="Email is Required" component={Input} name="email" type="text" />
      <Field label="Password" component={Input} name="password" type="password" />
      <Field label="Confirm password" component={Input} name="confirm" type="password" />
    </div>
    <div className="bottom-buttons">
      <ArrowButton name="Next" />
    </div>
  </div>
)

export default View1
