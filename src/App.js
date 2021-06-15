import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "./components/Menu/Menu";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import routes from "./routes";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/RegisterPage";
import { history } from "./helpers/history";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import HomePage from "./pages/HomePage/HomePage";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import SalaryPage from "./pages/SalaryPage/SalaryPage";
import EmployeeActionPage from "./pages/EmployeeActionPage/EmployeeActionPage";
import SalaryActionPage from "./pages/SalaryPage/SalaryActionPage";
import DepartmentPage from "./pages/DepartmentPage/DepartmentPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    this.props.dispatch(logout());
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        {localStorage.getItem("user") ? (
          <div id="viewport">
            <Menu />
            <nav className="navbar navbar-default nav-color">
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <a href="/profile" className="nav-link" onClick={this.logOut}>
                      <FaUserTie icon={faSignInAlt} />
                      {currentUser?.username}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route path={"/home"} component={HomePage}></Route>
              <Route path={"/employee-list"} component={EmployeeListPage}></Route>
              <Route path={"/salary-list"} component={SalaryPage}></Route>
              <Route path={"/department-list"} component={DepartmentPage}></Route>
              <Route path={"/department/add"} render={({ history }) => <EmployeeActionPage  history={history} />} ></Route >
              <Route path={"/employee/:id/edit"} render={({ match,history }) => <EmployeeActionPage match={match} history={history} />} ></Route >
              <Route path={"/department/:id/edit"} render={({ match,history }) => <EmployeeActionPage match={match} history={history} />} ></Route >
              <Route path={"/employee/add"} render={({ history }) => <EmployeeActionPage  history={history} />} ></Route >
              <Route path={"/salary/:id/edit"} component={SalaryActionPage}></Route>
              <Redirect to={"/home"} />
              
            </Switch>
          </div>
        ) : (
          <>
            <nav className="navbar navbar-default nav-color">
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route path={"/login"}>
                <Login />
              </Route>
              <Route path={"/register"}>
                <Register />
              </Route>
            </Switch>
          </>
        )}

        {/* <div id="viewport"> */}
        {/* {localStorage.getItem("user") && <Menu />} */}

        {/* <div id="content">
            <nav className="navbar navbar-default nav-color">
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div className="row">{this.showContentMenus(routes)}</div>
            </div>
          </div> */}
        {/* </div> */}
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
