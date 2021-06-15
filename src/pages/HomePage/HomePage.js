import "./HomePage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actFetchEmployeesRequest,
  actDeleteEmployeesRequest,
} from "./../../actions/index";
import { connect } from "react-redux";
import GoodEmployeeList from "./GoodEmployeeList";
import GoodEmployeeItem from "./GoodEmployeeItem";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  showEmployees(employees) {
    var result = null;
    if (employees.length > 0) {
      result = employees.map((employee, index) => {
        return (
          <GoodEmployeeItem
            key={index}
            employee={employee}
            index={index}
          />
        );
      });
    }
    return result;
  }

  componentDidMount() {
    this.props.fetchAllEmployees();
  }
  render() {
    var { employees } = this.props;
    // console.log(employees)
    return (
      <div className="container">
        <div className="dash-cards">
          <div className="card-single">
            <div className="card-body">
              <span className="bi bi-box"></span>
              <div>
                <h5>Tổng Nhân Sự</h5>
                <h4>{employees.length} nhân viên</h4>
              </div>
            </div>
            <div className="card-footer">
              <Link to="/employee-list">View all</Link>
            </div>
          </div>

          <div className="card-single">
            <div className="card-body">
              <span className="ti-reload"></span>
              <div>
                <h5>Số Phòng Ban</h5>
                <h4>5 phòng ban</h4>
              </div>
            </div>
            <div className="card-footer">
              <Link to="/employee-list">View all</Link>
            </div>
          </div>

          <div className="card-single">
            <div className="card-body">
              <span className="ti-check-box"></span>
              <div>
                <h5>Vị trí</h5>
                <h4>3</h4>
              </div>
            </div>
            <div className="card-footer">
              <Link to="/employee-list">View all</Link>
            </div>
          </div>
        </div>
        <div className="activity-card mt-20">
          <h3>Nhân viên tiêu biểu</h3>

          <div className="table-responsive">
                <GoodEmployeeList>{this.showEmployees(employees)}</GoodEmployeeList>             
          </div>
        </div>
      </div>
    );
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
