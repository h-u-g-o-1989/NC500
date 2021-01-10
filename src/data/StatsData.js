import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"
import { FaCarAlt, FaCameraRetro, FaRoad, FaBed } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <FaRoad
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "A guide to this epic drive",
    desc: "500 miles around the northern part of Scotland",
  },
  {
    icon: (
      <FaCarAlt
        css={`
          color: #e7f627;
        `}
      />
    ),
    title: "Explore",
    desc:
      "The drive is a great way to explore the what the country has to offer",
  },
  {
    icon: (
      <FaCameraRetro
        css={`
          color: #fa212b;
        `}
      />
    ),
    title: "Site Seeing Spots",
    desc: "We can show you some of the best spots to stop along the way",
  },
  {
    icon: (
      <FaBed
        css={`
          color: #0cdb32;
        `}
      />
    ),
    title: "Where to stay",
    desc: "Plenty of choice for either wild camping or more luxurious options",
  },
]
