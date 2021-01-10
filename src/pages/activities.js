import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/HeroHeader"
import Stats from "../components/Stats"
import HeroActivities from "../components/HeroActivities"
import EventArticles from "../components/EventsArticles"

const Activites = () => {
  return (
    <Layout>
      <SEO title="roads" />
      <HeroActivities />
      <EventArticles />
    </Layout>
  )
}

export default Activites
