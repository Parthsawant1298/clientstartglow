import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stat from '@/components/Stat';
import About from '@/components/About';
import Why from '@/components/Why';
import Ctc from '@/components/Ctc';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonial';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero backgroundImage="/background.jpg" />
      <Stat />
      <About />
      <Services />
      <Why />
      
      <Testimonials />
      <Ctc />
      <Footer />
    </main>
  );
}