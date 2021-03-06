import React from 'react';
import { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  submitRes = e => {
    e.preventDefault()
    const newRes = {
      id: Date.now(),
      ...this.state
     }
     this.props.addReservation(newRes)
     this.setState({ name: '', date: '', time: '', number: '' })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={(event) => this.submitRes(event)}>Submit!</button>
      </form>
    )
  }
}

export default ReservationForm;