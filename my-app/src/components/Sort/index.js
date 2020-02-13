import React, { useState, useEffect } from "react";
import './style.css'


function Sort(props) {
    <SortButton />
    const [ salary, setSalary ] = useState([]);

    const sortBySalary = () => {
        const sorted = employees.sort((a, b) => {
          return b.salary - a.salary;
        });
        setSalary(sorted);
      };

};

export default Sort;