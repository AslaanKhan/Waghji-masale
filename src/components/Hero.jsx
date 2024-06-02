import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Hero = () => {
  
  useGSAP(
    () => {
      gsap.to('#hero-title',{ opacity: 1, delay: 0.5 })
      gsap.to('#cta',{ opacity: 1, y: -50, delay: 1, ease: 'bounce' })
    }
  )
  return (
    <section className='w-full md:nav-height h-[calc(100vh-20px)] bg-black relative'>
      <div className='h-[90%] w-full flex-center flex-col'>
        <div id='hero-title' className='opacity-0 flex flex-col md:w-10/12 w-11/12 items-center justify-center text-center'>
          <img src="assets/images/Waghji Masale_files/WAGHJI LOGO.png" className='w-32 md:w-40 lg:w-48' alt="Waghji Logo" />
          <div className='mx-auto max-w-[80%] mt-4'>
            <h3 className='text-white font-bold mb-4'>
              <span className='text-2xl md:text-3xl'>OUR SERVICES</span>
            </h3>
            <p className='text-white text-sm md:text-lg leading-relaxed mb-4'>
              We produce the taste of Indian cuisine with our mixed spices and provide quality food products in India. As the leading spices manufacturer and supplier, we offer fresh 'almost-ready' food solutions like Chicken Masala, Biryani masala, Mixes, Curries, Dals, and 'fully-ready' accompaniments to go with them.
            </p>
            <p className='text-white text-sm md:text-lg leading-relaxed mb-4'>
              We were born to assist you in preparing food… and not just any food, but yummy, finger-licking food, for yourselves and your family.
            </p>
            <p className='text-white text-sm md:text-lg leading-relaxed mb-4'>
              We also provide summer drinks like nimbu pani, faluda, jaljeera, sweet lassi etc.
            </p>
            <p className='text-white text-sm md:text-lg leading-relaxed mb-4'>
              And we deal with housekeeping products, like duster, sponge, mop, kitchen wiper, Dish Cleaner, Multi Functional Cleaner etc.
            </p>
          </div>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 -translate-y-80 mt-6'>
        <a href="#highlights" className='btn hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded '>
          About us
        </a>
      </div>
    </section>
  );
}

export default Hero