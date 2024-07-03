import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'
import { WaghjiMap, exploreVideo } from '../utils'
import gsap from 'gsap'

const Features = () => {
    const videoRef = useRef()

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom'
            },
            // onComplete: ()=> {
            //     videoRef.current.play();
            // }
        })

        animateWithGsap('#features_title', { opacity: 1, y: 0, }),
            animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 })
        animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2inOut' })
    }, [])

    return (
        <section className='h-full common-padding bg-zinc relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id='features_title' className='section-heading'>
                        Get to know our Waghji.
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div id='features_title' className='translate-y-20 opacity-0 mt-10 mb-24 pl-24'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>
                            Waghji Masale!
                        </h2>
                        <h2 className='mt-2 text-2xl lg:text-5xl font-semibold text-gray-500'>
                            Made in India.
                        </h2>
                    </div>
                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative w-full flex items-center'>
                            <img src={exploreVideo} alt="exploreVideo" ref={videoRef} id='exploreVideo' className='h-full w-full object-cover object-center' />
                        </div>

                        <div className='flex w-full mt-6'>
                            <div className='flex w-full justify-center'>
                                <div className='overflow-hidden h-[80vh] w-full'>
                                    <img src={WaghjiMap} alt="expolore-img" className='feature-video g_grow' />
                                </div>                                                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features