import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/HeroHeader"
import Stats from "../components/Stats"
import HeroAccommodation from "../components/HeroAccommodation"
import Hotels from "../components/AccommodationArticles"

const Accommodation = () => (
  <Layout>
    <SEO title="Page two" />
    <HeroAccommodation />
    <Hotels />
  </Layout>
)

export default Accommodation
