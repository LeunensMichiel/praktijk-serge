import "mapbox-gl/dist/mapbox-gl.css"
import React, { useState } from "react"
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl"

import { MapWrapper } from "./contactStyles"

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.976323,
    longitude: 3.526634,
    zoom: 17,
  })
  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`${process.env.GATSBY_TOKEN_MAPBOX}`}
        mapStyle="mapbox://styles/michielleunens/ckgf4lko2czeg1as4qjzag3k0"
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <div style={{ position: "absolute", right: 12, top: 12 }}>
          <FullscreenControl />
        </div>
        <Marker latitude={50.976303} longitude={3.526223}>
          <div className="map__marker" />
        </Marker>
      </ReactMapGL>
    </MapWrapper>
  )
}

export default Map
