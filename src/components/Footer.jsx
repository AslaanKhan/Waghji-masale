import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Get in touch: {' '}
            <span className="text-blue" >
            Email us at {' '} 
            <a href="mailto:waghjiboys@gmail.com" className='underline'>
            waghjiboys@gmail.com
            </a> 
            {' '}
            </span>
            or {' '}
            <span className="text-blue">
            call us directly on {' '}
            <a href='tel:9589757834' className="underline">
            +91 958-975-7834
            </a> 
            </span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between mt-2">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Waghji Masale. All rights reserved.</p>
          <div className="flex">
            {/* {footerLinks.map((link, i) => (
              <a href={link} key={link} className="font-semibold cursor-pointer text-gray text-xs">
                {link.charAt(0).toUpperCase() + link.slice(1)}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </a>
            ))} */}
            <a href='https://wa.me/9589757834' target='_blank' className='font-semibold cursor-pointer text-gray text-xs flex'> 
            <FaWhatsapp color='#075E54' className='bg-green-500' size={16} />
            <span className="mx-2"> | </span>
            </a>
            <a href="https://www.instagram.com/hameed.khatri/?igsh=MW0weGEzdnR4cHUzcA%3D%3D" target='_blank' className='font-semibold cursor-pointer text-gray text-xs flex'> 
            <FaInstagram size={16}  color='white' className='bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600' />
            <span className="mx-2"> | </span>
            </a>
            <a href="https://www.youtube.com/@waghjiboys2/featured" target='_blank' className='font-semibold cursor-pointer text-gray text-xs flex'> 
            <FaYoutube color='white' className='bg-[#FF0000]' size={16} />
            <span className="mx-2"> | </span>
            </a>
            <a href="mailto:waghjiboys@gmail.com" target='_blank' className='font-semibold cursor-pointer text-gray text-xs flex'> 
            <BiLogoGmail color='red' size={16} />
            <span className="mx-2"> | </span>
            </a>
            <a href="https://www.facebook.com/waghjimasalIndia/" target='_blank' className='font-semibold cursor-pointer text-gray text-xs flex'> 
            <FaFacebookSquare color='#1877F2' className='bg-[white]' size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer