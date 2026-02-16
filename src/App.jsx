import React from "react";
import "./App.css";
import { IoPersonOutline } from "react-icons/io5";

const App = () => {
  return (
    <div id="card">
      <h1 className="h1">Login</h1>

      <div id="inputholder">
        <div id="inputuser">
          <label className="label"> UserName</label>
          <div id="omorrrr">
            <IoPersonOutline />{" "}
            <input type="text" placeholder="Enter UserName" />
          </div>
        </div>
        <div id="inputuser">
          <label className="label">UserName</label>
          <div id="omorrrr">
            <input type="password" placeholder="Enter Password" />
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default App;
