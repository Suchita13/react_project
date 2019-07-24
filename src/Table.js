import React, { Component } from 'react';
import Form from './Form';

class Table extends Form {
  render(){
      return(
        <div id="Table">
          <table>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
			  <th>Contact Number</th>
              <th>Show location on Map</th>
			  <th>Additonal Info</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>

          </table>
        </div>
      );
    }

}

export default Table;