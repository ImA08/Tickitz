import React from 'react'
import feature1 from "../assets/svg/excess-1.svg"
import feature2 from "../assets/svg/excess-2.svg"
import feature3 from "../assets/svg/excess-3.svg"

export function Features() {
  return (
    <div className="flex flex-col px-32.5 py-24 gap-6">
        <p className='text-(--primary-color) text-[18px] font-bold'>WHY CHOOSE US</p>
        <h2 className='text-[32px]'>
          Unleashing the Ultimate Movie <br />
          Experience
        </h2>
        <div className="flex gap-8.5 ">
          <div>
            <img src={feature1} alt="" />

            <p className='text-[16px] mt-5 '>Guaranteed</p>
            <p className='text-[16px] mt-4 text-(--secondary-color)'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>

          <div>
            <img src={feature2} alt="" />

            <p className='text-[16px] mt-5'>Affordable</p>
            <p className='text-[16px] mt-4 text-(--secondary-color)'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>

          <div>
            <img src={feature3} alt="" />

            <p className='text-[16px] mt-5'>24/7 Customer Support</p>
            <p className='text-[16px] mt-4 text-(--secondary-color)'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
        </div>
      </div>
  )
}