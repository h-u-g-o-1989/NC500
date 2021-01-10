import React from "react"
import styled from "styled-components"
import WildCampImgOne from "../Assets/images/camping-2.jpg"
import WildCampImgTwo from "../Assets/images/camping-3.jpg"
import WildCampImgThree from "../Assets/images/camping-7.jpg"
import WildCampImgFour from "../Assets/images/camping-4.jpg"
import WildCampImgFive from "../Assets/images/camping-5.jpg"
import WildCampImgSix from "../Assets/images/camping-6.jpg"

const WildCamping = () => {
  return (
    <WildCampImageContainer>
      <Description id="camping">Places to Pitch</Description>
      <ContentWrapper>
        <ColumnOne>
          <ContentInput id="Knockomie-inn">
            <CampingContainer>
              <ColumnTwo>
                <WildCampImage1 />
              </ColumnTwo>
              <ColumnThree>
                <h3>Wild Camping Info</h3>
                <p>
                  If you're planning a wild camping trip, be sure to familiarise
                  yourself with the
                  <a
                    href="https://www.outdooraccess-scotland.scot/practical-guide-all/camping"
                    target="_blank"
                  >
                    Scottish Outdoor Access Code.
                  </a>{" "}
                  It's not complicated - basically, campers should follow a
                  policy of 'leave-no-trace'.
                  <br />
                  <br />
                  Here are some top points to follow:
                  <br />
                  🌲 Avoid overcrowding by moving on to another location if it's
                  already a busy spot.
                  <br />
                  🌲 Wherever possible, use a stove rather than an open fire.
                  Never light an open fire during dry periods or in sensitive
                  places like forests or peaty ground.
                  <br />
                  🌲 Take away your rubbish and consider picking up other litter
                  as well.
                  <br />
                  🌲 If in doubt, ask the landowner. Their advice just might
                  help you find a better camping spot.
                </p>
              </ColumnThree>
            </CampingContainer>
          </ContentInput>

          <ContentInput id="ord-house">
            <CampingContainer>
              <ColumnTwo>
                <h3>Bothy</h3>

                <p>
                  Bothy? What is a bothy?
                  <br />
                  <br />
                  A bothy was originally farm accommodation for itinerant
                  workers; now a bothy is an open shelter usually in a remote
                  location where travellers might have need of four walls and a
                  roof. Most bothies are old cottages and at least several hours
                  walk from the public road.
                  <br />
                  <br />
                  Bothies are open for anyone to use. Just turn up. People using
                  a bothy must expect others to arrive looking for shelter and
                  make room for them if that happens. We advise that you should
                  consider taking a tent if you intend using a bothy in a
                  popular area.
                  <br />
                  <br />
                  You should only expect to find a wind and waterproof building
                  with somewhere dry to sleep. Some bothies have a sleeping
                  platform but at many you have to sleep on a wooden or concrete
                  floor. Most have a fireplace or stove that can be used to
                  provide warmth but you will usually need to carry fuel in. You
                  will also need to take a stove for cooking and candles for
                  light. Water comes from a stream or spring nearby. Do not
                  expect the bothy to have toilet facilities; you will need to
                  use the spade provided. Leave the bothy clean and tidy and
                  don’t forget to shut all doors and windows.
                  <br />
                  <br />
                  <a
                    href="https://www.mountainbothies.org.uk/bothies/bothy-code/"
                    target="_blank"
                  >
                    Bothy Code.
                  </a>
                </p>
              </ColumnTwo>
              <ColumnThree>
                <WildCampImage2 />
              </ColumnThree>
            </CampingContainer>
          </ContentInput>
          <ContentInput id="sutherland">
            <CampingContainer>
              <ColumnTwo>
                <WildCampImage3 />
              </ColumnTwo>
              <ColumnThree>
                <h3>Be Responsible</h3>

                <p>
                  Getting away from cities and civilisation to spend some
                  quality time on your own or with a few others often makes for
                  a great holiday in Scotland. However, it is essential to be
                  responsible and considerate of your surrounding in doing so.
                  Make sure you read up on the Scottish Outdoor Access Code
                  before you go, and make yourself aware of the dos and don'ts
                  of wild camping in Scotland.
                </p>
              </ColumnThree>
            </CampingContainer>
          </ContentInput>
          <ContentInput id="clyneslish">
            <CampingContainer>
              <ColumnTwo>
                <h3>Lighting Fires</h3>

                <p>
                  Lighting a fire is a good source of heat and way to cook food
                  when wild camping, but there are ways to do this that ensure
                  safety for you and the surrounding landscapes.
                  <br />
                  <br />
                  🔥Where possible, use a stove rather than an open fire
                  <br />
                  🔥If you light a fire, keep it small, controlled and
                  supervised
                  <br />
                  🔥Never light an open fire during prolonged dry periods or in
                  areas such as forests, woods, farmland, or on peaty ground
                  <br />
                  🔥Make sure the fire has been properly extinguished and remove
                  all traces of an open fire before you leave the area
                </p>
              </ColumnTwo>
              <ColumnThree>
                <WildCampImage5 />
              </ColumnThree>
            </CampingContainer>
          </ContentInput>
          <ContentInput id="gairloch-hotel">
            <CampingContainer>
              <ColumnTwo>
                <WildCampImage4 />
              </ColumnTwo>
              <ColumnThree>
                <h3>Tips to Remember</h3>

                <p>
                  Leave camp as you found it
                  <br />
                  <br />
                  Avoid digging or removing vegetation and boulders; choose a
                  flat, dry area to pitch your tent
                  <br />
                  <br />
                  Ask nearby residents if you wish to camp near houses
                  <br />
                  <br />
                  Vehicles are damaging on grass and soft land; make sure you
                  park on hard ground or a safe metalled area
                  <br />
                  <br />
                  Avoid sites that are at risk of overuse
                  <br />
                  <br />
                  Take care with toilet hygiene. Use public toilets where
                  possible
                </p>
              </ColumnThree>
            </CampingContainer>
          </ContentInput>
          <ContentInput id="cluny-bank">
            <CampingContainer>
              <ColumnTwo>
                <h3>Preperation</h3>
                <p>
                  Wild camping comes with a lot of extra kit to carry. Your
                  tent, sleeping bag, mat, cooking equipment, more food and
                  sleeping bag liners can all add up. The one thing you really
                  do have control over is the food; this sounds obvious but
                  don’t take tins, cans, glass jars, or anything that doesn’t
                  crumple down. Yes, I do know people that have carried cans of
                  soup on camping trips, and no that 500 gram block of cheese
                  you thought was a great idea two days ago is not looking so
                  great now. Remember you also have to carry your litter! Also,
                  trying to be ultra-light is fine but sort your priorities out;
                  there’s little point cutting your toothbrush in half to save
                  weight when you’ve crammed in that hardback of War and Peace
                  you’re not going to touch other than on the train.
                </p>
              </ColumnTwo>
              <ColumnThree>
                <WildCampImage6 />
              </ColumnThree>
            </CampingContainer>
          </ContentInput>
        </ColumnOne>
      </ContentWrapper>
    </WildCampImageContainer>
  )
}

export default WildCamping

const WildCampImageContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const Description = styled.p`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  font-weight: bold;
  background: #f26a2e;
  color: white;
  display: flex;
  justify-content: center;
  width: max-content;
  padding: 1rem;
  border-radius: 14px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const ContentInput = styled.div`
  padding: 2rem;
  height: max-content;
  width: auto;

  h3 {
    margin-bottom: 0.5rem;
    background: #f26a2e;
    color: white;
    width: max-content;
    padding: 1rem;
    border-radius: 14px;
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1300px) {
      font-size: clamp(0.5rem, 2.5vw, 1.5rem);
    }
  }
  p {
    color: #3b3b3b;
  }

  @media screen and (max-width: 700px) {
    padding: 2rem;
  }
`
const CampingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  @media screen and (max-width: 1540px) {
  }
  @media screen and (max-width: 1440px) {
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  p,
  a {
    padding: 1rem;
  }
`
const ColumnThree = styled.div`
  display: grid;
  grid-template-rows: 1fr ;
  align-items: center;
  grid-template-columns: 1fr ;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  } 
  }
  p, a {
    padding: 1rem;
  
  }
`
const WildCampImage1 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgOne}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`
const WildCampImage2 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgTwo}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`
const WildCampImage3 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgThree}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`
const WildCampImage4 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgFour}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`

const WildCampImage5 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgFive}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`
const WildCampImage6 = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WildCampImgSix}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`
