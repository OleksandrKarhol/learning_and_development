import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import UseCases from './components/UseCases';
import ProductFeatures from './components/ProductFeatures';
import Benefits from './components/Benefits';
import FeaturesGrid from './components/FeaturesGrid';
import IndustryUseCases from './components/IndustryUseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: 56 }}>
        <Hero />
        <DemoVideo />
        <UseCases />
        <ProductFeatures />
        <Benefits />
        <FeaturesGrid />
        <IndustryUseCases />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
