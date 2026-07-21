import Hero from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Advanced } from "@/components/Advanced";
import Limitations from "@/components/Limitations";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="flex-1 relative">
      <Hero />
      <Highlights />
      <Advanced />
      <Limitations />
      <HowItWorks />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}
