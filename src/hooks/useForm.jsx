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

   return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
   }
}

export default useForm
