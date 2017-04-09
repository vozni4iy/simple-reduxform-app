import React from 'react'

const ArrowButton = ({name}) => (
  <button type="submit" className="arrow-button">
    <div>
      <span>{name}</span>
      <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
      </svg>
    </div>
  </button>
)

export default ArrowButton
