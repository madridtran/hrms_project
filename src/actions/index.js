import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'
import UserService from "../services/user.services";

export const actFetchEmployeesRequest = ()=>{
    return (dispatch) =>{
        return UserService.getEmployee().then(res=>{
            dispatch(actFetchEmployees(res.data))
            // console.log(res)
        })
    };
}

export const actFetchEmployees = (employees) => {
    return{
        type : Types.FETCH_EMPLOYEES,
         employees
    }
}
export const actFetchDepartmentsRequest = ()=>{
    return (dispatch) =>{
        return UserService.getDepartment().then(res=>{
            dispatch(actFetchDepartments(res.data))
            // console.log(res)
        })
    };
}

export const actFetchDepartments = (departments) => {
    return{
        type : Types.FETCH_DEPARTMENTS,
        departments
    }
}
export const actAddDepartmentsRequest = (department)=>{
    return (dispatch) =>{
        // return callApi(`employees`, `POST`, employee).then(res=>{
        //     dispatch(actAddEmployees(res.data))
        // })
        return UserService.addDepartment(department).then(res=>{
            dispatch(actFetchDepartments(res.data))
        })
    };
}
export const actAddDepartments = (department) => {
    return{
        type : Types.ADD_DEPARTMENTS,
        department
    }
}
export const searchEmployee = (keyword) => {
    return{
        type : Types.SEARCH,
        keyword
    }
}
export const actDeleteEmployeesRequest = (id)=>{
    return (dispatch) =>{
        return UserService.deleteUser(id).then(res=>{
            dispatch(actDeleteEmployees(id))
        })
    };
}
export const actDeleteEmployees = (id) => {
    return{
        type : Types.DELETE_EMPLOYEES,
        id
    }
}
export const actAddEmployeesRequest = (employee)=>{
    return (dispatch) =>{
        // return callApi(`employees`, `POST`, employee).then(res=>{
        //     dispatch(actAddEmployees(res.data))
        // })
        return UserService.addEmployee(employee).then(res=>{
            dispatch(actFetchEmployees(res.data))
        })
    };
}
export const actAddEmployees = (employee) => {
    return{
        type : Types.ADD_EMPLOYEES,
       employee
    }
}
export const actGetEmployee = (employee) => {
    return{
        type : Types.EDIT_EMPLOYEES,
         employee
    }
}
export const actGetEmployeesRequest = (id)=>{
    return (dispatch) =>{
        return callApi(`employees/${id}`, `GET`, null).then(res=>{
            dispatch(actGetEmployee(res.data))
        })
    };
}
