import React, { Component } from "react";
import { Link } from "react-router-dom";
import employees from "../../reducers/employees";

class EmployeeItem extends Component {

  onDelete=(id)=>{
    if(confirm('Bạn chắc chắn muốn xóa?')){ // eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var { employee, index } = this.props;
  //  console.log(employee)
    var statusName = employee.status ? 'Phép' : '';
    return (
      <tr>
        <td>{index+1}</td>
        <td>{employee.code}</td>
        <td>{employee.name}</td>
        <td>{employee.gender}</td>
        <td>{employee.dateOfBirth}</td>
        <td>{employee.position}</td>
        {/* <td>{employee.department}</td> */}
        <td>
          <span className="label label-warning">{statusName}</span>
        </td>
        <td>{employee.workDay}</td>
        <td>
          <Link to={`/employee/${employee.employeeId}/edit`} className="btn fa fa-edit btn-success mr-10">
          &ensp;Sửa
          </Link>

          <button type="button" className="btn fa fa-trash btn-danger" onClick={()=>this.onDelete(employee.employeeId)}>
          &ensp;Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default EmployeeItem;
