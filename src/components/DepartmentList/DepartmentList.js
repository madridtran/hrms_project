import React, { Component } from "react";

class DepartmentList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Quản Lý Phòng Ban</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Phòng Ban</th>
                <th>Vị trí phòng ban</th>
                <th>Trưởng Phòng</th>
                <th>Chỉnh Sửa</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DepartmentList;
