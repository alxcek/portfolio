import About from '../components/About';
import Header from '../components/Header';

const Home = () => (
  <div className="flex flex-col items-center">
    <div className="w-full max-w-7xl px-6">
      <Header />
      <About />
    </div>
  </div>
);

export default Home;
