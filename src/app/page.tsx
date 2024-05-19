import Head from '../components/first';
import SecondSection from '../components/second';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head />
      <div className="container mx-auto">
        <SecondSection />
      </div>
    </div>
  );
};

export default Home;
