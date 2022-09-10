import React from 'react'
import {auth, provider} from '../firebase'
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

const Login = () => {

  const router = useRouter();  
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((response) => {
        localStorage.setItem("Token", response.user.accessToken)
        router.push("/CreateBlog")

      }
      )
      .catch(error=>{
        alert('Cannot sign in, Please try again')
      })
    }
    const logout = () => {
      signOut(auth).then(() => {
        localStorage.removeItem("Token")
        router.push("/")

      }
      )
     
    }


  return (
    <div className='text-center my-20 '>
      <h1 className='font-bold'> Lets get started</h1>
      <p>First create your CHAPTERS.com account. </p>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 my-10 border-blue-700 hover:border-blue-500 rounded" onClick={signInWithGoogle}>
  Sign in with Google Account
</button>
<p>
 <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={logout}>
  Log Out
</button>
    </p>


    </div>
       
  )
}

export default Login
