import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Chapters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='my-6 text-center font-bold '>
          Welcome to Chapters
        </h1>
        <Image src='/home-pg.jpg' alt='background picture' width={1800} height={1000}></Image>

        <p >
         
        </p>

        
      </main>

    </div>
  )
}