import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button2 } from "./Button2"
import { ImLocation } from "react-icons/im"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const RoutePlanner = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query RouteQuery {
      allRoutesJson {
        edges {
          node {
            alt
            button
            name
            to
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getRoutePlan(data) {
    const routeArray = []
    data.allRoutesJson.edges.forEach((item, index) => {
      routeArray.push(
        <RouteCard key={index}>
          <RouteImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <RouteInfo>
            <TextWrap>
              <ImLocation />
              <RouteTitle>{item.node.name}</RouteTitle>
            </TextWrap>
            <Button2
              onClick={() => scrollTo(item.node.to)}
              //   to={() => scrollTo(item.node.to)}
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button2>
          </RouteInfo>
        </RouteCard>
      )
    })
    return routeArray
  }
  return (
    <RoutesContainer>
      <RoutesHeading id="routes-and-counties">{heading}</RoutesHeading>
      <RoutesWrapper>{getRoutePlan(data)}</RoutesWrapper>
    </RoutesContainer>
  )
}

export default RoutePlanner

const RoutesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const RoutesHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin: 0 auto;
  border-radius: 14px;
  margin-bottom: 5rem;
  background: #f26a2e;
  color: white;
  width: max-content;
  padding: 1rem;
`

const RoutesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const RouteCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 14px;
  transition: 0.2s ease;
  border: 4px solid #f26a2e;
`
const RouteImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const RouteInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const RouteTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
