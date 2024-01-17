/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

const Mini = ({item, currentView}) => {
  return (
    <div className="mini">
      <div className="mini__container">
        {Array.isArray(item) && item?.map((image, i) => (
          <div className="mini__container__images" key={`img-${i}`}>
            <img src={image} alt={`img-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mini