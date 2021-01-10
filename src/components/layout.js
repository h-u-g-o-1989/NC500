import React from "react"
import Footer from "./Footer"
// import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Scroll from "../components/Scroll"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {/* <Header /> */}
      <Scroll showBelow={50} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
