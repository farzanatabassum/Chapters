import React from 'react'
import {auth, provider} from '../firebase'
import { signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/router';

const Login = () => {

  const router = useRouter();  
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((response) => {
        localStorage.setItem("Token", response.user.accessToken)
        router.push("/")
      })
    }


  return (
    <div className='text-center my-28'>
      <h1 className='font-bold'> Let's get started</h1>
      <p>First create your Chapters.com account. </p>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 my-20 border-blue-700 hover:border-blue-500 rounded" onClick={signInWithGoogle}>
  Sign in with Google Account
</button>
    </div>
  )
}

export default Login
