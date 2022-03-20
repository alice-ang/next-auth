import { FC, useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"

type MapProps = {
  lat: number
  lng: number
}

export const Map: FC<MapProps> = ({ lat, lng }) => {
  const [map, setMap] = useState<mapboxgl.Map>()
  const mapNode = useRef(null)

  useEffect(() => {
    const node = mapNode.current
    if (typeof window === "undefined" || node === null) return

    const mapboxMap = new mapboxgl.Map({
      container: node,
      // accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      accessToken:
        "pk.eyJ1IjoiYWFsaWNlZWxpbiIsImEiOiJjbDB3djc2aXgxZHQ4M2lubTdvcm02ZXR4In0.QsCTqXv66yNjcaFfWu7w8Q",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 14,
    })

    mapboxMap.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
    setMap(mapboxMap)

    return () => {
      mapboxMap.remove()
    }
  }, [])

  return <div ref={mapNode} style={{ width: "100%", height: "450px" }} />
}
