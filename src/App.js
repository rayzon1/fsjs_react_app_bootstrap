import React, {Component} from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import SearchForm  from './components/SearchForm.jsx';
import Results from './components/Results.jsx';

class App extends Component {
  state = {
    title: "Gerardo's Amazing App",
    placeholder: "type into me..."
  }
  
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="title">{this.state.title}</h1>
            <p>
              Created by, Gerardo Keys in React
            </p>

            <SearchForm
              placeholder={this.state.placeholder}
             />    
          </Container>
        </Jumbotron>
        <Results />
      </div>
    );
  }
  
}

export default App;
