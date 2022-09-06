import React from 'react'
import { getDocs, collection, doc } from "firebase/firestore";
import { auth, database } from "../firebase";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const Blog = () => {
  const [blogLists, setBlogtList] = useState([]);
  const blogCollection = collection(database, "blogs");
  let router = useRouter()
  useEffect(() => {
    let token = localStorage.getItem('Token')
    if (token) {
      getBlog()
    }
    if (!token) {
      router.push('/Login')
    }
  }, [])
  const getBlog = async () => {
    await getDocs( blogCollection)
      .then((response) => {
        setBlogtList (response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        }))
      })
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">CHAPTERS BLOG</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Its creativity and you.</p>
    </div >
      {blogLists.map((blogs) => {
        return (
           <div className="flex flex-row flex-wrap -m-4 items-center ">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-x-slate-600 p-6 rounded-lg"> 
        
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{blogs.title}</h2>
          <p className="leading-relaxed text-base">{blogs.post}</p>
          <h3>@{blogs.author.name}</h3>

        </div>
     </div>

 
</div>
       

        )
      })}
      </div>
</section>
    </div>
  );
}

export default Blog
