
import React from "react";
import { TrendingUp, Thermometer, Leaf, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

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
            The Hidden Costs of Energy Inefficiency
          </h2>
          
          <div className="accent-line mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every month without eco-upgrades costs you more than just higher bills. Inefficient homes are costing UK homeowners:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Cost Point 1 */}
          <CostCard
            icon={TrendingUp}
            title="Rising Energy Bills"
            description="UK energy prices have risen over 50% in recent years. Without efficiency upgrades, you're paying more each year for the same comfort level."
            iconColor="theme-accent-text"
            bgColor="bg-accent-light"
            borderColor="border-gray-200"
            badgeColor="bg-[var(--theme-accent)]"
            glowColor="shadow-accent-glow"
          />
          
          {/* Cost Point 2 */}
          <CostCard
            icon={Thermometer}
            title="Heat Loss"
            description="Up to 35% of heat escapes through walls and 25% through the roof in uninsulated homes. You're literally paying to heat the outside air."
            iconColor="theme-accent-text"
            bgColor="bg-accent-light"
            borderColor="border-gray-200"
            badgeColor="bg-[var(--theme-accent)]" 
            glowColor="shadow-accent-glow"
          />
          
          {/* Cost Point 3 */}
          <CostCard
            icon={Leaf}
            title="Carbon Footprint"
            description="Homes account for 14% of UK emissions. Inefficient heating and poor insulation increase your environmental impact unnecessarily."
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
  description,
  iconColor,
  bgColor,
  borderColor,
  badgeColor,
  glowColor,
}: {
  icon: React.ElementType;
  title: string;
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
      
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} strokeWidth={1.5} />
        </div>
        <h3 className={`text-xl font-bold text-center mt-4 mb-1 theme-accent-text`}>{title}</h3>
        <div className={`h-1 w-16 ${badgeColor} rounded-full mt-1 mb-2`}></div>
      </div>
      
      {/* Card description with fixed height to ensure consistent layout */}
      <div className="text-gray-700 text-center relative z-10 min-h-[120px]">{description}</div>
      
      {/* Risk indicator - Updated positioning with consistent padding */}
      <div className="text-center pt-4 pb-2 mt-4 border-t border-gray-100">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Avoidable Cost</span>
      </div>
    </Card>
  );
};

export default HiddenCostsSection;
