import React, {Component} from 'react';

class Form extends Component{
render(){
return(
<div id='form1'>
<form onSubmit={this.hanldeSubmit}>
Employee Id <input type='text' name='emp_id'/><br/>
Employee name<input type='text' name='emp_name'/><br/>
Contact<input type='number' name='contact'/><br/>
Location<input type='text' name='location'/><br/>
<input type='submit' value='Add EmployeeADD'/>
</form>
</div>
);
}
}

export default Form;