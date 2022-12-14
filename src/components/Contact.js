import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function checkEmail(email) {
    return String(email).match(emailRegex);
  }

  function handleInputChange(event) {
    const emailValid = checkEmail(event.target.value);
    if (!emailValid) {
      setEmailAlert("Email Invalid");
    } else {
      setEmailAlert("");
    }
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log(form);
  }

  function handlePointer(event) {
    if (!event.target.value) {
      setAlert("Field Required");
    } else {
      setAlert("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fullMessage = form
      console.log(fullMessage)
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setAlert("Message sent!")
  }

  return (
    <form className="contact-form">
      <div className="input-div">
        <label className="form-label">Name:</label>
        <input
          type="textarea"
          name="name"
          autoComplete="off"
          value={form.name}
          placeholder="input your name"
          onPointerLeave={handlePointer}
          onChange={handleInputChange}
        ></input>
        <label className="form-label" >Email:</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={form.email}
          placeholder="input your email"
          onPointerLeave={handlePointer}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="input-div">
        <label className="form-label">Subject:</label>
        <input
          type="textarea"
          name="subject"
          autoComplete="off"
          value={form.subject}
          placeholder="subject"
          onPointerLeave={handlePointer}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="input-div">
        <label className="form-label">Message:</label>
        <input
          className="message-text"
          type="textarea"
          name="message"
          autoComplete="off"
          value={form.message}
          placeholder="write message here"
          onPointerLeave={handlePointer}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="alert">
        <p>{alert}</p>
        <p>{emailAlert}</p>
      </div>
      <div className="submit">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}
