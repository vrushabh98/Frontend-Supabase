import React from 'react'

function InputField({ id, placeholder, type, required, label, error, onChange, name, value, onBlur }) {
  return (
    <div className="">
    <div className="space-y-1">
      <label className="text-base leading-5 text-slate-500" htmlFor={id}>
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={`rounded w-full border ${error ? 'border-rose-500 placeholder-rose-500' :'border-slate-200'} h-8 active:outline-1 active:outline-slate-300 foucs: outline-1 focus:outline-slate-300 text-sm p-3`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={value}
        onBlur={onBlur}
      />
    </div>
    {error && <p className="text-xs text-rose-500">{error}</p>}
  </div>
  )
}

export default InputField