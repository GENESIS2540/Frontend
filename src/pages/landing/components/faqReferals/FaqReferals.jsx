import React, { useState } from 'react';
import stroke_bars from '../../assets/SVGs/strokes-bars.svg';
import referral_img_1 from '../../assets/images/refer_img_1.png';
import referral_img_2 from '../../assets/images/refer_img_2.png';

const FaqReferals = () => {
  return (
    <div className="bg-[#F7F7F7] h-max py-[50px] mt-[80px]">
      <div className="grid content-evenly ">
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
        <div className="grid my-[10px] md:grid-cols-2 mx-[auto] w-[90%] md:w-[75%] gap-5 md:gap-16">
          <div className="grid content-evenly rounded-lg bg-[#ECF3FB] px-[10px] text-center h-[400px]">
            <h3 className="text-[45px] font-bold">Referrals</h3>
            <p className="text-[#OB1035] opacity-75 text-[16px] font-bold">
              Sign Up Or Sign In as a customer or a Vendor to invite your
              friends and earn rewards
            </p>
            <button className="bg-[#015FF1]	 justify-self-center text-white px-[20px] rounded w-max font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Invite Friends
            </button>
          </div>
          <div>
            <img
              className="h-[400px] rounded-lg w-full"
              src={referral_img_2}
              alt="referrals"
            />
          </div>
        </div>
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
      </div>
    </div>
  );
};

export default FaqReferals;
