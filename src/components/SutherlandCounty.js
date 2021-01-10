import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const SutherlandCounty = () => {
  const sutherlandData = useStaticQuery(graphql`
    query sutherlandQuery {
      allSutherlandJson {
        edges {
          node {
            alt
            name
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

  function getSutherlandImg(sutherlandData) {
    const sutherlandArray = []
    sutherlandData.allSutherlandJson.edges.forEach((item, index) => {
      sutherlandArray.push(
        <SutherlandCard key={index}>
          <SutherlandImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <Info>
            <TextWrap>
              <CountyTitle>{item.node.name}</CountyTitle>
            </TextWrap>
          </Info>
        </SutherlandCard>
      )
    })
    return sutherlandArray
  }

  return <CountyWrapper>{getSutherlandImg(sutherlandData)}</CountyWrapper>
}

export default SutherlandCounty

const CountyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const SutherlandCard = styled.div`
  line-height: 1;
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 14px;
  transition: 0.2s ease;
  border: 4px solid #f26a2e;
`
const SutherlandImg = styled(Img)`
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

const Info = styled.div`
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
  top: 185px;
`

const CountyTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: white;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`
