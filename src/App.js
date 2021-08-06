import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './colorHelpers.js';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id.toLowerCase() === id.toLowerCase();
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route exact path="/palette/:id" render={(routeProps) => < Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch >

      // <div className="App" >
      //   < Palette palette={generatePalette(seedColors[2])} />
      // </div >
    );
  }
}

export default App;
