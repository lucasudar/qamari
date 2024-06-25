import Hero from "@/components/views/home/Hero";
import Clients from "@/components/views/home/Clients";
import CoreFeatures from "@/components/views/home/CoreFeatures";
import CounterSection from "@/components/views/home/Counter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <CoreFeatures />
      <CounterSection />
    </>
  );
}
