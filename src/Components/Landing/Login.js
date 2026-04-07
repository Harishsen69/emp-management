import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
import Nature from './demo.jpeg';
function Login() {
  return (
    <div>
        <Link to='/dashboard'><button>Login</button></Link>
        <Image src={Nature} height={200}/>
    </div>
  )
}

export default Login