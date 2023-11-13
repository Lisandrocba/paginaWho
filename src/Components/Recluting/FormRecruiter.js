import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './styleRecluting.css'

const initialState = {
  name: "",
  email: "",
  telefono: "",
  linkedin: "",
};
let errors = {};

const validateForm = (name, value) => {
    
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexUrl =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  switch (name) {
    case "name":
    errors.name = null
      if (!value.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
      } else if (!regexName.test(value.trim())) {
        errors.name =
          "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      }
      break;
    case "email":
    errors.email = null
      if (!value.trim()) {
        errors.email = "El campo 'Email' es requerido";
      } else if (!regexEmail.test(value.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
      }
      break;
    case "linkedin":
        errors.linkedin = null
      if (!value.trim()) {
        errors.linkedin = "El campo 'Linkedin' es requerido";
      } else if (!regexUrl.test(value.trim())) {
        errors.linkedin = "El campo 'Linkedin' es incorrecto, debe tener la url completa";
      }
      break;

    default:
      break;
  }

  return errors;
};

const FormRecruiter = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState({});
  const [msj, setMsj] = useState(null)

  const handleChange = (e) => {
    setError(validateForm(e.target.name , e.target.value, error));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    emailjs
      .sendForm(
        "service_lkaweh6",
        "template_8es5kq7",
        e.target,
        "Zodg9hS5d1gkQtk-B"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      }).finally(setMsj('Se enviaron los datos correctamente, en la breveda te mantendremos informado'))
  };

  const handleBlur = (e) => {
    handleChange(e);
    
    setError(validateForm(e.target.name , e.target.value, error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="itemFormRecruiter">
          <label>Nombre Completo</label>
          <input
            className='inputRectuiter'
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.name ? <p>{error.name}</p> : null}
        </div>
        <div className="itemFormRecruiter">
          <label>Email</label>
          <input
            className='inputRectuiter'
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.email ? <p>{error.email}</p> : null}
        </div>
        <div className="itemFormRecruiter">
          <label>Telefono</label>
          <input
            className='inputRectuiter'
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="itemFormRecruiter">
          <label>Linkedin</label>
          <input
            className='inputRectuiter'
            type="url"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.linkedin ? <p>{error.linkedin}</p> : null}
        </div>
        <button className='btnFormRecriter' type="submit">Enviar por correo</button>
        {msj && <p>{msj}</p>}
      </form>
    </div>
  );
};

export default FormRecruiter;
