import { Button, Input, Spacer } from "@nextui-org/react";
import React,{ useEffect, useState } from "react";
import { axiosInstance, tokenCurr } from "../lib/axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const login = async() => {
    try {
      const response = await axiosInstance.post("/auth/login",{
          username: username,
          password: password
        })
        console.log('[LOGIN]',response)
        localStorage.setItem('token', response.data.data.token);

        if(response.data.status.code == 201){ //if success
          navigate('/');
        }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  useEffect(()=>{
    const storedToken = localStorage.getItem('token');
    let statusLogin = false
    storedToken?statusLogin=true:statusLogin=false
    
    if(statusLogin){
      console.log('[ALREDY Login]')
      navigate('/');
    }
  })

  return (
    <div className="flex justify-center max-h-full mt-20">
      <div className=" border border-2 p-10 rounded-md shadow-sm align-middle ">
          <div className="text-left">
            <h1 className="font-bold text-lg">Login Page</h1>
              <div className="my-3 w-64">
                  <h3 className="">Username</h3>
                  <Input
                    value={username}
                    onChange={handleChangeUsername}
                    className="p-1 bg-gray-50 rounded-lg"
                    bordered
                    placeholder="Masukan username"
                  />
              </div>

              <div className="my-3">
                  <h3 className="">Password</h3>
                  <Input
                    value={password}
                    onChange={handleChangePassword}
                    className="p-1 bg-gray-50 rounded-lg"
                    bordered
                    type="password"
                    placeholder="Masukan password"
                  />
              </div>
          </div>
          <Button
            onClick={login}
            className="bg-teal-500 rounded-md text-white w-full"
          >
            Login
          </Button>
      </div>
    </div>
  );
};
export default LoginPage;
