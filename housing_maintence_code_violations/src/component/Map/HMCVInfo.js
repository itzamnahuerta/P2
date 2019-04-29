import React, { PureComponent } from 'react';

class CharityInfo extends PureComponent {

  render() {
    const { info } = this.props.data;
    const displayName = `${info.boro}`;

    return (
      <div>
        <div>{displayName}</div>
        <h1> not sure what info </h1>
      </div>
    )
  }
}

export default CharityInfo;