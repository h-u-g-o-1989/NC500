import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroFacts from "../components/HeroFacts"
import FactsAndQuestions from "../components/FactsAndQuestions"

const Roads = () => {
  return (
    <Layout>
      <SEO title="Roads" />
      <HeroFacts />
      <FactsAndQuestions />
    </Layout>
  )
}

export default Roads
