import React, { Component } from 'react';
import Loading from 'react-loading';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import axios from 'axios';

import Weather from './weather'

class LocalWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: ""
    };

    this.getWeather = this.getWeather.bind(this);
}

  componentWillMount() {
    this.getWeather();
  }

  getWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${"Dallas"},${"US"}&&APPID=265aef4d63230a48ab0446fe91afec9a`).then(res => {

      var weather = {
        country: res.data.sys.country,
        city: res.data.name,
        main: res.data.weather[0].main,
        iconId: "wi wi-owm-" + res.data.weather[0].id,
        temp: (res.data.main.temp * 9/5) - 459.67,
        isLoading: false
      }
      console.log(weather);
      this.setState({
        weather: weather,
        isLoading: false
      });
    })
  }

  render() {
    return (
      <div id="localWeather">
        {
          this.state.isLoading ?
          <Loading type='spin' color='black' /> :
          <Weather weather={this.state.weather} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(LocalWeather);
