import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useForm = (initialForm, validateForm, formulario) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) =>{
    handleChange(e);
    setErrors(validateForm(form));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validateForm(form))
    console.log(e.target)
    if(Object.keys(errors).length === 0){
      if(formulario === "contacto"){
        emailjs.sendForm('service_7fjzocl', 'template_2g6rlxs', e.target, 'jTWgE9_LnAdbrSmz5')
          .then(res=>console.log(res))
          .catch(err=>console.log(err)) 
        setLoading(false)
      }else if(formulario === "empresas"){
        emailjs.sendForm('service_7fjzocl', 'template_hsdda1g', e.target, 'jTWgE9_LnAdbrSmz5')
          .then(res=>console.log(res))
          .catch(err=>console.log(err)) 
        setLoading(false)
      }
    }
  }

  return {
    form,
    errors,
    loading, 
    handleChange,
    handleBlur,
    handleSubmit
  }
}
