import React, { Component } from 'react';
import InfoBox from './InfoBox';
import _ from 'lodash';
import logo from './logo.svg';
import { getProfileData } from '../request';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      input: ''
    }
  }
  handleChange = (event) => {
    const val = event.target.value;
    this.setState({ input: val });
  }
  getUser = async (e) => {
    e.preventDefault();
    const input = this.state.input;
    console.log(`Getting Data.... for ${input}`);
    const data = await getProfileData(input);
    this.props.save(data);
    this.setState({ currentUser: data });
  }
  handleProfileClick = (profile) => {
    this.setState({ currentUser: profile, input: profile.login });
  }
  render() {
    const { currentUser } = this.state;
    const { profiles } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={currentUser.avatar_url || logo} className="App-logo" alt="logo" />
          <h2>{currentUser.name || 'Welcome to React'}</h2>
          <h4>{currentUser.bio || 'Prepare to be dazzled'}</h4>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.getUser}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type="submit">Get Data!</button>
        </form>
        <div className="info-holder">
          <div>
            <div className="col">
              <h2>Current Profile</h2>
            </div>
            <div className="col">
              <h2>Searched Profiles</h2>
            </div>
          </div>
          <div className="col">
            {Object.keys(currentUser).map((key, index) => {
              return (<InfoBox key={index} keyName={key} value={currentUser[key]} />)
            })}
          </div>
          <div className="col">
            {_.map(profiles, (profile, index) => (
              <a  key={index} onClick={() => this.handleProfileClick(profile)}>
                <InfoBox keyName={'User'} value={profile.login} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
