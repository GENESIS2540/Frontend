import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinnedIcon,
  Twitter,
} from 'lucide-react';
import ContactModal from '../faqReferals/ContactModal';

const Footer = () => {
  return (
    <div className="bg-[#015FF1] text-white py-[20px] md:py-10 mt-[140px] ">
      <div className="grid md:grid-cols-4 sm:grid-cols-2  md:gap-[20px] w-[80%] mx-[auto]">
        <div className="grid gap-5 md:gap-0 md:text-left text-center">
          <div className="md:flex items-center justify-center md:justify-start gap-[5px]">
            <p className="text-[30px] font-bold cursor-pointer">Genesis</p>
          </div>
          <div className="flex text-center gap-2">
            <MapPinnedIcon />
            <p>Global</p>
          </div>
          <div className="flex gap-2">
            <Mail />
            <p>Genesis@gmail.com </p>
          </div>
        </div>
        <div className="py-5 text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Services</h4>
          <ol className="grid gap-[15px]">
            <Link to="/market-place">
              <li className="cursor-pointer hover:opacity-80">Market Place</li>
            </Link>
            <Link to="/printing">
              <li className="cursor-pointer hover:opacity-80">Printing</li>
            </Link>
            <Link to="/shipping">
              <li className="cursor-pointer hover:opacity-80">Shipping</li>
            </Link>
          </ol>
        </div>
        <div className="py-5 text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Helpful Links</h4>
          <ol className="grid gap-[15px]">
            <li className="cursor-pointer hover:opacity-80">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:opacity-80">Privacy policy</li>
            <li className="cursor-pointer hover:opacity-80">Blog</li>
          </ol>
        </div>
        <div className="py-5 text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Reach Us.</h4>
          <div className="flex flex-col gap-8">
            <ContactModal />
            <div className="flex gap-[15px]">
              <Facebook
                size={45}
                className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
              />

              <Instagram
                size={45}
                className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
              />
              <Twitter
                size={45}
                className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
              />
              <Linkedin
                size={45}
                className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3 w-[80%] mx-auto" />
      <p className="text-center text-sm">
        &copy;Genesis {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
