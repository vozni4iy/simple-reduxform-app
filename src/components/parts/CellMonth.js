import React from 'react'

const CellMonth = ({ input, label, type, checked, meta: { touched, error } }) => (
    <div className="cell-wrapper">
        <input {...input} className="cell-day" placeholder={label} type={type}/>
        {touched && error && <span className="error month">{error}</span>}
    </div>
)

export default CellMonth
