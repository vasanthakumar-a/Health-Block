import React from 'react'
import { FormResult } from './FormSignin'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Navigation } from './navigation'
import PatientRecord from './PatientRecord';
import RecordAccess from './RecordAccess';
import UserInfo from "./UserInfo";

export const UserHome = () => { 

  const result = FormResult()
  console.log(result)
  
  const [toLoad, setToLoad] = useState(0)
  console.log(toLoad)
  

    return (
      <div>
          <Navigation />
        <div className="user-container">
          <div className="userLeft">
            <div className="top">
                <img src="./img/team/user.png" className="userImg" alt="" />
                <h2>Vasanthakumar</h2>
                <h3>VASI117</h3>
            </div>
            <div className="bottom">
                <ul className="user-nav">
                    <a onClick={() => setToLoad(0)}><li className="fa fa-user">⠀⠀⠀Profile <span className="nav-arrow">❯</span></li></a>
                    <a onClick={() => setToLoad(1)}><li className="fa fa-clipboard">⠀⠀⠀Medical Reports<span className="nav-arrow">❯</span></li></a>
                    <a onClick={() => setToLoad(2)}><li className="fa fa-check-square-o">⠀⠀⠀Record Access<span className="nav-arrow">❯</span></li></a>
                    <a><li className="fa fa-sign-out">⠀⠀⠀Logout<span className="nav-arrow">❯</span></li></a>
                </ul>
            </div>
          </div>
          <div className="userRight">
            <div className="empty" />
            
              {toLoad === 0 && <UserInfo data={result} />}
              {toLoad === 1 && <PatientRecord />}
              {toLoad === 2 && <RecordAccess />}
          </div>
        </div>
      </div>
    );
}

export default UserHome;