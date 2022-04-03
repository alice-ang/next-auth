import { FC, useRef } from "react"
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
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