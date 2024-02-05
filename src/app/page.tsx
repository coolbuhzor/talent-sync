import CommunicationPath from "@/components/partials/home/communication-path";
import Faq from "@/components/partials/home/faq";
import Hero from "@/components/partials/home/hero";
import Partners from "@/components/partials/home/partners";
import Testimonial from "@/components/partials/home/testimonial";
import WhyChooseUs from "@/components/partials/home/why-choose-us";
import Footer from "@/components/partials/layout/footer/footer";
import Navbar from "@/components/partials/layout/navbar/navbar";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Testimonial />
      <Faq />
      <CommunicationPath />
      <Footer />
    </main>
  );
}
