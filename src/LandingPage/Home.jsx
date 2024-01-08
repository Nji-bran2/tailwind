import React from 'react'
import styles from '../styles'
import {Navbar,Clients,Trynow,CardDeal,HowitWork, Hero,Business, Footer, Stats, Billing, Testimonials } from '../Components/import';


const  Home = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} bg-dimBlue w-full`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <dir className={`${styles.boxWidth} w-full`}>
        <Hero/>
        </dir>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <dir className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Clients/>
          <Billing/>
          <CardDeal/>
          <HowitWork/>
          <Testimonials/>
          <Trynow/>
        </dir>
      </div>
      <div className="bg-primary w-full overflow-hidden">
      <Footer/>
      </div>
    </div>
  );
  
  export default Home
  