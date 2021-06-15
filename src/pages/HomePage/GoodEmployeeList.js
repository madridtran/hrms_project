import "./HomePage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoodEmployeeItem from "./GoodEmployeeItem";
class GoodEmployeeList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }
  render() {
    return (
         
      
      // <table className="table table-bordered table-hover">
      //   <thead>
      //     <tr>
      //       <th></th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td></td>
      //     </tr>
      //   </tbody>
      // </table>
      
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Nhân Viên</th>
                  <th>Ngày Sinh</th>
                   <th>Vị Trí</th>
                  <th>Phòng Ban</th> 
                </tr>
              </thead>
              <tbody>
              {this.props.children}             
              </tbody>
            </table>

    );
  }


}

export default GoodEmployeeList
;
