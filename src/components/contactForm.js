import React, { useState } from "react"

import contactStyles from "./contact.module.scss"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form
      className={contactStyles.form}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={e => handleSubmit(e)}
    >
      <h3>Contact ME</h3>
      Name
      <input
        type="text"
        placeholder="Enter name here..."
        value={name}
        onChange={target => setName(target.value)}
      ></input>
      Email
      <input
        type="text"
        placeholder="Enter email here..."
        value={email}
        onChange={target => setEmail(target.value)}
      ></input>
      Message
      <textarea
        rows="5"
        placeholder="Enter message here..."
        value={message}
        onChange={target => setMessage(target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
