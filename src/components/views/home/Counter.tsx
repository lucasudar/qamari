import Counter from "@/components/ui/counter";

export default function CounterSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <div className="flex flex-wrap justify-center">
          <Counter end={150} label="Satisfied Clients" />
          <Counter end={198} label="Built Projects" />
          <Counter end={10} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
};
