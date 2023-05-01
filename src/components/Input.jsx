import React, { useEffect } from 'react'

export default function Input({ label, backgroundColor, setValue, value, property}) {


  const getValue = (e) => {
    setValue({
      ...value,
      [property]: parseInt(e.target.value)
    })
  }


  return (
    <div
      className='container-input'
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <label htmlFor="ml">{label}</label>
      <span className={property}>
        <input onChange={(e) => { getValue(e) }} name='ml' type="number" />
      </span>
    </div>
  )
}
