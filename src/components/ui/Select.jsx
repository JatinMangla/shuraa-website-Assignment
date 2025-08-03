import React, { forwardRef } from 'react'

const Select = forwardRef(({ 
  label, 
  error, 
  options = [], 
  placeholder = 'Select an option',
  className = '', 
  required = false,
  ...props 
}, ref) => {
  const selectClasses = `w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
    error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:border-primary-500'
  } ${className}`

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={selectClasses}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

export default Select
