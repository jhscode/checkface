import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 100
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: API_KEY
 });

class App extends Component {
  state = {
    input: '',
    imageUrl:''
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
