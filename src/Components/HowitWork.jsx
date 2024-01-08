import React from 'react'
import { How } from '../Constants/Data'
import styles from '../styles';

const HowitWork = () =>(
    
  <section className={`${styles.flexCenter} my-4`}>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">How It Works</h1>
      <div className="flex flex-col sm:flex-row sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {How.map((about) => (
          <div key={about.id} className="flex justify-between flex-col px-10 py-3 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            <img src={about.img} alt={about.title} className="w-full h-40" />
            
                <h4 className=" font-semibold text-[20px] leading-[32px] text-white mt-5">
                  {about.title}
                </h4>
            <p className="font-normal text-[18px] leading-[32.4px] text-white">
              {about.content}
            </p>
           
          </div>
        ))}
      </div>
    </div>
</section>

  );

export default HowitWork;
