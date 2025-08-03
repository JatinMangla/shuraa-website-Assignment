// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[0-9\s\-()]+$/
  return phoneRegex.test(phone) && phone.replace(/[^0-9]/g, '').length >= 7
}

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.toString().trim().length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return !value || value.toString().trim().length <= maxLength
}

// Contact form validation schema
export const contactFormValidation = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
    maxLength: { value: 50, message: 'Name must be less than 50 characters' }
  },
  email: {
    required: 'Email is required',
    pattern: { 
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address'
    }
  },
  phone: {
    required: 'Phone number is required',
    pattern: { 
      value: /^[+]?[0-9\s\-()]+$/,
      message: 'Please enter a valid phone number'
    },
    minLength: { value: 7, message: 'Phone number is too short' }
  },
  service: {
    required: 'Please select a service'
  },
  message: {
    required: 'Message is required',
    minLength: { value: 10, message: 'Message must be at least 10 characters' },
    maxLength: { value: 1000, message: 'Message must be less than 1000 characters' }
  }
}

export default {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  contactFormValidation
}
