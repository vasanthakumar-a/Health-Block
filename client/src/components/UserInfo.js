import React from 'react';
export const UserInfo = (props) => { 
  console.log(props)
  
    return (
      <div>
          <div className="user-details">
            <div className="col-12 head">
              <h1>Profile Details</h1>
            </div>
            <div className='col-5 user-inputs'>
              <h4>Name </h4>
              <h4>Health ID</h4>
              <h4>Age</h4>
              <h4>Gender</h4>
              <h4>Height(in cm)</h4>
              <h4>Weight(in kg)</h4>
              <h4>Address</h4>
              <h4>Phone Number</h4>
              <h4>Email Id</h4>
              <h4>Date</h4>
            </div>
            <div className='col-5 user-inputs'>
              <h4>Vasanthakumar </h4>
              <h4>Vasi117</h4>
              <h4>19</h4>
              <h4>Male</h4>
              <h4>Height(in cm)</h4>
              <h4>Weight(in kg)</h4>
              <h4>sadgasjhkf </h4>
              <h4>9876543210 </h4>
              <h4>props.data </h4>
              <h4>Date</h4>
            </div>
          </div>
      </div>
    );
}

export default UserInfo;