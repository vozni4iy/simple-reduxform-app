import React, { Component } from 'react'

export default class GenderInput extends Component {
  render () {
    const { input: { value, onChange }, meta: { touched, error } } = this.props
    return (
      <div className="inner-container">
        <div className={`gender-cell ${(value === 'Male') ? 'gender-chosen' : ''}`}
          onClick={() => onChange('Male')}>Male</div>
        <div className={`gender-cell ${(value === 'Female') ? 'gender-chosen' : ''}`}
          onClick={() => onChange('Female')}>Female</div>
        <div className={`gender-cell ${(value === 'Unspecified') ? 'gender-chosen' : ''}`}
          onClick={() => onChange('Unspecified')}>Unspecified</div>
        {touched && error && <span className="error gender">{error}</span>}
      </div>
    )
  }
}
