import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const showUser = () => {

  const location = useLocation();
  var [user, setUser]=useState([]);
  const token=location.state.token;


  useEffect(() => {
    axios.get("http://localhost:9080/user", {
      headers: { authorization: location.state.token }
    }).then(res => {
      console.log("Res:",res.data.data);
      setUser( res.data.data);
      

    })
    .catch(err=>{
      alert(err);
    })

  }, []);
  return (
 
    <div>Show User{console.log("User:", user)}
      <div>
        <table border={2}>
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

              user.map((ele,i) => {
                console.log("Returnig user",ele);

                 return (

                  <tr key={i}>

                     <td>{i + 1}</td>
                     <td >{ele.id}</td>
                     <td>{ele.name}</td>
                     <td>{ele.username}</td>
                   </tr> 
                     );

              })

            }
          </tbody>


        </table>
      </div>


    </div>

  )
}

export default showUser