import { Component } from "react";

class App extends Component{
  employeeData = {
    name: "John Doe",
    age: 20,
    dateOfBirth: "January 10, 1995",
    salary: 5000,
    designation: "Developer",
    image: "./img/john-doe.png",
    department: "IT",
  };
  
  displayInfo = () => {
    alert(
      "Employee Info: \n Name: " + this.employeeData.name 
      + "\n Age: " + this.employeeData.age 
      + "\n Birthday: " + this.employeeData.dateOfBirth
      + "\n Salary: " + this.employeeData.salary
      + "\n Designation: " + this.employeeData.designation
      + "\n Department: " + this.employeeData.department
    )
  }

  render() {
    return (
      <div>
        <img src={this.employeeData.image} alt=""></img>
        <h1 onMouseOver={this.displayInfo}>{this.employeeData.name}</h1>
        <p>{this.employeeData.designation}</p>
      </div>
    );
  }
}

export default App;
