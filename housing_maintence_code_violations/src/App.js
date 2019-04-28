import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
// import Map from './component/Map/Map'
// import ListOfOrgs from './component/ListOfOrgs/ListOfOrgs'



class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      charities:[],
    }
    this.fetchHMCV = this.fetchHMCV.bind(this)
  }
  
 

  fetchHMCV = () => {
    const url = `https://data.cityofnewyork.us/resource/b2iz-pps8.json`

    axios.get(url)
    .then(response => {
      // console.log('from app.js ==> ',response.data)

      this.setState({
        data: response.data, 
      })
    })
  }



  componentDidMount() {
    this.fetchHMCV()

  }
  render() {
    
    return (
      <div> 
        <header> <span> HOUSING MAINTENANCE CODE VIOLATIONS IN NYC</span> 
        </header> 
        <p className="projectDescription">Pursuant to New York City’s Housing Maintenance Code, the Department of Housing Preservation and Development (HPD) issues violations against conditions in rental dwelling units that have been verified to violate the New York City using Maintenance Code (HMC) or the New York State Multiple Dwelling Law (MDL). Violations are issued when an inspection verifies that a violation of the HMC or MDL exists. It is closed when the violation is corrected, as observed/verified by HPD or as certified by the landlord. </p>
        <div className="flexcontainer">
          {/* <Map className='mapContainer' component={Map} charities={this.state.charities} /> */}
          {/* <ListOfOrgs className='orgContainer' charities={this.state.charities} /> */}
        </div>
      </div>
    )
  }
}


export default App;
