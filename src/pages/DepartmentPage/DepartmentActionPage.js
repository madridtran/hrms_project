import React, { Component } from "react";
import EmployeeList from "./../../components/EmployeeList/EmployeeList";
import EmployeeItem from "./../../components/EmployeeItem/EmployeeItem";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actAddEmployeesRequest } from "./../../actions/index";
import { connect } from "react-redux";
import employees from "../../reducers/employees";

class DepartmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtNameOfDepartment: "",
      txtLocationOfDepartment: "",
      txtManagerOfDepartment: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      // callApi(`employees/${id}`, "GET", null).then((res) => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtDateOfBirth: data.date,
      //     txtDepartment: data.department,
      //     txtPosition: data.position,
      //     chkbStatus: data.status,
      //     txtGender: data.gender,
      //     txtCode: data.code,
      //   });
      // });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { history } = this.props;
    var {
        id,
        txtNameOfDepartment,
        txtLocationOfDepartment,
        txtManagerOfDepartment,
    } = this.state;
    var employee = {
      id : id,
      name: txtName,
      code: txtCode,
      gender: txtGender,
      dateOfBirth: txtDateOfBirth,
      department: txtDepartment,
      position: txtPosition,
      // status: chkbStatus,
    };
    if (id) {
      callApi(`employees/${id}`, "PUT", {
        name: txtName,
        code: txtCode,
        gender: txtGender,
        dateOfBirth: txtDateOfBirth,
        department: txtDepartment,
        position: txtPosition,
        // status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      // callApi("employees", "POST", {
      //   name: txtName,
      //   code: txtCode,
      //   gender: txtGender,
      //   date: txtDateOfBirth,
      //   department: txtDepartment,
      //   position: txtPosition,
      //   status: chkbStatus,
      //   // txtIndexSalary,
      //   // txtBasicSalary
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onAddDepartment(department);
      history.goBack();
    }
  };

  render() {
    var {
      txtName,
      txtDateOfBirth,
      txtDepartment,
      txtPosition,
      // chkbStatus,
      txtIndexSalary,
      txtBasicSalary,
      txtGender,
      txtCode,
    } = this.state;
    return (
      <div className="container">
        {/* <h1>Danh sách sản phẩm</h1>
          <div className="row">
            
            <ul className="list-group">
              {result}
            </ul>
          </div>
          
          <div className="row">
           <Route path='/employees/:slug' component={Employee}></Route> 
          </div> */}

        <div className="row mt-20">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Ten Nhan Vien: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Mã Nhân Viên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtCode"
                  value={txtCode}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Ngay sinh: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtDateOfBirth"
                  value={txtDateOfBirth}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Giới tính: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtGender"
                  value={txtGender}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Phong ban: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtDepartment"
                  value={txtDepartment}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Chuc vu: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtPosition"
                  value={txtPosition}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Trang Thai: </label>
              </div>
              {/* <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="chkbStatus"
                    value={chkbStatus}
                    onChange={this.onChange}
                    checked={chkbStatus}
                  />
                  Phep:
                </label>
              </div> */}

              <div className="form-group">
                <label>He so luong: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtIndexSalary"
                  value={txtIndexSalary}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Luong co ban: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtBasicSalary"
                  value={txtBasicSalary}
                  onChange={this.onChange}
                />
              </div>
              <Link to="/department-list" className="btn btn-danger mr-10">
                Trở Lại
              </Link>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddDepartment: (department) => {
      dispatch(actAddDepartmentsRequest(department));
    },
  };
};

export default connect(null, mapDispatchToProps)(DepartmentPage);
