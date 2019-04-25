import React, { Component } from 'react'
import './ListOfOrgs.css'

class ListOfOrgs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            charityName: '',
            orgs: []
        }

    }


  render() {
      console.log(this.props.charities)
    return (

      <div className='orgs-list'>
            {this.props.charities.map((charity, index) =>
                <p key={index}> 
                <a href={charity.charityNavigatorURL}>  {charity.charityName}</a> 
                </p> 
            
            )} 
      </div>
    )
  }
}
export default ListOfOrgs