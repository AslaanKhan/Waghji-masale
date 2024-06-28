import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="container mx-auto mt-10 px-6 md:px-0">
      <h1 className="text-4xl font-bold mb-12">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2">
            Call Us
          </h2>
          {/* <p className="text-lg select-text">
            9111136112
          </p> */}
          <a href='tel:9589757834' className="text-lg select-text">
            +91 958-975-7834
          </a>
          <h2 className="text-2xl font-semibold mt-4 mb-2 flex items-center gap-2">
            Whatsapp Us <FaWhatsapp color='#075E54' className='bg-green-500 rounded' size={16} />
          </h2>
          <a href='https://wa.me/9589757834' target='_blank' className="text-lg select-text">
          +91 958-975-7834
          </a>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Mail Us
          </h2>
          <a
            href="mailto:waghjiboys@gmail.com"
            className="text-lg underline select-text"
          >
            waghjiboys@gmail.com
          </a>
          <br />
        </div>
        <div className="space-y-6 select-text">
            <div>
          <h2 className="text-2xl font-semibold mb-2">
            Reach Us
          </h2>
          <p className="text-lg">
            72-A Ashraf Nagar
          </p>
          <p className="text-lg">
            Khajrana
          </p>
          <p className="text-lg">
            Indore, M.P. 452016
          </p>
          <br />
            </div>
          <div className="flex justify-start">
            <iframe
              className="h-[300px] md:h-[300px] w-[500px] md:w-[500px] rounded-lg" 
              src={`https://www.google.com/maps/embed/v1/place?q=22.730557086245458, 75.91358179586167&zoom=13&maptype=roadmap&key=AIzaSyB9DFjW4zfWDuZOQlR8Egndr8un_kXQvDU`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
