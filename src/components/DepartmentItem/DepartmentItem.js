import React, { Component } from "react";
import { Link } from "react-router-dom";
import departments from "../../reducers/employees";

class DepartmentItem extends Component {

  onDelete=(id)=>{
    if(confirm('Bạn chắc chắn muốn xóa?')){ // eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var { department, index } = this.props;
    // var statusName = employee.status ? 'Phép' : '';
console.log(department)
    return (
      <tr>
        <td>{index+1}</td>
        <td>{department.nameOfDepartment}</td>
        <td>{department.locationOfDepartment}</td>
        <td>{department.managerOfDepartment}</td>
        <td>
          <Link to={`/department/${department.id}/edit`} className="btn btn-success ml-20">
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

export default DepartmentItem;
