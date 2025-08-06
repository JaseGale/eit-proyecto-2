import { useState } from "react"
import Box from "../components/Box"
import Container from "../components/Container"
import Form from "../components/Form"
import Text from "../components/Text"

import { useForm } from "../hooks/useForm"
import { postContact } from "../utils/api"

const inputsValidations = {
    name: {
        validation: value => value.length > 2,
        errorText: "El nombre debe contener al menos dos letras."
    },
    lastname:{
        validation: value => value.length > 2,
        errorText: "El apellido debe contener al menos dos letras."
    },
    cellphone: {
         validation: value => {
        const cleaned = value.toString();
        const onlyDigits = /^\d{10,}$/.test(cleaned);
        return onlyDigits;
        }, 
        errorText: "El número de teléfono debe contener al menos diez números."
    },
    email: {
        validation: value => {
            const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            return regexp.test(value);
        },
        errorText: "El email no tiene el formato correcto."
    },
    subject: {
        validation: value => value.length > 0,
        errorText: "El asunto es obligatorio."
    },
    message: {
        validation: value => value.length > 0,
        errorText: "Ingrese un texto."
    }
}

function ContactUs() {

    const {values, onChange, errors, setValues} = useForm({
        name: "",
        lastname: "",
        cellphone: "",
        email: "",
        subject: "",
        message: ""
    }, inputsValidations)


const [formError, setFormError] = useState("");

const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(errors).every(val => !val)) {
        postContact(values)
            .then(() => {
                alert("Mensaje enviado correctamente");
                setFormError("");
            })
            .catch(err => {
                console.error(err);
                setFormError("Error al enviar el mensaje. Intentá más tarde.");
            });
    } else {
        setFormError("Hay errores en el formulario. Revisá los campos.");
    }
};

const handleReset = () => {
  setValues({
    name: "",
    lastname: "",
    cellphone: "",
    email: "",
    subject: "",
    message: ""
  });
  setFormError("");
};

    return (
        <Container as="main">
            <Text as="h2">Contactanos</Text>
            <Box className="grid">
                <Box className="col-xs-12 col-md-6 col-lg-5 col-xl-4">
                    <Form 
                        values={values}
                        errors={errors}
                        onChange={onChange}
                        onSubmit={handleSubmit}
                        onReset= {handleReset}
                        inputsArray={[
                            {
                                name: "name",
                                type: "text",
                                label: "Nombre"
                            },
                            {
                                name: "lastname",
                                type: "text",
                                label: "Apellido"
                            },
                            {
                                name: "cellphone",
                                type: "tel",
                                label: "Teléfono"
                            },
                            {
                                name: "email",
                                type: "email",
                                label: "e-Mail"
                            },
                            {
                                name: "subject",
                                type: "text",
                                label: "Asunto"
                            },
                            {
                                name: "message",
                                type: "textarea",
                                label: "Mensaje"
                            },
                        ]}
                    />
                <Text as="p" className="form__error">{formError}</Text>  
                </Box>
            </Box>
        </Container>
    )
}

export default ContactUs