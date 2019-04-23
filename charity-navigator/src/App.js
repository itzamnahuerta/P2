import React, { Component } from 'react'
import './App.css';
import axios from 'axios'






class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      data:[]
    }
  }
  
  componentDidMount() {
    this.fetchCharityNav()
  }
  
  fetchCharityNav = () => {
    const app_key = process.env.REACT_APP_CHARITYNAV_KEY
    console.log('my key',app_key)
    const app_id = 'd2654c25'


    const url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${app_key}&search=immigration
    `

    axios.get(url)
    .then(response => {
      console.log(response.data)
      return response
    })
  }

  render() {
    return (
      <div>
        <h1> my app </h1>
      </div>
    )
  }
}


export default App;
