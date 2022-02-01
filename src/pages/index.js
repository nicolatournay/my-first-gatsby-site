// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I don't even know what I am doing here.</p>
      <StaticImage
        alt="Picture of a black hole."
        src="../images/simulated_bh.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage