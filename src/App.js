import React, {Component} from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import SearchForm  from './components/SearchForm.jsx';
import Results from './components/Results.jsx';

class App extends Component {
  state = {
    title: "Gerardo's Amazing App",
    placeholder: "type into me...",
    value: "",
    titles: []
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    console.log('value submitted: ' + this.state.value);
    e.preventDefault();
    this.state.titles.push(this.state.value);
    this.setState({value: ""});
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
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              value={this.state.value}
             />    
          </Container>
        </Jumbotron>
        <div id="resultsContainer">
          {this.state.titles.map( (val, index) => {
            return <Results
              key={index}
              title={val}
            />
          })}
        </div>


      </div>
    );
  }
  
}

export default App;
