import React from "react";
import {Link} from "react-router-dom";
import { Button, Form, Input, Radio } from "antd";

function Register() {
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
           <section className="left-section">
            <h1>Register to BookMyShow</h1>
           </section>
          <section className="right-section">
            <Form layout="vertical">
              <Form.Item 
            
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
               rules={[{required: true, message: "Please input your name!"}]}>
                <Input    type="text"   id ="text"placeholder="input placeholder"/>
              </Form.Item>


              <Form.Item 
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
               rules={[{required: true, message: "Please input your email!"}]}>
              <Input placeholder="Enter your Email" />


              </Form.Item>
              <Form.Item 
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
               rules={[{required: true, message: "Please input your password!"}]}>
                <Input  type="password"  id="password" placeholder="Enter your Password" />
              </Form.Item>

              <Form.Item>
                <Button block type="primary" style={{fontSize: '1rem', fontWeight:600}}>Submit</Button>
              </Form.Item>
            </Form>
        <div>
          <p>Already a user? <Link to="/login" > login now</Link> </p>
        </div>
          </section>

        </main>
       
      </header>


    </>
  );
}

export default Register;
