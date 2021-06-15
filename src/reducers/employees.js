import * as Types from "./../constants/ActionTypes";
var initialState = [];

const employees = (state = initialState, action) => {
  var index = -1;
  var {id} = action;
  var findIndex = (employees, id) => {
    var result = -1;
    employees.forEach((employee, index) => {
      if (employee.id === id) {
        result = index;
      }
    });
    return result;
  };
  switch (action.type) {
    case Types.FETCH_EMPLOYEES:
      state = action.employees;
      return [...state];
    case Types.DELETE_EMPLOYEES:
      index = findIndex(state,id);
      state.splice(index,1)
      return [...state];
      case Types.ADD_EMPLOYEES:
      state.push(action.employee);
      return [...state];
    default:
      return [...state];
  }
};
export default employees;
