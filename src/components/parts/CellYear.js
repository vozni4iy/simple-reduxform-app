import React from 'react'

const CellYear = ({ input, label, type, checked, meta: { touched, error } }) => (
    <div className="cell-wrapper">
        <input {...input} className="cell-year" placeholder={label} type={type}/>
        {touched && error && <span className="error year">{error}</span>}
    </div>
)

export default CellYear
