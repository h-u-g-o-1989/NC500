import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroExplore from "../components/HeroExplore"
import Stats from "../components/Stats"
import ExploreArticles from "../components/ExploreArticles"

const Explore = () => (
  <Layout>
    <SEO title="Explore" />
    <HeroExplore />
    <ExploreArticles />
  </Layout>
)

export default Explore
