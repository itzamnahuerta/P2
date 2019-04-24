import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Map from './component/Map/Map'



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
        <h1> this is a hate free zone </h1>
        <Map charities={this.state.charities} />

      </div>
    )
  }
}


export default App;
