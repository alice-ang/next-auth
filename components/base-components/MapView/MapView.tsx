import React, { FC, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

type MapProps = {
  lat: number
  lng: number
  showGeocoder?: boolean
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">
  onMapLoaded?(map: mapboxgl.Map): void
  onMapRemoved?(): void
  addressCallback?: any
}

export const MapView: FC<MapProps> = ({
  onMapLoaded,
  addressCallback,
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

      addressCallback(e.result.place_name)
      setCurrentMarker(
        new mapboxgl.Marker({
          color: "#6B63FC",
        })
      )
      if (currentMarker) {
        currentMarker
          .setLngLat(e.result.center)
          .setPopup(popup)
          .addTo(mapboxMap)
      }
    })

    mapboxMap.addControl(new mapboxgl.NavigationControl(), "bottom-right")
    if (showGeocoder) {
      mapboxMap.addControl(geocoder)
    }

    setMap(mapboxMap)

    mapboxMap.on("load", () => {
      mapboxMap.addSource("listings", {
        type: "geojson",
        data: "./listings.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      })

      mapboxMap.addLayer({
        id: "clusters",
        type: "circle",
        source: "listings",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#6c63ff",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      })

      mapboxMap.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "listings",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 15,
        },
        paint: {
          "text-color": "#ffffff",
        },
      })
      mapboxMap.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "listings",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#6c63ff",
          "circle-radius": 10,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
        },
      })
    })

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
