import React from 'react';
import image from '../../assets/MTN.jpg'

const Profile= () => {
  return (
    <div className="flex justify-between ">
      <div className='mt-7 font-bold'>
        <p>Hi, Brandon</p>
      </div>
      <img src={image} alt="Profile" className="rounded-full  mt-7 h-10 w-10"/>
    </div>
  );
};

export default Profile;
