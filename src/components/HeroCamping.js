import React from "react"
import styled from "styled-components"
import { Button2 } from "./Button2"
import Video from "../Assets/Videos/camping.mp4"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroCamping = () => {
  return (
    <HeroCampingContainer>
      <HeroBackground>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBackground>
      <HeroContent>
        <HeroItems>
          <HeroH1>The most idyllic spots for camping</HeroH1>
          <HeroP>
            {" "}
            Wild camping is allowed in scotland, this means you can wake up to
            some of the most amazing views the country has to offer
          </HeroP>
          <Button2
            primary="true"
            big="true"
            round="true"
            onClick={() => scrollTo("#camping")}
          >
            Sleep under the Stars
          </Button2>
        </HeroItems>
      </HeroContent>
    </HeroCampingContainer>
  )
}

export default HeroCamping

const HeroCampingContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #f26a2e;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
