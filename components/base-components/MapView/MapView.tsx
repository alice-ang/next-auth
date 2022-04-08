import React, { FC, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

type MapProps = {
  lat: number
  lng: number
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">
  onMapLoaded?(map: mapboxgl.Map): void
  onMapRemoved?(): void
}

export const MapView: FC<MapProps> = ({
  initialOptions = {},
  onMapLoaded,
  lat,
  lng,
}) => {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = useState<mapboxgl.Map>()

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

    // save the map object to React.useState
    setMap(mapboxMap)

    if (onMapLoaded) mapboxMap.once("load", onMapLoaded)

    return () => {
      mapboxMap.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapNode} className="h-[350px] lg:h-[500px] w-full" />
}
