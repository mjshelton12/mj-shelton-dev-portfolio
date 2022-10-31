import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function checkEmail(email) {}

  function handleInputChange(event) {
    // if (event.target.name === "email") {
    //   const emailValid = checkEmail(event.target.value);
    // }else{}
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form);
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="input email here"
        onChange={handleInputChange}
      ></input>

      <button type="submit">Submit</button>
      {/* <p>{message}</p> */}
    </form>
  );
}

/*
    onChange
*/
