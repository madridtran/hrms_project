import React, { Component } from "react";
import SalaryList from "./../../components/SalaryList/SalaryList";
import SalaryItem from "./../../components/SalaryItem/SalaryItem";
import { connect } from "react-redux";
import axios from "axios";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import employees from "../../reducers/employees";
import UserService from "../../services/user.services";
import {
  actFetchEmployeesRequest,
  actDeleteEmployeesRequest,
} from "./../../actions/index";

class SalaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllEmployees();
  }
  onDelete = (id) => {
    // var { employees } = this.state;
    // callApi(`employees/${id}`, `DELETE`, null).then((res) => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(employees, id);
    //     if (index !== -1) {
    //       employees.splice(index, 1);
    //       this.setState({
    //         employees: employees,
    //       });
    //     }
    //   }
    // });
    this.props.onDeleteEmployee(id);
  };

  render() {
    var { employees } = this.props;

    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập Tên nhân viên..."
            />
            <span className="input-group-btn">
              <button type="button" className="btn btn-primary">
                <span className="fa fa-search mr-5"></span>&ensp;Tìm
              </button>
            </span>
          </div>
        </div>

        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20">
          {/* <Link to="/employee/add" className="btn btn-info mb-15">
        Thêm Nhân Viên
      </Link> */}

          <SalaryList>{this.showEmployees(employees)}</SalaryList>
        </div>
      </div>
    );
  }
  showEmployees(employees) {
    var result = null;
    if (employees.length > 0) {
      result = employees.map((employee, index) => {
        return (
          <SalaryItem
            key={index}
            employee={employee}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllEmployees: () => {
      dispatch(actFetchEmployeesRequest());
    },
    onDeleteEmployee: (id) => {
      dispatch(actDeleteEmployeesRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryPage);
