
import React, { Component } from "react";


class EmployeeList extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách nhân viên</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã NV</th>
                <th>Tên Nhân Viên</th>
                <th>Giới Tính</th>
                <th>Ngày Sinh</th>
                <th>Chức Vụ</th>
                {/* <th>Phòng Ban</th> */}
                <th>Trạng Thái</th>
                <th>Ngày Công</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
