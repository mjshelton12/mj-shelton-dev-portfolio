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
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <form>
      <label>Name:</label>
      <input
        type="textarea"
        name="name"
        autocomplete="off"
        value={form.name}
        placeholder="input your name"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        autocomplete="off"
        placeholder="input your email"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="subject">Subject:</label>
      <input
        type="textarea"
        name="subject"
        autocomplete="off"
        value={form.subject}
        placeholder="subject"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="message">Message:</label>
      <input
        type="textarea"
        name="message"
        autocomplete="off"
        value={form.message}
        placeholder="write message here"
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
