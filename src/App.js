import React, { Component } from "react";
import Container from "./components/Container/Container";
import TableData from "./components/TableData/TableData"
import TableHead from "./components/TableHead/TableHead"
// import TwitterFilter from "./components/TwitterFilter/TwitterFilter"
import employees from "./employees.json"
import TwitterFilter from "./components/TwitterFilter/TwitterFilter";
import ExperienceSort from "./components/ExperienceSort/ExperienceSort";
import AllEmployees from "./components/AllEmployees/AllEmployees";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };


  employeeTwitter = hasTwitter => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.hasTwitter === true);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  allEmployees = allEmployees => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    employees.filter(employee => employee.isEmployee === true);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  experienceSort = years => {
    const employees = this.state.employees.sort( function ( a, b ) { return b.years - a.years; } );
    this.setState({ employees });
  }

render() {
  return (
  <Container><h1>Employee Directory</h1>
  <p className="lead">A fast and easy way to search for employees.</p>
  <p>You can filter the employee directory to see specific results.</p>
  <AllEmployees
    allEmployees={this.allEmployees}>
  </AllEmployees>
  <TwitterFilter
  employeeTwitter={this.employeeTwitter}>
  </TwitterFilter> 
  <ExperienceSort
  experienceSort={this.experienceSort}>
  </ExperienceSort> 
  <TableHead></TableHead>
  {this.state.employees.map(employee => (

  <TableData
      id={employee.id}
      key={employee.id}
      name={employee.name}
      occupation={employee.occupation}
      location={employee.location}
      years={employee.years}
      hasTwitter={employee.hasTwitter}
      isEmployee={employee.isEmployee}
      twitter={employee.twitter}
      />
  ))}
  </Container>
  )
  
}
}

export default App;
