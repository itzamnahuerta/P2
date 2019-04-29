import React, { Component } from 'react'
import './ListOfOrgs.css'

class ListOfOrgs extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }


  render() {
    //   console.log(this.props.data)
    return (

      <div className='nychomes-list'>
            {/* {this.props.charities.map((charity, index) =>
                <p key={index}> 
                <a href={charity.charityNavigatorURL}>  {charity.charityName}</a> 
                </p>  */}
            
            )} 
      </div>
    )
  }
}
export default ListOfOrgs