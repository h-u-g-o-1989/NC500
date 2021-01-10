import React from "react"
import { Link } from "gatsby"
import { Icon } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import styled from "styled-components"
import antiClockwise from "../data/anti-clockwise.json"
import antiClockwiseCoordinates from "../data/anti-clockwise-coordinates"

export default function MapOne() {
  const routeColor = { color: "#F26A2E", weight: 4 }

  const polyline = antiClockwiseCoordinates.map(
    data => (data = [data.locations[0], data.locations[1]])
  )

  const polylineReversed = polyline.map(function reverse(item) {
    return Array.isArray(item) && Array.isArray(item[0])
      ? item.map(reverse)
      : item.reverse()
  })

  return (
    <MapPage>
      <MapHeading id="route-map">The NC500 Interactive Route</MapHeading>
      <Tagline>Click on the icons for more information</Tagline>
      <MapContainer
        css={{
          width: "75%",
          height: "75vh",
          zIndex: "1",
          display: "flex",
          margin: "0 auto",
          marginBottom: "5rem",
          alignSelf: "center",
        }}
        center={[58.159112, -4.497009]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {antiClockwise.map(data => (
          <Marker
            key={data.id}
            position={[data.location[0], data.location[1]]}
            onClick={() => {
              // setActivePark(data.location, data.todo, data.placename)
              // console.log("Hello")
            }}
            Icon={Icon}
          >
            {" "}
            <Popup
              position={[data.location[0], data.location[1]]}
              onClose={() => {
                console.log("Bye")
                // setActivePark(null)
              }}
            >
              <div>
                <h2>{data.placename}</h2>
                <p>{data.todo}</p>
              </div>
            </Popup>{" "}
          </Marker>
        ))}
        <Polyline pathOptions={routeColor} positions={polylineReversed} />
      </MapContainer>
    </MapPage>
  )
}

const Tagline = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #000;
`
const MapHeading = styled.div`
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
const MapPage = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
  margin-bottom: 5rem;
`
