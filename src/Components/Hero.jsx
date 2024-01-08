/* eslint-disable no-template-curly-in-string */
import React from 'react'
import styles from '../styles'
import discount from '../assets/discount.jpg'
import pay from '../assets/bankin.webp'
import  GetStarted from  '../Components/GetStarted'

const Hero = () => (
     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={'flex-1 ${styles.flexstart} flex-col xl:px-0 sm:px15 px-6'}>
    <div className="flex flex-row items-center  py-0 px-2 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span className="text-black">20%</span> Discount For{" "}
            <span className="text-black">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-Inter font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[80px] leading-[60px]  ">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
           <GetStarted /> 
          </div>
        </div>
        <h1 className="font-Inter font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[80px] leading-[60px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph}  py-6 max-w-[470px] mt-5`}>1
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative p-3`}>
        <img src={pay} alt="billing" className="w-[90%] h-[94%] relative z-[5] rounded-tr-3xl"  />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
     </section>
)

export default Hero