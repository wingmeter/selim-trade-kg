import { useState } from 'react'

// Кастомный хук

const useForm = (initialValues) => {
   const [values, setValues] = useState(initialValues)
   const [errors, setErrors] = useState({})

   const handleInputChange = (e) => {
      const { name, type } = e.target
      const value = type === 'checkbox' ? e.target.checked : e.target.value
      setValues({
         ...values,
         [name]: value,
      })
   }

   const clearFields = () => {
      setValues(initialValues)
   }

   return {
      values,
      setValues,
      errors,
      setErrors,
      clearFields,
      handleInputChange,
   }
}

export default useForm
