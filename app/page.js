import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stat from '@/components/Stat';
import About from '@/components/About';
import Why from '@/components/Why';
import Ctc from '@/components/Ctc';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonial';
import Services from '@/components/Services';
import Client from '@/components/Client';
import ProjectGallery from '@/components/Projectsgalary';
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stat />
      <About />
      <Services />
      <Why />
      <Client />
      
      <Testimonials />
      <ProjectGallery />
      <Ctc />
      <Footer />
    </main>
  );
}