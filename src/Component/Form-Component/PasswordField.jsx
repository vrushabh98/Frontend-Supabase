import React from "react";

function PasswordField({
  id,
  required,
  error,
  label,
  placeholder,
  name,
  onChange,
  value,
  onBlur,
}) {
  return (
    <div>
      <div className="space-y-1">
        <label className="text-base leading-5 text-slate-500" htmlFor={id}>
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <input
          id={id}
          name={name}
          type="password"
          className={`rounded w-full border ${
            error ? "border-rose-500 placeholder-rose-500" : "border-slate-200"
          }  h-8 active:outline-1 active:outline-slate-300 foucs: outline-1 focus:outline-slate-300 text-sm p-3`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </div>
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  );
}

export default PasswordField;
