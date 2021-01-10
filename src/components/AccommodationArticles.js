import React from "react"
import styled from "styled-components"
import KnockomieImg from "../Assets/images/hotel-2.jpg"
import OrdHouseImg from "../Assets/images/hotel-7.jpg"
import KessockHotelImg from "../Assets/images/hotel-3.jpg"
import ClynelishImg from "../Assets/images/hotel-4.jpg"
import GarliochImg from "../Assets/images/hotel-5.jpg"
import ClunyImg from "../Assets/images/hotel-6.jpg"

const Hotels = () => {
  return (
    <HotelsContainer>
      <Description id="hotels">A Good Night's Rest</Description>
      <ContentWrapper>
        <ColumnOne>
          <ContentInput id="Knockomie-inn">
            <CountyInfo>
              <ColumnTwo>
                <KnockomieImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>Knockomie Inn</h3>
                <a href="https://www.knockomie.co.uk/" target="_blank">
                  View Site<i>(external link)</i>
                </a>
                <p>
                  One of the Scottish Highlands most romantic places to stay...
                  A stylish Inn with rooms, relaxed atmosphere, friendly service
                  and excellent food. At the Knockomie Inn, in the Scottish
                  Highlands, we are proud of our luxury bedrooms; not one is the
                  same and they all have their fans! Each of our 15 bedrooms has
                  character and are individually styled. All are named after the
                  world renowned Speyside whisky distilleries. From cosy doubles
                  in the original house to spacious Grand Masters and Four
                  Poster bedrooms in the New Wing. All offering a comfortable
                  nights sleep. Most rooms are doubles but there are twin rooms
                  available at both Master and Grand Master rates. We have a
                  traditional Scottish Four-Poster room and a Colonial
                  Four-Poster room within the Inn, both very different offering
                  completely unique experiences. Whether you're looking for a
                  short break in Forres or an extended holiday in Inverness our
                  hotel is the perfect place to stay. We allow dogs in certain
                  rooms for a charge of £10.00 per dog per day.
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>

          <ContentInput id="ord-house">
            <CountyInfo>
              <ColumnTwo>
                <OrdHouseImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>Ord House</h3>
                <a href="https://www.ordhousehotel.co.uk/" target="_blank">
                  View Site<i>(external link)</i>
                </a>
                <p>
                  Our historic hotel is nestled within a 30-acre private estate
                  away from the hustle and bustle of modern day life. It is
                  though, ideally located for many of the local attractions,
                  including the famous Glen Ord Distillery which is just a 5
                  minute stroll away. The 12-guestroom hotel has been proudly
                  family-run for the past 30 years; for each of our guests we
                  offer a comfy bed, good food, great wine and a warm friendly
                  welcome. We look forward to seeing you at Ord House!
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="sutherland">
            <CountyInfo>
              <ColumnTwo>
                <KessockHotelImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>North Kessock Hotel</h3>
                <a href="https://www.northkessockhotel.co.uk/" target="_blank">
                  View Site<i>(external link)</i>
                </a>
                <p>
                  One of the finest hotel accommodations in it's class, the
                  North Kessock's waterfront location overlooks Inverness and
                  offers resident parking, slick professional service,
                  knowledgable local staff and location, location, location, all
                  of which adds up to a memorable holiday experience in and
                  around North Kessock, the Black Isle and Inverness, capital
                  city of the Highlands. In addition to high quality hotel
                  restaurant dining, serving some of the best food in the area,
                  North Kessock hotel has individually styled en-suite
                  accommodation with the usual refinements including slim vision
                  TV and binoculars for a bit of dolphin spotting. There are
                  also extensive gardens, terrace and patio areas .
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="clyneslish">
            <CountyInfo>
              <ColumnTwo>
                <ClynelishImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>Clynelish Farm B&B</h3>
                <a href="https://www.clynelishfarm.co.uk/" target="_blank">
                  View Site<i>(external link)</i>
                </a>
                <p>
                  Our heritage listed farmhouse has all the grandeur and
                  intrigue of a stately residence, but the welcome and
                  atmosphere of a relaxed home. Conveniently located on the
                  North Coast 500 (NC500) half way between Inverness and John
                  O'Groats, very near the picturesque and well serviced village
                  of Brora. Right next to Clynelish Distillery and less than ten
                  minutes from Dunrobin Castle. We hope to make your visit to
                  the Highlands memorable for all the right reasons.
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="gairloch-hotel">
            <CountyInfo>
              <ColumnTwo>
                <GarliochImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>Gairloch Hotel</h3>
                <a
                  href="https://bespokehotels.com/gairloch-hotel"
                  target="_blank"
                >
                  View Site<i>(external link)</i>
                </a>
                <p>
                  Nestled beside Gairloch Bay, The Gairloch Hotel overlooks
                  several quiet, secluded beaches, as well as offering
                  spectacular views of the world famous Isle of Skye. Surrounded
                  by a landscape rich in wildlife with unspoilt shores, lochs
                  and mountains, The Gairloch Hotel provides a perfect base for
                  holiday makers to take in some of the most beautiful scenery
                  to be found in Britain. With 70 bedrooms, as well as a
                  restaurant and lounge bar, guests can enjoy a calendar of live
                  entertainment on site, alongside all the tranquillity
                  associated with the beautiful scenery of Wester Ross. Raasay,
                  and the Western Isles.
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="cluny-bank">
            <CountyInfo>
              <ColumnTwo>
                <ClunyImage />
              </ColumnTwo>
              <ColumnThree>
                <h3>Cluny Bank</h3>
                <a href="https://clunybankhotel.co.uk/" target="_blank">
                  View Site<i>(external link)</i>
                </a>
                <p>
                  uny Bank takes pride of place in the heart of Moray, a
                  beautiful location on the north-east coast. — A
                  multi-award-winning restaurant, serving the finest local fresh
                  food, cooked to perfection by the chef/owner since 2006,
                  winning several prestigious awards along the way.
                </p>
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
        </ColumnOne>
      </ContentWrapper>
    </HotelsContainer>
  )
}

export default Hotels

const HotelsContainer = styled.div`
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
  grid-template-rows: 1fr;
`

const ContentInput = styled.div`
  padding-top: 2rem;

  height: max-content;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-style: italic;
    background: #f26a2e;
    color: white;
    width: max-content;
    padding: 1rem;
    border-radius: 14px;
  }
  p {
    color: #3b3b3b;
  }
`
const CountyInfo = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const ColumnThree = styled.div`
  display: grid;
  grid-template-rows: 1fr ;
    align-items: center;


    display: grid;
  grid-template-columns: 1fr ;
  margin-top: 1rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  } 
  }
  p, a {
    padding: 1rem;
  
  }
`
const KnockomieImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${KnockomieImg}) no-repeat center;
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
const OrdHouseImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${OrdHouseImg}) no-repeat center;
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
const KessockHotelImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${KessockHotelImg}) no-repeat center;
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
const ClynelishImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${ClynelishImg}) no-repeat center;
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

const GarliochImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${GarliochImg}) no-repeat center;
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
const ClunyImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${ClunyImg}) no-repeat center;
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
