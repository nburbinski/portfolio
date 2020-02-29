import React from "react"

import contactStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
    <form className={contactStyles.form}>
      <h3>Contact ME</h3>
      Name
      <input type="text" placeholder="Enter name here..."></input>
      Email
      <input type="text" placeholder="Enter email here..."></input>
      Message
      <input type="textbox" placeholder="Enter message here..."></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
