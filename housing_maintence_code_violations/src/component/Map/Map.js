import React, {Component} from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

import HMCVPin from './HMCVPin'
import HMCVInfo from './HMCVInfo'

class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
        viewport: {
        width: 800,
        height: 600,
        latitude: 40.730610,
        longitude: -73.935242,
        zoom: 10,
      },
      popupInfo: null
    }
    this._renderMarker = this._renderMarker.bind(this)
    // this._renderPopup = this._renderPopup.bind(this)
  }


  _renderMarker(nycHomes, index) {
    const lat = Number(nycHomes.latitude)
    const lng = Number(nycHomes.longitude)
    // console.log('**** tesing ****',nycHomes)

    return (
      <Marker key={`nycHomes-${index}`}longitude={lng} latitude={lat} >
        <HMCVPin size={20} onClick={() => this.setState({popupInfo: nycHomes})} />
      </Marker>
    );
  }

//   _renderPopup(){
//     const popupInfo = this.state;
//     console.log(CharityInfo.map(el => {
        
//     //   const lat = el.the_geom.coordinates[0]
//     //   const lng = el.the_geom.coordinates[1]
//       return popupInfo && (
//         <Popup tipSize={5}
//           // anchor="top"
//           // will have to be by state not lng and lat
//         //   longitude={lng}
//         //   latitude={lat}
//           onClose={() => this.setState({popupInfo: null})} >
//           <CharityInfo info={popupInfo} />
//         </Popup>
//       );
//     }))
//   }
    
  render() {
    const linkdata = this.props.nycdata;
    const { viewport } = this.state;

    return (    
      <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY} >
        {linkdata.map(this._renderMarker)}
        </ReactMapGL>
    )
  }
}
    
export default Map