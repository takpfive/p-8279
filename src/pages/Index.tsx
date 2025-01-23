import { FC } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import News from '@/components/News';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <AboutUs />
      <News />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;