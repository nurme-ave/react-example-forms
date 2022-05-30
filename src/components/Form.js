import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState("");

  function handleChange() {
    console.log("Changed!");
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
    </form>
  )
}

export default Form;