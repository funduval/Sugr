import React, { Component } from 'react';

export default class Logo extends Component {
  render() {

    return (

      <div className="logo">
        <img className="bgImage" src={require( '../assets/images/orange.png' )} style={{width:'100%'}} />
        <h1>Sugr</h1>
      </div>

    );
  }
}
