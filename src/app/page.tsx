import React from 'react';
import Chemweek from '../components/landingPage/Chemweek';
import Theme from '../components/landingPage/Theme';
import Competition from '@/components/landingPage/Competition';
import Contacts from '@/components/landingPage/Contacts';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Chemweek />
      <Theme />
      <Competition />
      <Contacts />
    </div>
  );
};

export default Home;
