import React, { Component } from "react";

class SalaryList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Quản Lý Lương Nhân Viên</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã NV</th>
                <th>Tên Nhân Viên</th>
                <th>Giới Tính</th>
                <th>Lương cơ bản</th>
                {/* <th>Phòng Ban</th> */}
                <th>Hệ Số Lương</th>
                <th>Trợ cấp</th>
                <th>Lương</th>
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

export default SalaryList;
