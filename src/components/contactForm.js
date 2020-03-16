import React, { useState } from "react"

import contactStyles from "./contact.module.scss"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setMessage("")
    setName("")
    setEmail("")
  }
  return (
    <form
      className={contactStyles.form}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <h3>Contact ME</h3>
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
