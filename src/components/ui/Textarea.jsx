import React, { forwardRef } from 'react'

const Textarea = forwardRef(({ 
  label, 
  error, 
  rows = 4,
  className = '', 
  required = false,
  ...props 
}, ref) => {
  const textareaClasses = `w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical ${
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
      <textarea
        ref={ref}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
