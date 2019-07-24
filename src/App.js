import React from 'react';
import './App.css';
import MapContainer from './MapContainer';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      emp_id: '',
      emp_name: '',
	  contact:'',
	  locations:'',
      items: []
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
        <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newEmpId={ this.state.emp_id } newEmpName={ this.state.emp_name } newContact={this.state.contact}
		newLocation={this.state.locations} />
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
			  <th>Contact Number</th>
              <th>Location</th>
			  <th>Show Location on Map</th>
              <th>Additional Info</th>

            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.emp_id}</td>
                  <td>{item.emp_name}</td>
				  <td>{item.contact}</td>
                  <td>{item.locations}</td>
				  <td><button type='submit' value='Checkbox'>Checkbox</button></td>
				  <td><button type='submit' value='ShowInfo'>Show Info(Button)</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
   onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div id="Form">
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="Employee Id">
          Employee Id:
          <input id="emp_id" value={this.props.newEmpId} type="text" pattern="[0-9]*" name="emp_id" onChange={this.props.handleInputChange} required />
          </label>
          <label for="Employee Name">
          Employee Name:
          <input id="emp_name" value={this.props.newEmpName} type="text" name="emp_name" onChange={this.props.handleInputChange} required />
		  </label>
		  <label for="Contact Number">
          Contact Number:
          <input id="contact" value={this.props.newContact} type="text" pattern="[0-9]*" maxLength='10' name="contact" onChange={this.props.handleInputChange} required />
		  </label>
		  <label for="Location">
          Location:
          <input id="locations" value={this.props.newLocation} type="text" name="locations" onChange={this.props.handleInputChange} required />
		                      <a href="#" onClick={this.onClick.bind(this)}><img src={ require('./globe.png')}  style={{width: 20, height: 20,top:10,left:10} }/></a>
							   {this.state.showReply && < MapContainer / >}
          </label>
          <button type="submit" value="Submit">Add EmployeeAdd</button>
        </form>
      </div>
    );
  }
}

export default App;