import React from 'react';
import { Component } from 'react';

import TopHeader from './nav/topheader';
// import MainNav from './nav/mainnav';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <div className="container">
          {this.props.children}
        </div>
        
      </div>
    );
  }
}
