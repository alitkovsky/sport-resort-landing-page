import Header from "@/components/header";
import Hero from "@/components/hero";
import Find from "@/components/find";
import More from "@/components/more";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Find />
      <More />
      <Footer />
    </main>
  );
};