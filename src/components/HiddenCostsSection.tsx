
import React from "react";
import { Flame, Thermometer, PoundSterling, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const HiddenCostsSection = () => {
  const scrollToUpgrades = () => {
    const element = document.getElementById('upgrades');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center theme-primary-text">
            The Hidden Costs of Not Upgrading Your Home
          </h2>
          
          <div className="accent-line mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every month you delay energy-efficient upgrades, you're losing more than just money. Sticking with outdated systems leaves your home vulnerable to:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <CostCard
            icon={Flame}
            title="Energy Waste"
            subtitle="Drives up bills month after month."
            description="Old boilers, poor insulation, and inefficient heating waste energy. The average UK home loses up to 25% of heat through the roof and walls, costing you hundreds each year."
            iconColor="theme-accent-text"
            bgColor="bg-accent-light"
            borderColor="border-gray-200"
            badgeColor="bg-[var(--theme-accent)]"
            glowColor="shadow-accent-glow"
          />
          
          <CostCard
            icon={Thermometer}
            title="Comfort Loss"
            subtitle="Cold spots, drafty rooms, or noisy systems."
            description="Without proper upgrades like heat pumps or insulation, you're stuck with uneven heating and rising discomfort — especially during UK winters."
            iconColor="theme-accent-text"
            bgColor="bg-accent-light"
            borderColor="border-gray-200"
            badgeColor="bg-[var(--theme-accent)]" 
            glowColor="shadow-accent-glow"
          />
          
          <CostCard
            icon={PoundSterling}
            title="Missed Government Grants"
            subtitle="Lose out on £1,000s in funding."
            description="Schemes like the £7,500 Boiler Upgrade Scheme or EV grants won't last forever. Waiting too long means you may miss the window to cut costs dramatically."
            iconColor="theme-accent-text"
            bgColor="bg-accent-light"
            borderColor="border-gray-200"
            badgeColor="bg-[var(--theme-accent)]"
            glowColor="shadow-accent-glow"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="accent"
            size="lg"
            onClick={scrollToUpgrades}
            className="text-base"
          >
            Explore Eco Upgrades
            <Leaf size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const CostCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  iconColor,
  bgColor,
  borderColor,
  badgeColor,
  glowColor,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  glowColor: string;
}) => {
  return (
    <Card className={`bg-white/95 rounded-xl p-8 shadow-md ${borderColor} h-full transform transition-all duration-300 hover:scale-[1.03] hover:${glowColor} relative overflow-hidden`}>
      {/* Warning badge with glow effect */}
      <div className="absolute -top-3 -right-3">
        <div className={`p-3 rounded-full ${badgeColor} shadow-lg flex items-center justify-center animate-pulse`}>
          <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-4 relative z-10">
        <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} strokeWidth={1.5} />
        </div>
        <h3 className={`text-xl font-bold text-center mt-4 mb-1 theme-accent-text`}>{title}</h3>
        <p className="text-sm text-gray-600 text-center font-medium">{subtitle}</p>
        <div className={`h-1 w-16 ${badgeColor} rounded-full mt-2 mb-2`}></div>
      </div>
      
      <div className="text-gray-700 text-center relative z-10 min-h-[100px]">{description}</div>
      
      <div className="text-center pt-4 pb-2 mt-4 border-t border-gray-100">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Avoidable Cost</span>
      </div>
    </Card>
  );
};

export default HiddenCostsSection;
