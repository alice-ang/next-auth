import { FC } from "react"
import Map, { Marker, GeolocateControl, FullscreenControl } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

type MapProps = {
  lat: number
  lng: number
}

export const MapView: FC<MapProps> = ({ lat, lng }) => {
  const parkLayer = {
    id: "landuse_park",
    type: "fill",
    source: "mapbox",
    "source-layer": "landuse",
    filter: ["==", "class", "park"],
    paint: {
      "fill-color": "#4E3FC8",
    },
  }
  return (
    <div className="h-[350px] lg:h-[500px] w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <img src="/location_review.svg" className="h-10 w-10" />
        </Marker>
        <GeolocateControl />
        <FullscreenControl position="top-left" />
      </Map>
    </div>
  )
}
