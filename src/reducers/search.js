import * as Types from './../constants/ActionTypes';
var initialState ='';
const search = (state = initialState, action) => {
    switch (action.type) {
      case Types.SEARCH:
        // console.log(action)
        return action.keyword;
      default:
        return state;
    }
  };
  export default search;
  