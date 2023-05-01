import React from 'react'

export default function Result({ img, value, bcgColor, title }) {
  return (
    <div className='container-result'>
      <div>
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
      <div >
        <p>{value}ML</p>
        <div style={{ backgroundColor: bcgColor }}></div>
      </div>
    </div>
  )
}
