import React from 'react'
import { FormSelect, CellDay, CellMonth, CellYear, GenderInput, ArrowButton } from '../parts'
import { Field } from 'redux-form'

const View2 = (props) => {
  const {prevStep, options} = props
  return (
  <div className="view">
    <div className="view height-300">
      <div className="subheader">Date of Birth</div>
      <div className="inner-container">
        <Field label="DD" name="day" component={CellDay} type="text"/>
        <Field label="MM" name="month" component={CellMonth} type="text"/>
        <Field label="YYYY" name="year" component={CellYear} type="text"/>
      </div>
      <div className="subheader">Gender</div>
      <Field name="gender" component={GenderInput} />
      <div className="subheader">Where did you hear about us?</div>
      <FormSelect label="Where did you hear about us?" name="select" options={options} />
    </div>
    <div className="bottom-buttons">
      <ArrowButton name="Next" />
      <button className="back-button" onClick={prevStep}>Back</button>
    </div>
  </div>
  )
}

export default View2
