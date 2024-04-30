import React from 'react'
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const endPoint = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault()
    const payLoad = {
      email: username,
      password
    }
    console.log(payLoad, "PAYLOAD")
    fetch(endPoint + '/login', {
      method: 'POST',
      body: JSON.stringify(payLoad)
    }).then((res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error("Biranze");
      }
    }).then(
      (data) => {
        localStorage.setItem("uid", data.uid)
        localStorage.setItem("email", data.email)
        localStorage.setItem("token", data.token)
        localStorage.setItem("isLoggedIn", "true")
        navigate('/admin');
      }
    ).catch(err => console.error(err))
  }
  return (
    <div className='flex justify-center mt-20 acre-yellow-bg'>
      <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={onHandleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="mail@mail.com"
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login
