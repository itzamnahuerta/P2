import React, { PureComponent } from 'react';

class CharityInfo extends PureComponent {

  render() {
    const { info } = this.props.charityName;
    const displayName = `${info.charityName}`;

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )
  }
}

export default CharityInfo;