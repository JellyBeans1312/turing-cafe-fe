import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'
import ReservationForm from './ReservationForm';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({ reservations }))
    .catch(error => this.setState({ error }))
  }

  addReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes]})
  }

  
    // fetch('http://localhost:3001/api/v1/reservations', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state.reservations)
    // })
    // .then(response => response.json())
    // .catch(error => this.setState({ error }))

  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.error && <h1>{this.state.error}</h1>}
        <ReservationForm addReservation={this.addReservation}/>
        <CardContainer props={this.state.reservations} />
      </div>
    )
  }
}

export default App;
