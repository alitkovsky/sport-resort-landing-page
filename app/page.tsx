import Header from "@/components/header";
import Hero from "@/components/hero";
import Featured from "@/components/featured";
import About from "@/components/about";
import Recommendation from "@/components/recommendation";
import Find from "@/components/find";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendation />
      <Find />
      <Testimonials />
      <Footer />
    </main>
  );
};