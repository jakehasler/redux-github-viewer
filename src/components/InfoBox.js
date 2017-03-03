import React, { Component } from 'react';

class InfoBox extends Component {
  render() {
    const { keyName, value } = this.props;
    return (
      <div className="info-box">
        <h3>{keyName}: {value}</h3>
      </div>
    )
  }
}

export default InfoBox;
