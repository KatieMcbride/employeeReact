import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/employeeCard";
import Wrapper from "./components/Wrapper/Wrapper";
import employeesData from "./utils/employee.json";
// import SearchForm from './components/SearchBar'



function App() {

  /* state */
 const [ employees, setEmployees] = useState(employeesData || []);
 const [ search, setSearch] = useState('');
 const [ salary, setSalary ] = useState([]);

 const results = employees.filter(employee =>
  employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

  const sortBySalary = () => {
    const sorted = employees.sort((a, b) => {
      return b.salary - a.salary;
    });
    setSalary(sorted);
  };
  
 
  const handleInputChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
  }
  

  /* render */
  return (
      <Wrapper>

        <h1 className="title">Employee List</h1>
        <button onClick={sortBySalary}>Sort by Salary</button>

        <form className="search">
          <div className="form-group">
            <label htmlFor="language">Search Name:</label>
              <input
                 value={search}
                 onChange={handleInputChange}
                 name="term"
                 className="form-control"
                 placeholder="Type in a search term to begin"
                 id="term"
              />
          </div>
        </form>

        

        {results.map(employee => (
           <EmployeeCard
           id={employee.id}
           key={employee.id}
           name={employee.name}
           image={employee.image}
           department={employee.department}
           position={employee.position}
           salary={employee.salary}
         />
        ))}
      
      </Wrapper>
    );
  
};

export default App;




