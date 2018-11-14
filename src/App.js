import React, { Component } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import FormComponent from './Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <FormComponent/>
          {/* <Button color="primary">Reactstrapp button</Button> */}
        </header>
      </div>
    );
  }
}

export default App;
