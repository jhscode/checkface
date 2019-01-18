import React, { Component, Fragment } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

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
  apiKey: '8e44822185354e818f5a7658a917f567'
 });

class App extends Component {
  state = {
    input: '',
    imageUrl:'',
    box: {},
    route: 'signin',
    isSignedIn: false
  }

  calculateFaceLocation = (data) => {
    const clarifaiBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiBox.left_col * width,
      topRow: clarifaiBox.top_row * height,
      rightCol: width - (clarifaiBox.right_col * width),
      bottomRow: height - (clarifaiBox.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
      this.setState({ box })
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input })
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route, e) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route})
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <Fragment>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition 
                imageUrl={imageUrl}
                box={box}
              />
              </Fragment>
          :(
            route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange}/>
            )
          }
      </div>
    );
  }
}

export default App;
