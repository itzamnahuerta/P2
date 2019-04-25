import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Map from './component/Map/Map'
import ListOfOrgs from './component/ListOfOrgs/ListOfOrgs'

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      charities:[]

    }
    this.fetchCharityNav = this.fetchCharityNav.bind(this)
  }
  
  componentDidMount() {
    this.fetchCharityNav()
  }
  
  fetchCharityNav = () => {
    const app_key = process.env.REACT_APP_CHARITYNAV_KEY
    const app_id = 'd2654c25'
    const url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${app_key}&search=immigration`

    axios.get(url)
    .then(response => {
      this.setState({
        charities: response.data
      })
    })
  }

  render() {
    // console.log('article example from app js' , this.state.charities[0])
    return (
      <div> 
        <h1> info</h1>
        <div className="flexcontainer">
          <Map className='mapContainer' component={Map} charities={this.state.charities} />
          <ListOfOrgs className='orgContainer' charities={this.state.charities} />
        </div>
      </div>
    )
  }
}


export default App;
