import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { addDoc, collection } from "firebase/firestore";
import { database, auth } from "../firebase";

const CreateBlog = ({isAuth}) => {
  const [title,setTitle]=useState('');
  const [post,setPost]=useState('');
  const router=useRouter();
  const submitBlog=()=>{
    var blog={
      title:title,
      post:post

    };
    console.log(blog);
    router.push('/');
    
  }
  useEffect(()=>{
    if(!isAuth){
      router.push('/Login')
    }
  },[])
  return (
    <div className='flex justify-center my-7'>
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
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"  onChange={(e)=>setPost(e.target.value)}></textarea>
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
