import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });
  
  console.log(formData)

  const optionsArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const optionsEl = optionsArr.map((option) => {
    return <option value={option}>{option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}</option>;
  })

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

      <div className="select">
        <label htmlFor="favColor">What is your favorite color?</label>
        <select 
          id="favColor"
          value={formData.favouriteColor}
          onChange={handleChange}
          name="favColor"
          className="options"
        >
          <option value="">--Select--</option>
          { optionsEl }
        </select>
      </div>
    </form>
  )
}

export default Form;