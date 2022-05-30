import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: ""
  });
  
  console.log(formData)

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
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
        value={formData.firstName}
      />

      <input 
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />

      <input 
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />

      <div className="checkbox">
        <input 
          type="checkbox"
          id="isFriendly"
          onChange={handleChange}
          name="isFriendly"
          checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>

      <fieldset>
        <legend>Current employment status</legend>
        <input 
            type="radio"
            id="unemployed"
            onChange={handleChange}
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input 
            type="radio"
            id="part-time"
            onChange={handleChange}
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input 
            type="radio"
            id="full-time"
            onChange={handleChange}
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
    </form>
  )
}

export default Form;