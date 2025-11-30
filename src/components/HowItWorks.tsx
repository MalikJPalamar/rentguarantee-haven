
import { Search, FileText, Wrench, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Compare Options",
      description: "Browse eco-home upgrades. See costs, savings potential, and environmental impact.",
    },
    {
      number: "02", 
      icon: FileText,
      title: "Get Free Quotes",
      description: "Request no-obligation quotes from trusted, certified installers in your area.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Professional Install",
      description: "Choose your installer and schedule a convenient time for installation.",
    },
    {
      number: "04",
      icon: TrendingDown,
      title: "Start Saving",
      description: "Enjoy lower bills, reduced carbon footprint, and a more comfortable home.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-primary-text">How It Works</h2>
          <div className="accent-line mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Getting eco-home upgrades has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--theme-primary)] text-white font-bold text-lg mb-4">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-[var(--theme-primary-light)] flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 theme-primary-text" />
              </div>
              <h3 className="text-lg font-bold theme-primary-text mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90"
            onClick={() => document.getElementById('upgrades')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Comparing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
