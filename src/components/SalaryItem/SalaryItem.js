import React, { Component } from "react";
import { Link } from "react-router-dom";
import employees from "../../reducers/employees";

class SalaryItem extends Component {

  onDelete=(id)=>{
    if(confirm('Bạn chắc chắn muốn xóa?')){ // eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var { employee, index } = this.props;
    var statusName = employee.status ? 'Phép' : '';
     console.log(employee)
    return (
      <tr>
        <td>{index+1}</td>
        <td>{employee.code}</td>
        <td>{employee.name}</td>
        <td>{employee.gender}</td>
        <td>{employee.salary.bSalary}</td>
        <td>{employee.salary.iSalary}</td>
        {/* <td>{employee.department}</td> */}
        <td>{employee.salary.allowance}</td>
        <td>{employee.salary.salary}</td>
        <td>
          <Link to={`/salary/${employee.id}/edit`} className="btn btn-success ml-20">
            Sửa
          </Link>

          {/* <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(employee.id)}>
            Xóa
          </button> */}
        </td>
      </tr>
    );
  }
}

export default SalaryItem;
