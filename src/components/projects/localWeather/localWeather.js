import React, { Component } from 'react';
import axios from 'axios';

import Weather from './weather'

export default class LocalWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      city: "",
      country: "US",
      searched: false
    };

    this.getWeather = this.getWeather.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
  }

  getWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&&APPID=265aef4d63230a48ab0446fe91afec9a`).then(res => {

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
        isLoading: false,
        searched: true
      });
    })
  }

  cityChange(event) {
    this.setState({city: event.target.value});
    console.log(this.state);
  }

  countryChange(event) {
    this.setState({country: event.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div id="localWeather">
        <input placeholder="City" value={this.state.city} onChange={this.cityChange}></input>
        <input placeholder="Country" value={this.state.country} onChange={this.countryChange}></input>
        <button onClick={this.getWeather}>Get Weather</button>
        {
          this.state.searched ?
          <Weather weather={this.state.weather} />:
          "Please Try Again"
        }
      </div>
    );
  }
}
