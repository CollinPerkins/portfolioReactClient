import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import $ from 'jquery';

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      author: ""
    };

    this.getQuote = this.getQuote.bind(this);
    this.newQuote = this.newQuote.bind(this);
}

  componentWillMount() {
    this.getQuote();
  }

  newQuote() {
    this.getQuote();
  }

  getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: function( response ) {
        this.setState({
          author: response.quoteAuthor,
          text: response.quoteText
        })
      }.bind(this)
    });
  }

  render() {
    return (
      <div id="randomQuoteMachine">
        <h2>-{this.state.author ? this.state.author : 'Unkown Author'}-</h2>
        <h3>{this.state.text}</h3>
        <button className="btn btn-primary" onClick={this.newQuote}>New Quote</button>
        <a href={`https://twitter.com/intent/tweet?text==${this.state.author}: ${this.state.text}.`} target="_blank">Twitter</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
