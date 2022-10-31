import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState("Test")

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function checkEmail(email) {
    console.log("checkEmail ", email)
    return String(email)
      .match(
        emailRegex
      );
  }

  function handleInputChange(event) {
    if (event.target.name === "email") {
      console.log(event.target.value)
      const emailValid = checkEmail(event.target.value);
      console.log("emailValid ", emailValid)
      if (emailValid===null) {
        setAlert("Email Invalid")
      } else{
        setAlert("")
      }
    } else {

    }
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <form>
      <label>Name:</label>
      <input
        type="textarea"
        name="name"
        autoComplete="off"
        value={form.name}
        placeholder="input your name"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        autoComplete="off"
        placeholder="input your email"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="subject">Subject:</label>
      <input
        type="textarea"
        name="subject"
        autoComplete="off"
        value={form.subject}
        placeholder="subject"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="message">Message:</label>
      <input
        type="textarea"
        name="message"
        autoComplete="off"
        value={form.message}
        placeholder="write message here"
        onChange={handleInputChange}
      ></input>
      <p>{alert}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

/*
    onChange
*/
