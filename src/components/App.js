import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/calum_profile.png';


class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }


  render() {
    return (
      <div>
      <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
          <p>My name is Calum.</p>
          <Title />
          <p>I'm always looking forward to working on exciting projects.</p>
          {
            this.state.displayBio ? (
              <div>
                <p>I live in London, and code every day.</p>
                <p>I work mainly in React and Kotlin.</p>
                <p>Besides coding, I also love muay thai and films!</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
              </div>
            )
          }
          <hr />
          <Projects />
          <hr />
          <SocialProfiles />
        </div>
      )
  }
}

export default App;