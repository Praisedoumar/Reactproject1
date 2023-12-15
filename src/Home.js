import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { FaPlusCircle, FaShoppingBag, FaTruck } from 'react-icons/fa'
import { SlSupport } from 'react-icons/sl'
import { CiRepeat } from 'react-icons/ci'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  /* The code snippet is defining a function called `generateDots` that generates a grid of dots. */
  const rows = 8
  const columns = 8

  const generateDots = () => {
    const dots = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        dots.push(
          <div
            key={`${i}-${j}`}
            className='dot w-2 h-2 bg-[orange] rounded-full'
          ></div>
        )
      }
    }
    return dots
  }

  return (
    <main className=''>
      <header className='bg-[#3B5D50] xlScreenDesktop:px-[10rem] laptop:px-14 laptop:py-5 '>
        <Navbar />

        <section className='xlScreenDesktop:pt-[10rem] laptop:pt-[5rem] laptop:grid-cols-2 laptop:content-between laptop:place-items-center grid  '>
          <div className='flex flex-col justify-start items-start gap-20'>
            <h1 className='xlScreenDesktop:w-[70%] laptop:text-7xl laptop:w-full laptop:leading-[5rem] font-semibold text-white '>
              Modern Interior Design Studio
            </h1>

            <div className='flex justify-start items-start gap-5'>
              <button
                type='button'
                className='bg-[#F9BF29] py-3 px-5 rounded-full capitalize'
              >
                show now
              </button>
              <button
                type='button'
                className='border py-3 px-5 rounded-full capitalize text-white'
              >
                explore
              </button>
            </div>
          </div>

          <div className=''>
            <img
              src='/couch.png'
              alt='img'
              className='w-full h-full object-cover'
            />
          </div>
        </section>
      </header>

      <section className='grid xlScreenDesktop:p-[10rem] laptop:grid-cols-4 laptop:content-between laptop:place-items-center laptop:gap-10 laptop:py-10 '>
        <div className='flex flex-col justify-start items-start gap-5 w-full '>
          <h1 className='text-6xl font-medium'>
            Crafted with excellent material.
          </h1>
          <p className='opacity-50'>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done.
          </p>
          <button
            type='button'
            className='bg-black py-3 px-5 rounded-full capitalize text-white'
          >
            explore
          </button>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex flex-col justify-center items-center gap-5 w-full relative cursor-pointer '
        >
          <img src='/product-1.png' alt='img' className='w-[15rem] h-[20rem]' />

          <div className='flex flex-col justify-center items-center gap-3 w-full'>
            <h1 className='text-xl font-medium'>Nordic Chair</h1>
            <span className='font-semibold'>$50.00</span>
          </div>
          <div
            className={`${
              isHovered
                ? 'content before:absolute before:top-[8rem] before:left-0 before:w-full before:h-[80%] before:bg-[#35736E1A] before:rounded-2xl before:-z-10 '
                : ''
            }`}
          >
            <button
              type='button'
              className={` ${
                isHovered
                  ? 'flex text-4xl absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2'
                  : 'hidden'
              }`}
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex flex-col justify-center items-center gap-5 w-full relative cursor-pointer '
        >
          <img src='/product-2.png' alt='img' className='w-[15rem] h-[20rem]' />

          <div className='flex flex-col justify-center items-center gap-3 w-full'>
            <h1 className='text-xl font-medium'>Nordic Chair</h1>
            <span className='font-semibold'>$50.00</span>
          </div>
          <div
            className={`${
              isHovered
                ? 'content before:absolute before:top-[8rem] before:left-0 before:w-full before:h-[80%] before:bg-[#35736E1A] before:rounded-2xl before:-z-10 '
                : 'hidden'
            }`}
          >
            <button
              type='button'
              className={` ${
                isHovered
                  ? 'flex text-4xl absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2'
                  : 'hidden'
              }`}
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex flex-col justify-center items-center gap-5 w-full relative cursor-pointer '
        >
          <img src='/product-3.png' alt='img' className='w-[15rem] h-[20rem]' />

          <div className='flex flex-col justify-center items-center gap-3 w-full'>
            <h1 className='text-xl font-medium'>Nordic Chair</h1>
            <span className='font-semibold'>$50.00</span>
          </div>
          <div
            className={`content  ${
              isHovered
                ? 'before:absolute before:top-[8rem] before:left-0 before:w-full before:h-[80%] before:bg-[#35736E1A] before:rounded-2xl before:-z-10'
                : 'hidden'
            }`}
          >
            <button
              type='button'
              className={` ${
                isHovered
                  ? 'flex text-4xl absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2'
                  : 'hidden'
              }`}
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>
      </section>

      <section className='grid xlScreenDesktop:p-[10rem] laptop:grid-cols-2 laptop:content-between laptop:place-items-center laptop:gap-10 laptop:p-10  '>
        <div className='flex flex-col justify-start items-start gap-5'>
          <h1 className='text-3xl font-bold'>Why Choose Us</h1>
          <p className='laptop:w-[70%] opacity-50 '>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </p>

          <div className='grid laptop:grid-cols-2 laptop:content-between laptop:place-items-center laptop:gap-5 laptop:pt-14 '>
            <div className='flex flex-col justify-start items-start gap-5'>
              <FaTruck className='text-3xl' />
              <h4 className='font-semibold text-xl'>Fast & Free Shipping </h4>
              <p className='opacity-50'>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-5'>
              <FaShoppingBag className='text-3xl' />
              <h4 className='font-semibold text-xl'>Easy to shop </h4>
              <p className='opacity-50'>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-5'>
              <SlSupport className='text-3xl' />
              <h4 className='font-semibold text-xl'>24/7 support </h4>
              <p className='opacity-50'>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-5'>
              <CiRepeat className='text-3xl' />
              <h4 className='font-semibold text-xl'>Hassle free returns</h4>
              <p className='opacity-50'>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='dot-grid grid grid-cols-8 gap-10 absolute -top-[5rem] -left-[5rem] -z-10 '>
            {generateDots()}
          </div>
          <img
            src='/portait.jpg'
            alt='img'
            className='object-cover object-center rounded-xl laptop:w-[40rem] laptop:h-[50rem] '
          />
        </div>
      </section>
    </main>
  )
}
