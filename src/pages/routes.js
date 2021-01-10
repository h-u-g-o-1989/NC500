import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroRoutes from "../components/HeroRoute"
import RoutePlanner from "../components/RoutePlanner"
import RoutePlannerArticles from "../components/RoutePlannerArticles"
import MapOne from "../components/MapOne"

const Routes = () => {
  return (
    <Layout>
      <SEO title="Routes" />
      <HeroRoutes />
      <RoutePlanner heading="The Route and Counties" />
      <MapOne />
      <RoutePlannerArticles heading="The Different Routes you can take" />
    </Layout>
  )
}

export default Routes
