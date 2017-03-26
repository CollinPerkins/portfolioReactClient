import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TopHeader extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="">
        <Link className="" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="" key={1}>
          <Link className="" to="/signin">Sign In</Link>
        </li>,
        <li className="" key={2}>
          <Link className="" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="">
        <div className="topNav">
          <div className="container">
            <ul>
              <li>
                <Link to="/" className="">Collin's Perkins</Link>
              </li>
            </ul>
            <ul className="pull-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
        <div className="bottomNav">
          <div className="container">
            <ul>
              <li>
                <Link to="/" className="">About Me</Link>
              </li>
              <li>
                <Link to="/experience" className="">Experience</Link>
              </li>
              <li>
                <Link to="/portfolio" className="">Portfolio</Link>
              </li>
              <li>
                <Link to="/contactme" className="">Contact Me</Link>
              </li>
            </ul>
            <ul className="pull-right">
              <li>
                <Link to="/blog" className="">Blog</Link>
              </li>
              <li>
                <Link to="/" className="">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(TopHeader);
