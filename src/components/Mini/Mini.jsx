/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

const Mini = ({item, currentView, onChange}) => {
  return (
    <div className="mini">
      <div className="mini__container">
        {Array.isArray(item) && item.map((image, i) => (
          <div className={`mini__container__images ${currentView === i ? 'active' : ''} ${image.className}`} key={`img-${i}`} onClick={() => onChange(i)}>
            <img src={image.src} alt={`img-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mini