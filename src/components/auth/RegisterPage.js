import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/firebase';


export default function RegisterPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function onFormSubmit(e) {
    e.preventDefault();
    try{
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCred);
      
      navigate('/');
    } catch(err) {
      //deal with error
      alert(err.message);
    }

  }

  return (
    <div className='container my-4'>
      <div className='card card-body'>

        <h1>Register</h1>

        <p>Register with your email and password</p>
        
        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
            value={email} //change to email state updates the value of input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"/>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
            value={password} //change to password state updates the value of input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"/>
          </div>

          <div className='text-center'>
            <button className='btn btn-primary px-5'>
              Register
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}