import React from 'react';
import stroke_bar from '../../assets/SVGs/strokes-bars.svg';
import enhanced_shopping from '../../assets/SVGs/enhanced_shopping.svg';
import SimpleSlider from './SimpleSlider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = () => {
  return (
    <div className='md:min-h-[calc(100vh-7rem)] min:h-[calc(100vh-4rem)]'>
      <div className="md:relative grid ">
        <div className="overflow-x-hidden overflow-y-hidden md:h-[calc(100vh-7rem)] min-h-[calc(100vh-4rem)]">
          <SimpleSlider />
        </div>

        <div className="absolute grid md:top-[150px] rounded opacity-75 bg-white left-[20px] top-[300px] md:left-[13%] p-4 ">
          <span className="text-[#015FF1] flex gap-[5px] justify-center items-center">
            <img src={stroke_bar} alt="stroke_bar" />
            <p>Welcome To GENESIS</p>
          </span>
          <h3 className="font-bold text-center text-4xl my-[5px]">Buy Now</h3>
          <h3 className="font-bold text-center text-4xl text-[#015FF1]">Pay Later</h3>
          <Link to="/signup">
            <button className="uppercase self-center mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[100vw] h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
