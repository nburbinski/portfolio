import React, { useState } from "react"

import contactStyles from "./contact.module.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
    setMessage("")
    setName("")
    setEmail("")
  }
  return (
    <form className={contactStyles.form} onSubmit={handleSubmit}>
      <h3>Contact Me</h3>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name here..."
          value={name}
          onChange={target => setName(target.value)}
        ></input>
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter email here..."
          value={email}
          onChange={target => setEmail(target.value)}
        ></input>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Enter message here..."
          value={message}
          onChange={target => setMessage(target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
