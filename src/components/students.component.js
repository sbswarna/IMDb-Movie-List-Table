import React, { Component } from "react";
import Table from "./common/table.component";

class Students extends React.Component {
    state = {
        students: [
            {roll: 1, name: 'Mark', cgpa: 3.60},
            {roll: 2, name: 'Jacob', cgpa: 3.78},
            {roll: 3, name: 'Larry', cgpa: 3.90},
        ]
    }
  render() {
    const columns = [
      {label: 'Roll number', path: 'roll', content: item => <td>{item}</td>},
      {label: 'Name', path: 'name', content: item => <td>{item}</td>},
      {label: 'CGPA', path: 'cgpa', content: item => <td>{item}</td>}
    ]
    return (
      <>
        <Table data={this.state.students} columns={columns}/>
      </>
    );
  }
}

export default Students;
