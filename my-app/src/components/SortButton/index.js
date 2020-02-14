import React, { useState, useEffect } from "react";
import './style.css'

function SortButton(props) {
    return <button onClick={props.onclick} className="sortButton">Sort by Salary</button>
}

export default SortButton;

// <button onClick={sortBySalary} className="sortButton">Sort by Salary</button>