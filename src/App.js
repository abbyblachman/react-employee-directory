import React, { Component } from "react";
import Container from "./components/Container/Container";
import TableData from "./components/TableData/TableData"
import TableHead from "./components/TableHead/TableHead"
import employees from "./employees.json"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

render() {
  return (
  <Container><h1>Employee Directory</h1>
  <p className="lead">A fast and easy way to search for employees.</p>
  <p>You can filter the employee directory to see specific results.</p>
  <TableHead></TableHead>
  {this.state.employees.map(employee => (

  <TableData
      id={employee.id}
      name={employee.name}
      occupation={employee.occupation}
      location={employee.location}
      email={employee.email}
      twitter={employee.twitter}
      />
  ))}
  </Container>
  )
  
}
}

export default App;
