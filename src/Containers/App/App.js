import React, { Component} from 'react';
import Header from '../../Components/Layout/Header';
import List from '../../Components/CardsList/CardsList';
import Searchbox from '../../Components/Layout/Searchbox';
import ErrorBoundary from '../Error boundary/ErrorBoundary';
import Scroll from '../Scroll/Scroll';
// import cardsInfo from './Components/CardsList/CardsInfo'; 
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // this.setState({robots: cardsInfo});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({robots: users}));


  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {

    const {robots, searchField} = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if(robots.length === 0) {
      return <h1 className='tc f2'>Loading...</h1>
    }
    else {
      return (
        <div className="App">
          <Header />
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <List robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
          
        </div>
      ); 
    }
     
  }
}

export default App;
