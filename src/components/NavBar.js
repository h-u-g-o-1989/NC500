import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
// import { FaBars } from "react-icons/fa"
import { navMenuData } from "../data/NavMenuData"
import { Button } from "./Button"
import { slide as Menu } from "react-burger-menu"

const NavBar = () => {
  const [menuState, setMenuOpen] = useState({ menuOpen: true })

  const closeMenu = () => {
    setMenuOpen({ menuOpen: false })
  }

  return (
    <Nav>
      <NavLink to="/">NC 500</NavLink>
      {/* <Bars /> */}
      <NavMenu>
        {navMenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      {/* <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Planned Routes
        </Button>
      </NavBtn> */}
      <SideMenu>
        <Menu isOpen={menuState.menuOpen}>
          <Link to="/" onClick={() => closeMenu()}>
            Home
          </Link>
          <Link to="/routes" onClick={() => closeMenu()}>
            Routes
          </Link>

          <Link to="/explore" onClick={() => closeMenu()}>
            Explore
          </Link>

          <Link to="/accommodation" onClick={() => closeMenu()}>
            Accommodation
          </Link>

          <Link to="/camping" onClick={() => closeMenu()}>
            Camping
          </Link>

          <Link to="/activities" onClick={() => closeMenu()}>
            Activities
          </Link>

          <Link to="/facts" onClick={() => closeMenu()}>
            F&Q's
          </Link>
        </Menu>
      </SideMenu>
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 50px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  :hover {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1160px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 1020px) {
    margin-left: 5px;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const SideMenu = styled.div`
  /* Individual item */
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #fff;
    transition: color 0.2s;
  }
  /* Change color on hover */
  .bm-item:hover {
    color: white;
    font-size: 1.2rem;
  }
  /* The rest copied directly from react-burger-menu docs */
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #f26a2e;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #f26a2e;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    height: 20vh;
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.8);
  }
  @media (min-width: 768px) {
    display: none;
  }
`
