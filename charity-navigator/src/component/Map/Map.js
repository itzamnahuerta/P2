import React, {Component} from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import Geocode from 'react-geocode'


import CharityPin from './CharityPin'
import CharityInfo from './CharityInfo'



class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
        viewport: {
        width: 600,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      },
      popupInfo: null
    }
    this._renderMarker = this._renderMarker.bind(this)
    this._renderPopup = this._renderPopup.bind(this)

  }




  _renderMarker(charity, i) {
    const charityName = charity.charityName
    // console.log(charityName)

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)


    Geocode.fromAddress(charityName).then(
        response => {
            const { lat, lng }  = response.results[0].geometry.location
            console.log(lat,lng)
        }, 
        error => {
            console.log(error)
        }
    )


    // let mapboxClient = mapboxSdk({ accessToken: process.env.REACT_APP_MAPBOX_KEY});
    // mapboxClient.geocoding.forwardGeocode({
    //     query: charityName,
    //     autocomplete: false,
    //     limit: 1
    // })
    // .send()
    // .then(function (response) {
    //     if (response && response.body && response.body.features && response.body.features.length) {
    //         var feature = response.body.features[0];

    //         var map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: feature.center,
    //         zoom: 10
    //         });
    //         new mapboxgl.Marker()
    //         .setLngLat(feature.center)
    //         .addTo(map);
    //     }
    // });
 

    // const lng = postoffice.the_geom.coordinates[0];

    // return(
    //   <Marker key={`charity-${i}`}
    //     country={country}> 
    //     <CharityPin /> 
    //   </Marker>
    // )

  }

  _renderPopup(){
    // console.log('this state for renderpopup function',this.state)

    // const popupInfo = this.state;
    // console.log(popupInfo.postoffices.map(el => {
    
    //   const lat = el.the_geom.coordinates[0]
    //   const lng = el.the_geom.coordinates[1]
    //   return popupInfo && (
    //     <Popup tipSize={5}
    //       // anchor="top"
    //       // will have to be by state not lng and lat
    //       // longitude={lng}
    //       // latitude={lat}
    //       onClose={() => this.setState({popupInfo: null})} >
    //       <PostOfficeInfo info={popupInfo} />
    //     </Popup>
    //   );
    // }))
  }
    
  render() {
    const linkdata = this.props.charities;
    // console.log(linkdata)
    const { viewport } = this.state;
     
    return (
    
      <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        
        // map.Style="mapbox://styles/light-v9"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY} >

        {linkdata.map(this._renderMarker)}
        </ReactMapGL>
        

    )
  }
}
    
export default Map