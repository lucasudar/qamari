import Counter from "@/components/ui/counter";

export default function CounterSection() {
  return (
    <section className="bg-white dark:bg-background py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-center text-lg uppercase tracking-widest mb-8 opacity-80">Our Achievements</h2>
        <div className="flex flex-wrap justify-center">
          <Counter end={200} label="Satisfied Clients" symbol="+"/>
          <Counter end={100} label="Your Satisfaction" symbol="%"/>
          <Counter end={15} label="Years of Experience" symbol="+"/>
        </div>
      </div>
    </section>
  );
};
