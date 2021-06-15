import React, { Component } from "react";
import EmployeeList from "./../../components/EmployeeList/EmployeeList";
import EmployeeItem from "./../../components/EmployeeItem/EmployeeItem";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actAddEmployeesRequest } from "./../../actions/index";
import { connect } from "react-redux";
import employees from "../../reducers/employees";

class EmployeeActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDateOfBirth: "",
      // txtDepartment: "",
      txtPosition: "",
      txtGender: "",
      txtCode: "",
      txtIndexSalary: "",
      txtBasicSalary: "",
    };
  }

  componentDidMount() {
    var { history,match } = this.props;
    // console.log(history);
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
      txtName,
      txtDateOfBirth,
      // txtDepartment,
      txtPosition,
      txtCode,
      txtGender,
      txtIndexSalary ,
      txtBasicSalary
    } = this.state;
    var employee = {
      employeeId : id,
      name: txtName,
      code: txtCode,
      gender: txtGender,
      dateOfBirth: txtDateOfBirth,
      // department: txtDepartment,
      position: txtPosition,
      salary:{
        iSalary:txtIndexSalary,
        bSalary:txtBasicSalary
      },
      department:{

      }
      // status: chkbStatus,
    };
    // if (id) {
    //   callApi(`employees/${id}`, "PUT", {
    //     name: txtName,
    //     code: txtCode,
    //     gender: txtGender,
    //     dateOfBirth: txtDateOfBirth,
    //     // department: txtDepartment,
    //     position: txtPosition,
    //     // status: chkbStatus,
    //   }).then((res) => {
    //     history.goBack();
    //   });
    // } else {
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
      this.props.onAddEmployee(employee);
      console.log(history)
      history.goBack();
    
  };

  render() {
    var {
      txtName,
      txtDateOfBirth,
      // txtDepartment,
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
              {/* <div className="form-group">
                <label>Phong ban: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtDepartment"
                  value={txtDepartment}
                  onChange={this.onChange}
                />
              </div> */}
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
              {/* <div className="form-group">
                <label>Trang Thai: </label>
              </div> */}
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
                <label>Hệ Số Lương: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtIndexSalary"
                  value={txtIndexSalary}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Lương Cơ Bản: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtBasicSalary"
                  value={txtBasicSalary}
                  onChange={this.onChange}
                />
              </div> 
              <Link to="/employee-list" className="btn btn-danger mr-10">
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
    onAddEmployee: (employee) => {
      dispatch(actAddEmployeesRequest(employee));
    },
  };
};

export default connect(null, mapDispatchToProps)(EmployeeActionPage);
