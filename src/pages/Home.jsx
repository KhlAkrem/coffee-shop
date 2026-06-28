import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Menu from '../components/sections/Menu';
import Gallery from '../components/sections/Gallery';
import Reviews from '../components/sections/Reviews';
import Location from '../components/sections/Location';
import Reservation from '../components/sections/Reservation';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Menu id="menu" />
        <Gallery id="gallery" />
        <Reviews id="reviews" />
        <Location id="location" />
        <Reservation id="reservation" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;