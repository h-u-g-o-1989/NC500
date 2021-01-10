import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroCamping from "../components/HeroCamping"
import Stats from "../components/Stats"
import WildCamping from "../components/WildCamping"

const Camping = () => (
  <Layout>
    <SEO title="Camping" />
    <HeroCamping />
    <WildCamping />
  </Layout>
)

export default Camping
