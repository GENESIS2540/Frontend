import React from 'react';
import stroke_bars from '../../assets/SVGs/strokes-bars.svg';
import master_card from '../../assets/SVGs/master-card.svg';
import online_business from '../../assets/SVGs/online-business.svg';
import { Link } from 'react-router-dom';
import CustomButton from '../../../../Common/Button';
import Card from '../Card';
import gif from './printer.gif';
import Airplanegif from './airplane.gif';
import shoppingCart from './shopping-cart.gif';
import discount from './discount.gif';

const Services = () => {
  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto text-center grid gap-[10px] pt-[20px]">
        <div className="flex gap-[5px] text-[#015FF1] font-semibold justify-center items-center">
          <img src={stroke_bars} alt="stroke_bars" />
          <p className="text-[22px]">Best Services</p>
        </div>
        <h3 className="md:text-[48px] text-[25px] text-[#484c68] font-bold">
          Entirely Providing The Best{' '}
          <span className="text-[#015FF1]">Services</span>
        </h3>
        <p>
          We offer a wide Range of Services To Our Costomers these Helps to meet
          every Costomer’s Needs and Expectations.
        </p>
      </div>
      <div className="lg:w-[80%] w-[90%] mt-[50px] mx-[auto] grid md:grid-cols-2 gap-5 services-card">
        <Card>
       
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Enhanced Shopping Experience
          </h4>
          <img
              className="h-[100px] place-self-center w-[100px]"
              src={shoppingCart}
            alt="shoppingCart gif"
          />
          <p className="text-[#6D6D6D] leading-[18px]">
            We provide a seamless integration with the online retailers and also
            get to offer very convenient checkout options.
          </p>
          <Link to="/market-place">
            <CustomButton>Explore Market Place</CustomButton>
          </Link>
        </Card>
        <Card>
         
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Exclusive Offers and Discounts
          </h4>
          <img
              className="h-[100px] place-self-center w-[100px]"
              src={discount}
            alt="Discount gif"
          />
          <p className=" text-[#6D6D6D] leading-[18px]">
            We have offers, discounts and promotions available to our dedicated
            users who utilize our services.
          </p>
        </Card>
          <Card>
            <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
              Printing Services
            </h4>
            <img
              className="h-[100px] place-self-center w-[100px]"
              src={gif}
              alt="gif printing"
            />
            <p className=" text-[#6D6D6D] leading-[18px]">
              Expand your reach with our print-on-demand services for books,
              documents, and more.
            </p>
            <Link to="/printing">
            <CustomButton>Explore Printing Services</CustomButton>
          </Link>
          </Card>
          <Card>
            <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
              Shipping Services
            </h4>
            <img
              className="h-[100px] place-self-center w-[100px]"
              src={Airplanegif}
              alt="gif printing"
            />
            <p className=" text-[#6D6D6D] leading-[18px]">
              Deliver your products globally with fast, reliable shipping. From
              local to international, we ensure timely and safe delivery.
            </p>
            <Link to="/shipping">
            <CustomButton>Explore Shipping Services</CustomButton>
          </Link>
          </Card>
      </div>
    </div>
  );
};

export default Services;
