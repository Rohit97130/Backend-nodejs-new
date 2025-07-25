
import React, { useEffect, useState } from "react";
import { GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading} from "../redux/loaderSlice"
import { useDispatch } from "react-redux";
import {Layout ,Menu}  from "antd"
const { Header, Footer, Sider, Content } = Layout;
import { HomeOutlined , UserOutlined } from '@ant-design/icons';

function ProtectedRoute({ children }) {
  // random checks
 const navItems = [
   {
    label: 'Home',
    icon : <HomeOutlined />
   },
   {
     label: 'Profile',
     icon: <UserOutlined />
   }
 ]

 

 const [user , setUser] = useState(null);

   const dispatchEvent = useDispatch();

  //random check
  const getValidUser = async () => {
    try {
      //show Loader
      dispatchEvent(showLoading())
      const response = await GetCurrentUser();
      setUser(response.data); 
      console.log(user);
      dispatchEvent(hideLoading());
      //hide Loader
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


  
  return <div> 
     <>
      <Layout>
      <Header style={{
        backgroundColor: '#001529',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
      }}>
        <h3 className="demo-logo text-white m-0" style={{color:"white"}}> Book my Show</h3>
        <Menu theme="dark" mode="horizontal" items={navItems}/> 
        </Header>
    </Layout>
     </>
  </div>;
}

export default ProtectedRoute;