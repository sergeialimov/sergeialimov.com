import React, { Component } from 'react';
import '@src/styles/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section id="welcome-section">
        <h1>Hey I'am Sergei Alimov</h1>
        <h2 className="job-position">Remote Javascript developer</h2>
      </section>  
    )
  }
}

export default Welcome;