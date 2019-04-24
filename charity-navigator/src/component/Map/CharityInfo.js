import React, { PureComponent } from 'react';

class JournalistInfo extends PureComponent {

  render() {
    const { info } = this.props.charityName;
    const displayName = `${info.fullName}`;

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )
  }
}

export default JournalistInfo;