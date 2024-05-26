import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(
    () => {
      gsap.to('#hero-title',{ opacity: 1, delay: 0.5 })
      gsap.to('#cta',{ opacity: 1, y: -50, delay: 1, ease: 'bounce' })
    }
  )
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <div id='hero-title' className='opacity-0 flex flex-col md:w-10/12 w-9/12 items-center justify-center'>
          <img src="/assets/images/waghji-logo-Copy.png" className='w-[30%]' alt="" />
          <div className='mx-auto max-w-[80%] text-center line-clamp-[15] md:line-clamp-none'>
            <h3 className='text-white font-bold my-4'>
              <span className='text-bold'>OUR SERVICES</span>
            </h3>
            <p className='text-white md:text-lg text-sm md:leading-relaxed'>
              We produce the taste of Indian cuisine with our mixed spices and provide quality food products in India. As the leading spices manufacturer and supplier, we offer fresh 'almost-ready' food solutions like Chicken Masala, Biryani masala, Mixes, Curries, Dals, and 'fully-ready' accompaniments to go with them.
            </p>
            <p className='text-white md:text-lg text-sm md:leading-relaxed'>
              We were born to assist you in preparing food… and not just any food, but yummy, finger-licking food, for yourselves and your family.
            </p>
            <p className='text-white md:text-lg text-sm md:leading-relaxed'>
              We also provide summer drinks like nimbu pani, faluda, jaljeera, sweet lassi etc.
            </p>
            <p className='text-white md:text-lg text-sm md:leading-relaxed'>
              And we deal with housekeeping products, like duster, sponge, mop, kitchen wiper, Dish Cleaner, Multi Functional Cleaner etc.
            </p>
          </div>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 md:mt-6'>
        <a href="#highlights" className='btn'>Our Products</a>
        {/* <p className='font-normal text-xl'>
          from $199/month or $999
        </p> */}
      </div>
    </section>
  )
}

export default Hero