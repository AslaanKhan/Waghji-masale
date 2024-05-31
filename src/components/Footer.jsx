import React from 'react'
import { footerLinks } from '../constants'

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

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Waghji Masale. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <a href={link} key={link} className="font-semibold cursor-pointer text-gray text-xs">
                {link.charAt(0).toUpperCase() + link.slice(1)}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer