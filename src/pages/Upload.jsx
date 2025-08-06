import Box from "../components/Box"
import Container from "../components/Container"
import Form from "../components/Form"
import Text from "../components/Text"

import { useForm } from "../hooks/useForm"
import { postProduct } from "../utils/api"

const validationsUpload = {
    name: {
      validation: value => value.length > 2,
      errorText: "El nombre del producto es incorrecto."
    },
    amount: {
      validation: value => value > 0,
      errorText: "El precio debe ser mayor a cero."
    },
    stock: {
      validation: value => value > 0,
      errorText: "El stock debe ser mayor a 0."
    },
    brand: {
      validation: value => value.length > 0,
      errorText: "La marca es un campo requerido."
    },
    category: {
      validation: value => value.length > 3,
      errorText: "La categoría debe tener al menos 4 caracteres."
    },
    ageFrom: {
      validation: value => value > 0,
      errorText: "La edad desde debe ser mayor a cero."
    },
    ageTo: {
      validation: value => value > 0 && value <= 100,
      errorText: "La edad hasta debe ser mayor a cero y menor a 100."
    },
    image: {
      validation: value => /^https:\/\/.+\..+/.test(value),
      errorText: `La URL de la imágen debe comenzar con "https://". y debe terminar con .jpg o .com` 
    }

}


function Upload() {

  const {values, errors, onChange, resetForm} = useForm ({
    name: "",
    amount: 0,
    stock: 0,
    brand: "",
    category: "",
    shortDescription: "",
    largeDescription: "",
    freeDelivery: false,
    ageFrom: 0,
    ageTo: 0,
    image: ""
  }, validationsUpload)

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(errors).every( val => !val )) {
            postProduct(values)
                .then(() => alert("Producto guardado correctamente."))
                .then(() => resetForm())
                .catch( err => console.error(err) )
        } else {
            console.log("Formulario inválido") //Ponerlo en la página con algún <p>
        }
    }  

  return (
    <Container as='main'>
    <Text as='h2'>Carga de productos</Text>
                <Box className="grid">
                  <Box className="col-xs-12 col-md-6 col-lg-5 col-xl-4">
                    <Form
                       values={values}
                       errors={errors}
                       onChange={onChange}
                       onSubmit={handleSubmit}
                       inputsArray={[
                        {
                          name: "name",
                          type: "text",
                          label: "Nombre"
                        },
                        {
                          name: "amount",
                          type: "number",
                          label: "Precio"
                        },
                        {
                          name: "stock",
                          type: "number",
                          label: "Stock"
                        },
                        {
                          name: "brand",
                          type: "text",
                          label: "Marca"
                        },
                        {
                          name: "category",
                          type: "text",
                          label: "Categoría"
                        },
                        {
                          name: "shortDescription",
                          type: "text",
                          label: "Descripción"
                        },
                        {
                          name: "largeDescription",
                          type: "text",
                          label: "Descripción larga"
                        },
                        {
                          name: "freeDelivery",
                          type: "checkbox",
                          label: "Envío Gratis"
                        },
                        {
                          name: "ageFrom",
                          type: "number",
                          label: "Edad desde"
                        },
                        {
                          name: "ageTo",
                          type: "number",
                          label: "Edad hasta"
                        },
                        {
                          name: "image",
                          type: "text",
                          label: "URL Imagen"
                        },
                        ]}
                    />
                  </Box>
                </Box>
    </Container>
  )
}

export default Upload