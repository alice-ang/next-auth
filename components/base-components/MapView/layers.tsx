import type { LayerProps } from "react-map-gl"

export const clusterLayer: LayerProps = {
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
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
}

export const clusterCountLayer: LayerProps = {
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
}

export const unclusteredPointLayer: LayerProps = {
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
}

export const polygonLayer: LayerProps = {
  id: "school-polygon",
  type: "fill",
  source: "listings",
  paint: {
    "fill-color": "#0080ff", // blue color fill
    "fill-opacity": 0.5,
  },
}
