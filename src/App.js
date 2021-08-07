import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './colorHelpers.js';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.find = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id.toLowerCase() === id.toLowerCase();
    });
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...seedColors, newPalette] });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />} />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => < Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route path="/palette/:paletteId/:colorId" render={(routeProps) => < SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
      </Switch >

    );
  }
}

export default App;
