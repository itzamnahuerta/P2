import React from 'react'
// import OrgImage from ''


RowOfOrgs = () => {

    return(
        <div className='orgs-row'>
            {this.props.charities.map((charity, index) =>
            <p key={index}> {charity.irsClassification.affiliation}
            <a href={charity.charityNavigatorURL}>  {charity.charityName}</a> 
            </p> 

            )} 
        </div>
    )
}

export default RowOfOrgs