import React, { useState, useEffect } from "react";
import EmployeeCard from "../components/employeeCard";
import Wrapper from "../components/Wrapper/Wrapper";
import employeesData from "../utils/employee.json";
import SearchBar from "../components/SearchBar/SearchBar";
import Sort from "../components/Sort/index.js";
// import SortButton from "./components/SortButton"


function Home() {

  /* state */
 const [ employees, setEmployees] = useState(employeesData || []);
 const [ search, setSearch] = useState('');

 const handleInputChange = event => {
    console.log(event.target.value)
    console.log("working?")
    setSearch(event.target.value);
  }

  const results = employees.filter(employee =>
    employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

 const handleSort = (newOrder) => {
   console.log('inside handle sort!!!', newOrder)
  setEmployees([...newOrder])
 }
  

  // console.log('this is eployess state in APp.js!!!!', employees)

  /* render */
  return (
      <Wrapper>
        <h1 className="title">Employee List</h1>
        <Sort tomemployees={employees} handleSort={handleSort}/>
        <SearchBar searchChange={ handleInputChange} test='testingggg' employees={employees} search={search} setSearch={setSearch}/>
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

export default Home;