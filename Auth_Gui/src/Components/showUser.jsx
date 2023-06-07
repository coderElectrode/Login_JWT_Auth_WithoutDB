import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const showUser = () => {

  const location = useLocation();
  var user = [];
  const token=location.state.token;


  useEffect(() => {
    axios.get("http://localhost:9080/user", {
      headers: { authorization: location.state.token }
    }).then(res => {
      console.log(res.data.data[0]);
      user = res.data.data;
      console.log("User:", user);

    })
    .catch(err=>{
      alert(err);
    })

  }, [])
  return (
 
    <div>showUser
      <div>
        <table>
          <thead>
            <tr>
              <th>Sr.NO.</th>
              <th> Id</th>
              <th>Name</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {

              user.map((ele, i) => {
                console.log("Returnig user");

                return (

                  <tr key={i}>

                    <td>{i + 1}</td>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                  </tr>);

              })

            }
          </tbody>


        </table>
      </div>


    </div>

  )
}

export default showUser