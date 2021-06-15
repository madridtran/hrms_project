import "./Menu.css";
import React, { Component } from "react";
import {Route, Link, NavLink} from 'react-router-dom'

const menus=[
  {
    name : 'Trang chủ',
    to: '/home',
    exact : true
  },
  {
    name : 'Nhân Sự',
    to: '/employee-list',
    exact : false
  },
  {
    name : 'Chấm Công',
    to: '/timekeeping',
    exact : false
  },
  {
    name : 'Lương',
    to: '/salary-list',
    exact : false
  },
  {
    name : 'Vị trí',
    to: '/employee-opposit',
    exact : false
  },
  {
    name : 'Phòng Ban',
    to: '/department-list',
    exact : false
  },
  {
    name : 'Liên Hệ',
    to: '/employee-contact',
    exact : false
  },
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route
    path = {to}
    exact={activeOnlyWhenExact}
    children={({match})=>{
      var active = match ? 'active ml-50':'ml-50';
      return(
        <li className = {active} >
          <Link to={to}>
            {label}
          </Link>
        </li>
      )
    }}
    />
  );
}

class Menu extends Component {
  render() {
    return (
      <div id="sidebar">
    <header>
      <a href="#">EMPLOYEE</a>
    </header>
    <ul className="nav">
      {/* <li className ="ml-40">
        <a href="#">
          Dashboard
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
          Nhân sự
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
           Chấm công
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
           Lương
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
           Phòng Ban
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
          Thông Báo
        </a>
      </li>
      <li className ="ml-40">
        <a href="#">
         Liên Hệ
        </a>
      </li> */}
      {this.showMenus(menus)}
    </ul>
  </div>
    );
  }
  showMenus=(menus)=>{
    var result = null;
    if (menus.length>0){
      result = menus.map((menu,index)=>{
        return(
          <MenuLink
          key ={index}
          label = {menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return result;
  }
}

export default Menu;
