import React, { useEffect, useState,useRef } from 'react'
import { useRouter } from 'next/router';
import { addDoc, collection } from "firebase/firestore";
import { database, auth } from "../firebase";
import { async } from '@firebase/util';
import styles from '../styles/Home.module.css'
const CreateBlog = () => {
  const [title,setTitle]=useState('');
  const [post,setPost]=useState('');
  let router=useRouter();
  const blogCollection = collection(database, "blogs");
  //error text
  const errorText=useRef(null)
  // submit Blog
  const submitBlog= async ()=>{
    if(title==='' || post==='')
    {
      errorText.current.setAttribute('style','display:block')
      return false
    }
    else{
      errorText.current.setAttribute('style','display:none')
      await addDoc(blogCollection, {
        title:title,
        post:post,
        author: { name: auth.currentUser.displayName }
  
  
      });
      router.push('/Blog')
    
    

    }
    
  };

  useEffect(() => {
    let token = localStorage.getItem('Token')
    if (!token) {
      router.push('/Login')
      alert('Please sign in')
      
    }
  })
   
  

  return (
    <div className='flex justify-center my-20'>
<form className="w-full max-w-lg">
    <h1 className='text-center font-extrabold font-sans'>Create a Blog</h1>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Title
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"  onChange={(e)=>setTitle(e.target.value)}/>
    </div>
  </div>
{/* Description */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Post
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48  resize-none md:resize" id="message"   onChange={(e)=>setPost(e.target.value)}></textarea>
      <h2 className= {styles.error} ref={errorText}>Please fill up all the fields!!!</h2>

    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={ submitBlog}>
        Submit
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
    </div>
  )
}

export default CreateBlog
