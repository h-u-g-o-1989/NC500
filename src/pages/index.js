import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/HeroHeader"
import SiteSectionsCards from "../components/SiteSectionsCards"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHeader />
    <SiteSectionsCards heading="About the NC500" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
