import React from 'react'

export default function Input({ label, backgroundColor }) {

  return (
    <div
      className='container-input'
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <label htmlFor="ml">{label}</label>
      <span>
        <input name='ml' type="number" />
      </span>
    </div>
  )
}
