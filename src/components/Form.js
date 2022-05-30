import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    numberOfPeople: "",
    cuisine: "",
    joinNewsletter: false
  });
  
  const optionsArr = ["Italian", "Japanese", "Chinese", "Indian", "American"];
  const optionsEl = optionsArr.map((option) => {
    return <option key={option} value={option.toLowerCase()}>{option}</option>;
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

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted - thank you!')
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
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

      <fieldset>
        <legend>Number of people</legend>
        <input 
            type="radio"
            id="1-2"
            onChange={handleChange}
            name="numberOfPeople"
            value="1-2"
            checked={formData.numberOfPeople === "1-2"}
        />
        <label htmlFor="1-2">1-2</label>
        <br />
        <input 
            type="radio"
            id="3-5"
            onChange={handleChange}
            name="numberOfPeople"
            value="3-5"
            checked={formData.numberOfPeople === "3-5"}
        />
        <label htmlFor="3-5">3-5</label>
        <br />
        <input 
            type="radio"
            id="moreThanFive"
            onChange={handleChange}
            name="numberOfPeople"
            value="moreThanFive"
            checked={formData.numberOfPeople === "moreThanFive"}
        />
        <label htmlFor="moreThanFive">More than 5</label>
        <br />
      </fieldset>

      <div className="select">
        <label htmlFor="cuisine">Select your cuisine:</label>
        <select 
          id="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          name="cuisine"
          className="options"
        >
          <option value="">-- Select --</option>
          { optionsEl }
        </select>
      </div>

      <div className="checkbox">
        <input 
          type="checkbox"
          id="joinNewsletter"
          onChange={handleChange}
          name="joinNewsletter"
          checked={formData.joinNewsletter}
        />
        <label htmlFor="joinNewsletter">Join our newsletter? <span className="spam-promise">(we promise not to spam)</span></label>
      </div>
      <button className="submit-button">Submit</button>
    </form>
  )
}

export default Form;