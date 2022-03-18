import { FC, useRef, useEffect, useState } from "react"
// eslint-disable-line import/no-webpack-loader-syntax
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

type MapProps = {
  lat: number
  lng: number
}

export const Map: FC<MapProps> = ({ lat, lng }) => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWFsaWNlZWxpbiIsImEiOiJjbDB3djc2aXgxZHQ4M2lubTdvcm02ZXR4In0.QsCTqXv66yNjcaFfWu7w8Q"

  useEffect(() => {
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 14,
    })

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
  }, [])

  return <div id="my-map" style={{ height: 500, width: "100%" }} />
}
