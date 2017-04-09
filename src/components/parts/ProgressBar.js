import React from 'react'

const ProgressBar = ({step}) => (
  <div className="progress-bar">
    <div className="filled"/>
    <div className={(step > 1) ? 'filled' : 'empty'}/>
    <div className={(step > 2) ? 'filled' : 'empty'}/>
  </div>
)

export default ProgressBar
