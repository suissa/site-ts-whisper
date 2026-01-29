import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import CLIReference from "@/components/CLIReference";
import APIReference from "@/components/APIReference";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative scanlines">
      <Hero />
      <Requirements />
      <CLIReference />
      <APIReference />
      <Notes />
      <Footer />
    </div>
  );
};

export default Index;
