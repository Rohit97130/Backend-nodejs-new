
import React, { useEffect, useState } from "react";
import { GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // random checks
 const [user , setUser] = useState(null);


  //random check
  const getValidUser = async () => {
    try {
      const response = await GetCurrentUser();
      setUser(response.data); 
      console.log(user);
      
      console.log("rrrr" , response);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  return <div> {user && user.name} {children}</div>;
}

export default ProtectedRoute;