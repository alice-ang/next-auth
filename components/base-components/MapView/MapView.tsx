import { FC, useRef, useState } from "react"
import Map, {
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
  NavigationControl,
} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import type { MapRef } from "react-map-gl"
import type { GeoJSONSource } from "react-map-gl"

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
  polygonLayer,
} from "./layers"

type MapProps = {
  lat: number
  lng: number
}

export const MapView: FC<MapProps> = ({ lat, lng }) => {
  const mapRef = useRef<MapRef>(null)
  const [showPopup, setShowPopup] = useState(true)

  const [settings, setsettings] = useState({
    dragPan: true,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: true,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: true,
  })
  const onClick = (event: any) => {
    const feature = event.features[0]
    const clusterId = feature.properties.cluster_id

    const mapboxSource = mapRef.current?.getSource("listings") as GeoJSONSource
    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return
      }

      mapRef.current?.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      })
    })
  }

  return (
    <div className="h-[350px] lg:h-[500px] w-full">
      <Map
        {...settings}
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {/* <Marker longitude={lng} latitude={lat} anchor="bottom">
          <img src="/location_review.svg" className="h-10 w-10" />
        </Marker> */}
        <GeolocateControl />
        <FullscreenControl position="top-left" />
        <NavigationControl />

        <Source
          id="listings"
          type="geojson"
          data="./listings.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...polygonLayer} />
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </div>
  )
}
