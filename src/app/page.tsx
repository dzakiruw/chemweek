import React from 'react';
import HeadSection from '../components/landingPage/first';
import SecondSection from '../components/landingPage/second';
import Competition from '@/components/landingPage/Competition';
import Contacts from '@/components/landingPage/Contacts';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeadSection />
      <SecondSection />
      <Competition />
      <Contacts />
    </div>
  );
};

export default Home;
