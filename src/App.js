import React, { Component } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import FormComponent from './Form/Form'
import CustomSelect from './Select/Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <FormComponent/>
          <CustomSelect />
        </header>
      </div>
    );
  }
}

export default App;
