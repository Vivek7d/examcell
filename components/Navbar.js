"use client"

import Image from 'next/image'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const raleway = Raleway({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };


function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(true)
    const [menu, setMenu] = useState(false)
    return (
        // <div className='w-screen h-[200px] bg-[#e2e8f0] flex space-x-4 items-center mx-10'>
        <div className='w-screen '>
            {/*
             <Image
                src='/logo.png'
                width={200}
                height={200}
                alt="logo icon"
            />
            <div className='flex space-x-4 w-screen'>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>Home</h1>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>About us</h1>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>Notifications</h1>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>Result</h1>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>Exam Time table</h1>
                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-lg text-center `}>Hall Tickets</h1>
            </div> */}

            <Head>
        <title>Examcell SIES GST</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className=' flex md:justify-center justify-evenly items-center space-x-12  md:p-10 md:ml-20 md:mr-20'>
        <div className={`${raleway.className} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
        <Image
                src='/logo.png'
                width={200}
                height={200}
                alt="logo icon"
            />        </div>
        {
          menu ?
            (
              <motion.div
                whileTap={{ scale: 0.97 }}
                className='md:hidden object-contain rounded-full p-4 ' onClick={() => setMenu(false)}>
                <Image
                  src="/close.png"
                  width={20}
                  height={20}
                  alt="close icon"
                  className='object-contain'
                />
              </motion.div>
            )
            :
            (
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className='md:hidden object-contain rounded-full p-4 ' onClick={() => setMenu(true)}>
                <Image
                  src="/menu.png"
                  width={20}
                  height={20}
                  alt="menu icon"
                  className='object-contain'
                />
              </motion.div>
            )
        }
        <div className={`${manrope.className} hidden md:flex md:justify-evenly md:items-center md:font-medium md:w-92 space-x-12`}>
          <Link href='/' className='transition ease-in delay-150 hover:text-gray-300 text-gray-500 duration-300 cursor-pointer '>Home</Link>
          <Link href='/about'  className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>About us</Link>
          <Link href='/'  className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>Notifications</Link>
          <Link href='/' className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>Result</Link>
          <Link href='/' className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>Exam Timetable</Link>
          <Link href='/' className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>Hall Tickets</Link>
        </div>
      </motion.div>
      <motion.nav
        initial={false}
        animate={menu ? "open" : "closed"}
        className={menu ? "flex justify-center items-center" : "hidden"}
      >
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: menu ? "auto" : "none" }}
          className='flex flex-col justify-center items-center my-10 space-y-12'
        >
          <Link href='/'>
            <motion.li variants={itemVariants} className='text-xl p-2'>Home</motion.li>
          </Link>
          <Link href='/about'>
            <motion.li variants={itemVariants} className='text-xl p-2'>About us</motion.li>
          </Link>
          <Link href='/'>
            <motion.li variants={itemVariants} className='text-xl p-2'>Notifications</motion.li>
          </Link>
          <Link href='/'>
            <motion.li variants={itemVariants} className='text-xl p-2'>Result</motion.li>
          </Link>
          <Link href='/'>
            <motion.li variants={itemVariants} className='text-xl p-2'>Exam Timetable</motion.li>
          </Link>
          <Link href='/'>
            <motion.li variants={itemVariants} className='text-xl p-2'>Hall Tickets</motion.li>
          </Link>

        </motion.ul>
      </motion.nav>

        </div>
    )
}

export default Navbar