import React, { Component } from "react";
import EmployeeList from "./../../components/EmployeeList/EmployeeList";
import EmployeeItem from "./../../components/EmployeeItem/EmployeeItem";
import { connect } from "react-redux";
import axios from "axios";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import employees from "../../reducers/employees";
import UserService from "../../services/user.services";
import {
  actFetchEmployeesRequest,
  actDeleteEmployeesRequest,
  searchEmployee
} from "./../../actions/index";

class EmployeeListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: "",
      keyword: "",
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
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSearch = () => {
  this.props.onSearch(this.state.keyword)
  // console.log(this.state.keyword)
  };

  render() {
    var { employees } = this.props;
    var { keyword } = this.state;
       employees = employees.filter((employee) => {
         return employee.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
      });
    return (
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/employee/add" className="btn btn-info mb-15">
          Thêm Nhân Viên
        </Link>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập Tên nhân viên..."
              value={keyword}
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSearch}
              >
                <span className="fa fa-search mr-5"></span>&ensp;Tìm
              </button>
            </span>
          </div>
        </div>

        <EmployeeList>{this.showEmployees(employees)}</EmployeeList>
      </div>
    );
  }
  showEmployees(employees) {
    var result = null;
    if (employees.length > 0) {
      result = employees.map((employee, index) => {
        return (
          <EmployeeItem
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
    keyword:state.search
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
    onSearch : (keyword)=>{
      dispatch(searchEmployee(keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListPage);
