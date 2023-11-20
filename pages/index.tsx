import Image from 'next/image'
import NavBar from './components/NavBar'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Skills from './components/skills'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'
import BtnResume from './components/buttons/btnResume'
import heintz from "../public/img/marventz.png"
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillInstagram,
  AiFillGithub
} from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  return (
    <>
      <div>
        <Head>
          <title>Marventz Beneche</title>
        </Head>
      </div>
      <main className='px-10 my-10'>
        <section className="min-h-screen">
          {/* <NavBar /> */}
          <div className='text-center'>
            <h2 className='text-5xl py-2 font-medium'>Marventz Beneche</h2>
            <h3 className='text-2xl py-2'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-grey-500'>Transforming Imagination into Code: Your Vision, Our Creation</p>
            <div className='text-5xl flex justify-center gap-5'>
              <a href="https://twitter.com/heintz04">
                <AiFillTwitterCircle className="cursor-pointer"/>
              </a>
              <a href="https://www.linkedin.com/in/benechem/">
                <AiFillLinkedin className="cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/heintz06/">                
                <AiFillInstagram className="cursor-pointer"/>
              </a>
              <a href="https://github.com/heintz06">
                <AiFillGithub className="cursor-pointer"/>
              </a>
              {/* <a href="">
              </a> */}
              
            </div>         
          </div>
            <div className='relative mx-auto bg-gradient-to-b
                            from-yellow-100 rounded-full w-80 
                            h-80 mt-10 overflow-hidden' >
                  <Image src={heintz} alt="Marventz" layout='fill'/>
            </div>
            <div className='text-center my-5'>
              <BtnResume/>
            </div>
        </section>
         {/*  <section className='flex justify-center mb-10'>
          <div className="">
            <h3 className='text-3xl py-5 text-center'> 🧰 Languages and Tools:</h3>
            <div className="items-center"><Skills/></div> 
          </div>
        </section>*/}
      </main>
      </>
  )
}
