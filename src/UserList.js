import React, { useState, useEffect } from "react";

import Axios from "axios";

function UserList() {
    const [User, setUser] = useState([]);
  
    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const User = data;
      setUser(User);
      console.log(User);
    };

  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
        <div className="users">
        {User.map((u) => (
        <p key={u.id}><div class="col-sm" >
        <div class="card"style={{height: "200px",width:"200px"}}>
        <div class="card-body">
         <div class="card-title" style={{fontSize:'30px'}}>{u.name}</div>
         </div>
        </div>
        </div></p>
      ))}
      </div>
    );
  }
  
  export default UserList;