import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/employeeCard";
import Wrapper from "./components/Wrapper/Wrapper";
import employeesData from "./utils/employee.json";
import SearchBar from "./components/SearchBar/SearchBar";
import Sort from "./components/Sort";
// import SortButton from "./components/SortButton"


function App() {

  /* state */
 const [ employees, setEmployees] = useState(employeesData || []);
 const [ search, setSearch] = useState('');


 const results = employees.filter(employee =>
  employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

 const handleSort = (newOrder) => {
   console.log('inside handle sort!!!', newOrder)
  setEmployees([...newOrder])
 }
  
  const handleInputChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
  }
  

  // console.log('this is eployess state in APp.js!!!!', employees)

  /* render */
  return (
      <Wrapper>
        <h1 className="title">Employee List</h1>
        <Sort tomemployees={employees} handleSort={handleSort}/>
        <SearchBar />

        

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




