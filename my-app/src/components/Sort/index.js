import React, { useState, useEffect } from "react";
// import SortButton from "../SortButton/index"
import './style.css'


function Sort(props) {
   
    const [ salary, setSalary ] = useState([]);

    const sortBySalary = () => {
        const sorted = props.tomemployees.sort((a, b) => {
          return b.salary - a.salary;
        });
        console.log('sorted working ??', sorted)
        console.log('we want to set our eployess!!', props.handleSort);
        props.handleSort(sorted);
      };
      console.log('this is state in sort file', salary)
      return (
        // <SortButton />
        <button onClick={sortBySalary} className="sortButton">Sort by Salary</button>
      )

};

export default Sort;