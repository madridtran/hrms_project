import * as Types from "./../constants/ActionTypes";
var initialState = [];

const departments = (state = initialState, action) => {
  var index = -1;
  var {id} = action;
  var findIndex = (departments, id) => {
    var result = -1;
    departments.forEach((department, index) => {
      if (department.id === id) {
        result = index;
      }
    });
    return result;
  };
  switch (action.type) {
    case Types.FETCH_DEPARTMENTS:
      state = action.departments;
      return [...state];
    case Types.DELETE_DEPARTMENTS:
      index = findIndex(state,id);
      state.splice(index,1)
      return [...state];
      case Types.ADD_DEPARTMENTS:
      state.push(action.department);
      return [...state];
    default:
      return [...state];
  }
};
export default departments;
