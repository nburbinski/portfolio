import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactForm />
  </Layout>
)

export default IndexPage
