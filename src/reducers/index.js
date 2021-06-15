import {combineReducers} from'redux';
import employees from './employees';
import departments from './departments';
import auth from './auth';
import message from './message';
import search from './search';
const appReducers = combineReducers({
    auth,
    message,
    employees,
    departments,
    search
})
export default appReducers;