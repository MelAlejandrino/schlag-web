import Hero from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Advanced } from "@/components/Advanced";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Highlights />
      <Advanced />
      <HowItWorks />
      <Footer />
    </main>
  );
}
