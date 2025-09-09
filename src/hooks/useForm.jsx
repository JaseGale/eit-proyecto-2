import { useState } from "react"

export const useForm = (initialValues, validations) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const onChange = ({ target }) => {
    // Detectar el valor según el tipo de input
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.type === "file"
        ? target.files[0] // guardamos directamente el File
        : target.value

    // Actualizar valores del formulario
    setValues({
      ...values,
      [target.name]: value
    })

    // Ejecutar validaciones si existen
    if (validations[target.name]) {
      const isValid = validations[target.name].validation(value)
      if (!isValid) {
        setErrors({
          ...errors,
          [target.name]: validations[target.name].errorText
        })
      } else {
        setErrors({
          ...errors,
          [target.name]: undefined
        })
      }
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  return {
    values,
    errors,
    onChange,
    resetForm,
    setValues,
    setErrors
  }
}