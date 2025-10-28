import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import TopCategories from '@/app/components/TopCategories';
import About from '@/app/components/About';
import OnlineCourses from '@/app/components/OnlineCourses';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';
import ContactForm from "@/app/components/contact";
import SapOverview from "@/app/components/sap-overview";
import WhyChooseUs from '@/app/components/study'; 
import ScrollingMarquee from "@/app/components/scrolling";
import OurSponsors from './components/our-sponsers';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollingMarquee />
       <SapOverview />
      <TopCategories />
      <About />
      <OnlineCourses />
      <WhyChooseUs />
      <Testimonials />
      <OurSponsors />
      <ContactForm />
      <Footer />
    </main>
  );
}
