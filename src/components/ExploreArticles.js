import React from "react"
import styled from "styled-components"
import NatureImg from "../Assets/images/explore-nature-stag.jpg"
import WaterfallImg from "../Assets/images/explore-waterfalls1.jpg"
import BeachImg from "../Assets/images/explore-beaches2.jpg"
import LochImg from "../Assets/images/explore-lochs1.jpg"
import ExploreWaterfalls from "../components/ExploreWaterfalls"
import ExploreNature from "../components/ExploreNature"
import ExploreBeaches from "../components/ExploreBeaches"
import ExploreLochs from "../components/ExploreLochs"

const ExploreArticles = () => {
  return (
    <ExploreArticlesContainer>
      {/* <TopLine>ContentInputs</TopLine> */}
      <Description id="nature">The Best Of Nature</Description>
      <ContentWrapper>
        <ColumnOne>
          <ContentInput id="the-wild-life">
            <h3>The Wild Life</h3>
            <NatureImage />
            <CountyInfo>
              <ColumnTwo>
                <p>
                  Home to over 90,000 species, Scotland has a rich and diverse
                  natural history which attracts thousands of
                  wildlife-enthusiasts each year. Scotland’s land, seas and
                  skies support a wide range of native mammals and birds, as
                  well as six amphibians, four reptiles and over 50,000
                  different invertebrates.
                  <br />
                  <br />
                  Whether you want to hear the cheerful chirp of a dawn chorus,
                  see a graceful soaring white-tailed sea eagle, or sail
                  alongside playful dolphins, there are incredible opportunities
                  to get up close and personal with the wildest of our
                  residents. Scotland's landscapes are home to an incredible
                  array of wildlife that you can find in all nooks, crannies and
                  corners of the country.
                  <br />
                  <br />
                  WILD ANIMALS TO SPOT IN SCOTLAND There is an abundance of
                  wildlife species you can spot across Scotland in a range of
                  natural habitats. Here are just a few to keep your eyes peeled
                  for:
                  <br />
                  <br />
                  PUFFIN These hardy little birds are one of the many bird
                  species you are bound to come across on your travels around
                  Scotland.
                  <br />
                  <br />
                  RED DEER One of the most iconic animals associated with
                  Scotland, the red deer is the UK's largest land mammal and can
                  be spotted in almost every region in the country.
                  <br />
                  <br />
                  SEALS Grey seals are very common inhabitants you can see off
                  the coastlines of Scotland. Keep your eyes peeled in the
                  autumn months to see if you can spot fluffy grey seal pups
                  too!
                  <br />
                  <br />
                  RED SQUIRREL Much smaller than their grey cousins, the fluffy
                  red squirrel is an elusive addition to Scotland's forests and
                  woodlands. Make sure you keep quiet as go on the lookout for
                  these gorgeous little mammals.
                  <br />
                  <br />
                  THE CAPERCAILLIE Male capercaillies are renowned for their
                  vigorous, and elaborate mating displays. They all gather at a
                  ‘lekking’ site, each with a territorial portion and strut,
                  point their beaks skyward, jump, rustle about, and make odd
                  cork “popping” sounds.
                  <br />
                  <br />
                  HUMPBACK WHALE What many don’t know is that the coastline of
                  the Highlands of Scotland, is a prime place to go humpback
                  whale watching. Commercial whaling has desecrated whale
                  populations in the UK. In fact, until recently if you’d said
                  “I’ve seen a humpback whale in Scottish waters” you may have
                  been laughed at. No longer – UK whaling is history. Migrating
                  pods of Megaptera novaeangliae (to use their catchy Latin
                  name) are returning.
                  <br />
                  <br />
                  PINE MARTIN Unfortunately, you might be waiting a wee while to
                  catch a glimpse of one of these covert tree dwellers.
                  Notoriously one of the hardest highland animals to find.
                  Saying that, although rare, they have been known to creep into
                  gardens for the odd morsel lying on a bird table. Weird fact:
                  pine martens sometimes have blue droppings.
                  <br />
                  <br />
                  GOLDEN EAGLE The thing is, in some parts of the British Isles
                  one would be forgiven for thinking it’s just sparrows, or
                  seagulls that grace our skies. As false as this is, eagles are
                  still in a league of their own. Keep your eyes up this summer
                  if you’re relaxing by a serene loch – perhaps one will fly
                  over. They’re hard to miss with their golden brown flecked
                  plumage, and two-metre wingspans.
                </p>
              </ColumnTwo>
              <ColumnThree>
                <ExploreNature />
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="waterfalls">
            <h3>The waterfalls</h3>
            <WaterfallImage />
            <CountyInfo>
              <ColumnTwo>
                <p>
                  Known for our changeable and unpredictable weather, there’s no
                  denying Scotland has a lot of water! As well as keeping our
                  ancient forests lush and green, it also powers the rivers and
                  burns that feed in to some of the most impressive waterfalls
                  in the country. You’ll see plenty of waterfalls on your trip
                  around the North Coast 500, but here’s a few we think
                  shouldn’t be missed!
                  <br />
                  <br />
                  The thundering Falls of Shin is famous for being one of the
                  best places in the Highlands to watch the majestic Atlantic
                  Salmon leap upstream. Watch from the viewing platform as they
                  attempt to leap clear of the water, and enjoy amazing views
                  both up and down the River Shin.
                  <br />
                  <br />
                  The Ugly Hollow, this mile-long box canyon may take its name
                  for the Gaelic for ‘ugly hollow’ but it’s one of the most
                  spectacular gorges of its type in Britain. Cut by Ice Age
                  glacial meltwater, over 2.6 billion years ago, the River Droma
                  forged its way through the Corrieshalloch Gorge, dramatically
                  dropping 100 metres in just 1.25km through a series of
                  waterfalls, including the thunderous 45m high Falls of
                  Measach. Thrill seekers can view the thundering torrents from
                  a Victorian suspension bridge above or join Kayak Summer Isles
                  for a canyoneering expedition to explore the gorge itself!
                  <br />
                  <br />
                  Another impressive set of falls to watch wild salmon leap is
                  Rogie Falls, just outside Contin. Aided by the man-made salmon
                  ladder which bypasses the main cascade, the salmon reach the
                  top of the falls and head on up the river to their spawning
                  grounds. Learn more about their journey at the viewing
                  platform before stepping out over the water on to the
                  suspension bridge to see the falls face-on. Continue along the
                  trail beside the river to follow the salmon’s journey
                  upstream.
                  <br />
                  <br />
                  You might not spot any fairies when you visit the Fairy Glen
                  in the Black Isle (they can be shy around us), but the magical
                  broadleaf woodland and two stunning waterfalls will more than
                  make up for it! This small nature reserve is the perfect place
                  to relax and connect with nature, you might event spot a
                  buzzard circling overhead or a grey heron stalking fish along
                  the glittering stream.
                  <br />
                  <br />
                  Eas A’Chual Aluinn, Britain’s highest waterfall. With a sheer
                  drop of over 200m, Eas A’Chual Aluinn is the highest waterfall
                  in Britain; and when in full flow, it’s over three times
                  higher than Niagara Falls! A six mile hike takes you in to the
                  heart of Assynt’s rocky landscape, past pretty lochans and
                  streams to reach the best vantage point near the top of the
                  falls.
                </p>
              </ColumnTwo>
              <ColumnThree>
                <ExploreWaterfalls />
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="beaches">
            <h3>The Beaches</h3>
            <BeachImage />
            <CountyInfo>
              <ColumnTwo>
                <p>
                  The NC500 is abundant with spectacular beaches which you can
                  ejoy all year round.
                  <br />
                  <br />
                  From Rosemarkie Beach, this incredible sandy beach, near
                  Fortrose on the Black Isle, stretches out into the mouth of
                  the Moray Firth. Rosemarkie Beach marks the beginning of the
                  Hillockhead circuit, a circular walk continuing along rough,
                  rocky coastlines. Wander through country lanes and wooden
                  glens, and past waterfalls in the Fairy Glen Nature Reserve,
                  before arriving back at the beach. Perfect for all the family.
                  <br />
                  <br />
                  To Golspie Beach. The fishing village of Golspie, and its
                  namesake beach, has some of the cleanest sand on the east
                  coast.
                  <br />
                  <br />
                  With calm waters, it’s a great place for a leisurely, scenic
                  stroll. Why not complete the coastal walk from Brora to
                  Golspie, which meanders through small harbours and sandy
                  beaches? You will also pass the iron age broch at Strathsteven
                  and the majestic Dunrobin Castle. The walk is six and ¾ miles
                  long, you may want to make use of the train for the return leg
                  of the journey.
                  <br />
                  <br />
                  Theres also Dornoch Beach, passing by Embo beach and heading
                  towards the mouth of the Loch Fleet National Nature Reserve,
                  Dornoch Beach has been granted Seaside Award status as a clean
                  bathing beach. The area is also a haven for wildlife; adjacent
                  to the sands, you’ll find a site of specific scientific
                  interest featuring nesting birds, flora and fauna.
                  <br />
                  <br />
                  The seaside town of Dornoch is a popular destination to
                  venture off the beaten path – with an array of unique high
                  street retailers, world class golf and superb Highland
                  hospitality.
                  <br />
                  <br />
                  Melvich Beach is accessed via a rough, narrow road – so take
                  your time as you drive towards the sands! It’s well worth the
                  journey, however. Once you’ve parked your car, the beach can
                  be accessed by a short walk through the dunes. Popular with
                  year-round walkers, surfers and fair weather sunbathers alike,
                  Melvich Beach is one of the finest beaches in the north. The
                  small stretch of unspoilt pristine white sands boasts clear
                  turquoise waters, backed by grassy dunes.. Keep your eyes
                  peeled – you might be lucky to catch sight of an otters, seals
                  and an array of nesting birds.
                </p>
              </ColumnTwo>
              <ColumnThree>
                <ExploreBeaches />
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
          <ContentInput id="lochs">
            <h3>The Mountains & Lochs</h3>
            <LochImage />
            <CountyInfo>
              <ColumnTwo>
                <p>
                  No trip to the Highlands would be complete without climbing a
                  Munro or two. The towering peaks of Suilven and An Teallach
                  can be reached from the NC500 and offers breathtaking views of
                  the northern Highlands if you fancy a scramble. Alternatively,
                  hike Scotland’s most northerly Munro, Ben Hope – an isolated
                  mountain, accessible from the village of Tongue on the north
                  coast of Sutherland. Test your legs with a short but steep
                  climb to the top, where you’ll be rewarded with a view of the
                  wild northern landscape.
                  <br />
                  <br />
                  Following the rocky coast of the Applecross Peninsula, the
                  North Coast 500 passes Cuaig, where crofters at Croft Wools
                  spin wool from sheep that graze heather-covered hills and
                  munch seaweed on the shore. Behind the whitewashed cottages of
                  the pretty fishing village of Shieldaig, the mountains of
                  Torridon loom.
                  <br />
                  <br />
                  The route through Glen Torridon reveals the spectacular
                  mountain scenery of Beinn Eighe, Britain’s first national
                  nature reserve. When the road winds back to the coast at Loch
                  Gairloch, there’s a delightful detour to the amber sands of
                  Redpoint Beach, with views to the isles of Skye and Rona. From
                  Charlestown, a coastal crofting township, you can join a boat
                  trip to see harbour porpoises, seals, whales, and dolphins.
                  <br />
                  <br />
                  Heading a little south from Loch Assynt and the North Coast
                  500 passes by Knockan Crag, a National Nature Reserve which is
                  notable for its outstanding geological features. Knockan Crag
                  National Nature Reserve Visitor Centre From the car park and
                  hillside here there are spectacular views across the Scottish
                  highlands, including the twin summited mountain of Cul Mor and
                  a number of lochs. It’s also a nice place to get above the
                  road and get some shots of the North Coast 500 itself. When we
                  visited here we were lucky enough to see a supercar club drive
                  past, with millions of pounds worth of Aston Martins,
                  Corvettes, Ferraris, and Lamborghinis, amongst others, roar on
                  by.
                  <br />
                  <br />
                  Of course we couldnt leave out the most infamous Loch Ness.
                  This beautiful loch located near Inverness is shrouded in
                  mystery. Tales of a large monster living deep beneath the dark
                  expanses of Loch Ness have circulated the world since the
                  first photograph emerged in 1933. With over 1,000 eye-witness
                  accounts, sightings and unexplained evidence, scientists
                  continue to be baffled by the existence of Nessie. See for
                  yourself on a boat trip and Nessie cruise from Inverness, Fort
                  Augustus and Drumnadrochit. Did you know that Loch Ness
                  contains more water than all the lakes of England and Wales
                  combined, making it the most voluminous lake in the UK? This
                  corner of the Highlands is world-famous for its dramatic
                  scenery, great adventure sports and nearby castles and
                  solitary lighthouses dotting the landscape. So take a Loch
                  Ness break and enjoy a monster holiday!
                </p>
              </ColumnTwo>
              <ColumnThree>
                <ExploreLochs />
              </ColumnThree>
            </CountyInfo>
          </ContentInput>
        </ColumnOne>
        {/* </ColumnTwo> */}
      </ContentWrapper>
    </ExploreArticlesContainer>
  )
}

export default ExploreArticles

const ExploreArticlesContainer = styled.div`
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
    margin-bottom: 1rem;
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
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  p {
    padding: 1rem;
  }
`
const ColumnThree = styled.div`
  display: grid;
  grid-template-rows: 1fr ;
 



    display: grid;
  grid-template-columns: 1fr ;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  } 
  }
`
const NatureImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${NatureImg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  ${"" /* border: 4px solid #f26a2e; */}
`
const WaterfallImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${WaterfallImg}) no-repeat center;
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
const BeachImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${BeachImg}) no-repeat center;
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
const LochImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${LochImg}) no-repeat center;
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
