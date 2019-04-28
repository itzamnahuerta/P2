import React, {Component} from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import Geocode from 'react-geocode'

import CharityPin from './CharityPin'
import CharityInfo from './CharityInfo'
import { tsConstructorType } from '@babel/types';


class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
        viewport: {
        width: 800,
        height: 600,
        latitude: 45.7577,
        longitude: -92.4376,
        zoom: 4,
      },
      popupInfo: null,
      geocodeData: []
    }
    this._renderMarker = this._renderMarker.bind(this)
    // this._renderPopup = this._renderPopup.bind(this)
  }

//   componentDidMount() {
//     Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
//     // this.setState({charities: this.props.charities}); 
//     console.log(this.props.charities)


//     // Geocode.fromAddress()
//     // .then(
//     //     response => {
//     //         console.log('Got a RESPONSEEEEEEEEE')
//     //         // response.results[0].geometry.location

//     //         this.setState({
//     //             geocodeData: response
//     //         })
//     //     }
//     // ).catch(
//     //     error => {
//     //         console.log('there is an error here componentDidMount',error)
//     //     }
//     // )

//   }

  _renderMarker(charity, index) {
    const charityName = charity.charityName
    // console.log('this is froxm rendermarker',charity)

    // HARDCODED & WORKING PIN ON MAP ======== SAVE ===============
    // const lat = 40.7306;
    // const lng = -73.968285;
    // console.log('render marker was called')

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)

    Geocode.fromAddress(charityName)
    .then(
        response => {
            // console.log(response)
            let { lat, lng }  = response.results.geometry.location
            // console.log(`response is:`)
            // console.log(response)
            // console.log(`App.js line 71`)
            console.log(lat, lng)
            
            // return(
            //     <Marker key={`charity-${i}`} longitude={lng} latitude={lat}> 
            //     <CharityPin size={10} onClick={() => this.setState({popupInfo: charity})} /> 
            //     </Marker>
            // )
        }
    ).catch(
        error => {
            console.log('there is an error here   ',error)
        }
    )

    // return (
    //   <Marker longitude={lng} latitude={lat} >
    //     <CharityPin size={20} onClick={() => this.setState({popupInfo: charity})} />
    //   </Marker>
    // );
    }


    // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
    // Geocode.fromAddress(charityName)
    // .then(
    //     response => {
    //         // console.log(response)
    //         let { lat, lng }  = response.results[0].geometry.location
    //         // console.log(lat, lng)

    //         // return(
    //         //     <Marker key={`charity-${i}`} longitude={lng} latitude={lat}> 
    //         //     <CharityPin size={10} onClick={() => this.setState({popupInfo: charity})} /> 
    //         //     </Marker>
    //         // )
    //     }
    // ).catch(
    //     error => {
    //         console.log('there is an error here   ',error)
    //     }
    // )

    // return(
    //     <Marker key={`charity-${Math.random() * 1000}`} latitude={74.000} longitude={40.0000}> 
    //     <CharityPin size={10} onClick={() => this.setState({popupInfo: charity})} /> 
    //     </Marker>
    // )
    // }

//    30.22716909999999 -93.19738559999999
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

    console.log(this.state);
    const linkdata = this.props.charities;
    // console.log(linkdata)
    const { viewport } = this.state;
    // console.log('about to call render marker')
    // linkdata.length > 0 ? console.log(linkdata[0]) : null ;
    return (
    
      <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
    
        mapStyle="mapbox://styles/itzamnahuerta/cjuu88tuq45tg1fms37ihw14j"

        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY} >

        {linkdata.length > 1 ? linkdata.map((datum, index) => this._renderMarker(datum, index)) : null}

        {/* {this.state.geocodeData.length > 0 ? this._renderMarker(this.state.geocodeData[0], 1) : null } */}

        {/* { linkdata.map((datum, index) => this._renderMarker(datum,index)) } */}

        </ReactMapGL>
        

    )
  }
}
    
export default Map