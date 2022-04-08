import { createElement, Component } from "react"
import { Map } from "mapbox-gl"
import PropTypes from "prop-types"
import { accessToken } from "./token"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

class Geocoder extends Component {
  static contextTypes = { map: PropTypes.object.isRequired }

  context: {
    map: Map
  }

  componentDidMount() {
    const { map } = this.context

    map.addControl(
      new MapboxGeocoder({
        process.env.NEXT_PUBLIC_MAPBOX_API
      })
    )
  }

  render() {
    return null
  }
}

export default Geocoder
