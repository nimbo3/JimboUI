import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component{
  render = () => (
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
  );
}

export default App;
