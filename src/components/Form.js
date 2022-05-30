import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input 
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  )
}

export default Form;