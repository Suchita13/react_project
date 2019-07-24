import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      emp_id: '',
      emp_name: '',
	  contact:'',
	  locations:'',
	  items:[]
    }
  };
  
   handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      emp_id: this.state.emp_id,
      emp_name: this.state.emp_name,
	  contact:this.state.contact,
	  locations:this.state.locations
    });
	
	this.setState({
      items,
      emp_id: '',
      emp_name: '',
	  contact:'',
	  locations:''
    });
	
  };
  
  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
  
  render() {
    return (
      <div className="App">
        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newEmployeeID={ this.state.emp_id }
          newEmployeeName={ this.state.emp_name }
          newContact={this.state.contact}
          newLocation={this.state.locations}		  />
      </div>
    );
  }
}

export default App;