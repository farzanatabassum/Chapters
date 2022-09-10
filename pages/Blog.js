import React from 'react'
import { getDocs, collection, doc } from "firebase/firestore";
import { database } from "../firebase";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const Blog = () => {
  const [blogLists, setBlogtList] = useState([]);
  const blogCollection = collection(database, "blogs");
  let router = useRouter()
  useEffect(() => {
    const getBlog = async () => {
      await getDocs( blogCollection)
        .then((response) => {
          setBlogtList (response.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          }))
        })
    }
    getBlog();
    
  }, [])
 
  return (
    <div>
     <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">CHAPTERS</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Its creativity and you.</p>
      </div> 
      {blogLists.map((blogs) => {
        return (
      <div className=" mt-4 grid  grid-8  lg:grid-cols-1">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{blogs.title}</h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blogs.post}</p>
              <h3 className="mb-2 text-xl  tracking-tight text-slate-600 dark:text-white">@{blogs.author.name}</h3>
          </article>               
      </div> 
       

        )
      })}
       </div>
</section>
    </div>
  );
}
    

export default Blog
