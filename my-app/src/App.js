import React, { Component } from "react";
import EmployeeCard from "./components/employeeCard";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employee.json";


class App extends Component {

  /* state */
  state = {
    employees
  };


  /* render */
  render() {
    return (
      <Wrapper>
        <h1 className="title">Employee List</h1>
        {this.state.employees.map(employee => (
            <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            department={employee.department}
            position={employee.position}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
