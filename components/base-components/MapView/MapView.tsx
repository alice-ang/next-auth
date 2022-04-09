import React, { FC, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import { Marker } from "react-map-gl"

type MapProps = {
  lat: number
  lng: number
  showGeocoder?: boolean
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">
  onMapLoaded?(map: mapboxgl.Map): void
  onMapRemoved?(): void
}

export const MapView: FC<MapProps> = ({
  initialOptions = {},
  onMapLoaded,
  lat,
  lng,
  showGeocoder,
}) => {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = useState<mapboxgl.Map>()
  const [currentMarker, setCurrentMarker] = useState<mapboxgl.Marker>()
  const mapNode = useRef(null)

  useEffect(() => {
    const node = mapNode.current
    if (typeof window === "undefined" || node === null) return

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: 14,
    })

    const geocoder = new MapboxGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_API ?? "",
      marker: false,
    })

    geocoder.on("result", function (e) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${e.result.place_name}`
      )
      geocoder.clear()

      setCurrentMarker(
        new mapboxgl.Marker({
          draggable: true,
          color: "#6B63FC",
        })
      )
      if (currentMarker) {
        currentMarker
          .setLngLat(e.result.center)
          .setPopup(popup)
          .addTo(mapboxMap)
      }

      setCurrentMarker(
        new mapboxgl.Marker({
          draggable: true,
          color: "#6B63FC",
        })
      )
    })

    mapboxMap.addControl(new mapboxgl.NavigationControl(), "bottom-right")
    if (showGeocoder) {
      mapboxMap.addControl(geocoder)
    }

    setMap(mapboxMap)

    if (onMapLoaded) {
      mapboxMap.once("load", onMapLoaded)
    }

    return () => {
      mapboxMap.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapNode} className="h-[350px] lg:h-[500px] w-full"></div>
}
