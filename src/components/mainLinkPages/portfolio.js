import React, { Component } from 'react';
import { Link } from 'react-router';
import { projectList } from '../projects/projectList.js'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'all',
      title: 'All Projects',
      value: ''
    };

    this.filter = this.filter.bind(this);
    this.projects = this.projects.bind(this);
  }


  filter(event) {
    this.setState({language: event.target.value});
  }

  projects(state) {
    return projectList.map(function(project, index){
      var doesExsist = project.technologies.indexOf(state);
      if(doesExsist >= 0) {
        return (
          <li className="col-md-4" key={index}>
            <a href={project.link} target="_blank">
              <h4>{project.name}</h4>
              <img className="portImg" src={project.imageUrl}></img>
            </a>
            <a className="block" href={project.github} target="_blank">GitHub</a>
          </li>
        )
      }
    });
  };

  render() {

    return (
      <div id="portfolio">
        <Link className="" to="/randomQuoteMachine">Random Quote Machine</Link>
        <br />
        <Link className="" to="/localWeather">Local Weather App</Link>
        <br />
        <Link className="" to="/wikiViewer">Wiki Viewer</Link>
        <select id="lang" onChange={this.filter} value={this.state.language}>
          <option value="all">All Projects</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="jquery">JQuery</option>
          <option value="pug">Pug</option>
          <option value="scss">SCSS</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="node">Node.js</option>
          <option value="express">Express.js</option>
          <option value="mongodb">MongoDB</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <ul className="row">
          {this.projects(this.state.language)}
        </ul>
      </div>
    );
  }
}
