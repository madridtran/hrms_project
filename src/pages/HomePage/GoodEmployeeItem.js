import "./HomePage.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actFetchEmployeesRequest,actDeleteEmployeesRequest } from "../../actions/index";
import { connect } from "react-redux";
import employees from "../../reducers/employees";
class GoodEmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
        };
      }
  render() {
    var { employee, index } = this.props;
  // console.log(employee)
    return (
        <tr>
        <td>{index+1}</td>
        <td>{employee.name}</td>
        <td>{employee.dateOfBirth}</td>
        <td>{employee.position}</td> 
        <td>{employee.departmentName}</td>
      </tr>
    );
  }
}
  
  export default GoodEmployeeItem;
