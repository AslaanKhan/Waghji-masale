import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
import { Link } from 'react-router-dom'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#highlights-title', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.25 })
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
            <h1 id='highlights-title' className='section-heading'>Poduct Categories.</h1>
            <div className='flex flex-wrap items-end gap-5'>
              <Link to={'/chicken'} className='link'>
                Chicken Spice mix
                <img src={rightImg} alt="watch"
                className='ml-2' />
              </Link>
              <Link to={'/mutton'} className='link'>
                Mutton Spice mix
                <img src={rightImg} alt="watch"
                className='ml-2' />
              </Link>
            </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights