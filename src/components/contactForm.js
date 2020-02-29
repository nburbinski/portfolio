import React from "react"

import contactStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
    <form
      className={contactStyles.form}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <h3>Contact ME</h3>
      Name
      <input type="text" placeholder="Enter name here..."></input>
      Email
      <input type="text" placeholder="Enter email here..."></input>
      Message
      <textarea rows="5" placeholder="Enter message here..."></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
