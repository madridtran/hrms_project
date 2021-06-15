import "./TimeKeepingPage.css";
import React, { Component } from "react";
class TimeKeepingPage extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary btn-lg cl-bg">
          Chấm công thủ công
        </button>
        <br></br>
        <button type="button" className="btn btn-primary btn-lg mt-10">
          Chấm công tự động
        </button>
      </div>
    );
  }
}

export default TimeKeepingPage;
