import Image from 'next/image'
import NavBar from './components/NavBar'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Skills from './components/skills'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import heintz from "../public/marventz.png"
import design from "../public/design.png"
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillInstagram,
  AiFillGithub
} from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  return (
    <>
      <div>
        <Head>
          <title>Marventz&apos;s Portfolio</title>
        </Head>
      </div>
      <main className='px-10'>
        <section className="min-h-screen">
          <NavBar />
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-orange-600 font-medium'>Marventz Beneche</h2>
            <h3 className='text-2xl py-2'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-grey-500'>Transforming Imagination into Code: Your Vision, Our Creation</p>
            <div className='text-5xl flex justify-center gap-5'>
              <AiFillTwitterCircle className="cursor-pointer"/>
              <AiFillLinkedin className="cursor-pointer"/>
              <AiFillYoutube className="cursor-pointer"/>
              <AiFillInstagram className="cursor-pointer"/>
              <AiFillGithub className="cursor-pointer"/>
            </div>         
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-orange-600 to-black rounded-full w-80 h-80 mt-10 overflow-hidden' >
              <Image src={heintz} alt="Marventz" layout='fill' objectFit='cover' />
            </div>
        </section>
        <section className='flex justify-center mb-20'>
          <div className="">
            <h3 className='text-3xl py-5 text-center'> 🧰 Languages and Tools:</h3>
            <div className="items-center"><Skills/></div>
          </div>
        </section>
      </main>
      </>
  )
}
