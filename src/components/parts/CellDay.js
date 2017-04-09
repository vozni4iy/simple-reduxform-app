import React from 'react'

const CellDay = ({ input, label, type, checked, meta: { touched, error } }) => (
    <div className="cell-wrapper">
        <input {...input} className="cell-day" placeholder={label} type={type}/>
        {touched && error && <span className="error day">{error}</span>}
    </div>
)

export default CellDay
