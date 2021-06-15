import React, { Component } from "react";
import DepartmentList from "./../../components/DepartmentList/DepartmentList";
import DepartmentItem from "./../../components/DepartmentItem/DepartmentItem";
import { connect } from "react-redux";
import axios from "axios";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import departments from "../../reducers/departments";
import UserService from "../../services/user.services";
import { actFetchDepartmentsRequest,actDeleteEmployeesRequest } from "./../../actions/index";

class DepartmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      error:''
    };
  }

  componentDidMount() {
     this.props.fetchAllDepartments();
  }


  render() {
     var {departments} = this.props;

    return (
      
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
         <Link to="/department/add" className="btn btn-info mb-15">
          Thêm Phòng Ban
        </Link> 
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div class="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập Tên phòng ban..."
            />
            <span className="input-group-btn">
              <button type="button" class="btn btn-primary">
                <span className="fa fa-search mr-5"></span>&ensp;Tìm
              </button>
            </span>
          </div>
        </div>

        <DepartmentList>{this.showDepartments(departments)}</DepartmentList>
      </div>
    );
  }
  showDepartments(departments) {
    var result = null;
    if (departments.length > 0) {
      result = departments.map((department, index) => {
        return (
          <DepartmentItem
            key={index}
            department={department}
            index={index}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllDepartments: () => {
      dispatch(actFetchDepartmentsRequest());
    },
    onDeleteEmployee : (id)=>{
      dispatch(actDeleteEmployeesRequest(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage);
