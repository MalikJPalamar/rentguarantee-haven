import { ShieldCheck, Sun, ThermometerSun, Zap, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const GuaranteeSection = () => {
  return (
    <section id="upgrades" className="py-16 theme-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-primary-text">Popular Eco-Home Upgrades</h2>
          <div className="accent-line mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most effective ways to reduce your energy bills and carbon footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <UpgradeCard
            icon={Sun}
            title="Solar Panels"
            description="Generate your own clean electricity from sunlight. Typical savings of £300-£500 per year with potential to earn from excess energy sold back to the grid."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light"
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
          
          <UpgradeCard
            icon={ThermometerSun}
            title="Heat Pumps"
            description="Extract renewable heat from air or ground. Up to 4x more efficient than traditional boilers, reducing heating bills by 40-60% annually."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light"
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
          
          <UpgradeCard
            icon={Zap}
            title="Home Insulation"
            description="Keep warmth in and cold out with proper insulation. Loft, wall, and floor insulation can reduce heat loss by up to 45%, cutting bills significantly."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light" 
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />

          <UpgradeCard
            icon={Leaf}
            title="Smart Controls"
            description="Intelligent thermostats and energy monitors help optimise usage. See real-time consumption and automate heating schedules to maximise savings."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light" 
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
        </div>
      </div>
    </section>
  );
};

const UpgradeCard = ({
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
    <div className={`bg-white/95 rounded-xl p-8 shadow-lg border-2 ${borderColor} h-full transform transition-all duration-300 hover:scale-[1.03] hover:${glowColor} relative overflow-hidden`}>
      {/* Badge with glow effect */}
      <div className="absolute -top-3 -right-3">
        <div className={`p-3 rounded-full ${badgeColor} shadow-lg flex items-center justify-center animate-primary-pulse`}>
          <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      
      {/* Subtle diagonal background stripe */}
      <div className={`absolute top-0 right-0 h-32 w-32 -mr-10 -mt-10 rotate-45 opacity-10 ${badgeColor}`}></div>
      
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300", bgColor, borderColor, "border-2")}>
          <Icon className={cn("w-10 h-10", iconColor)} strokeWidth={1.5} />
        </div>
        <h3 className={`text-xl font-bold text-center mt-4 mb-1 theme-primary-text`}>{title}</h3>
        <div className={`h-1 w-16 ${badgeColor} rounded-full mt-1 mb-2`}></div>
      </div>
      <p className="text-gray-700 text-center relative z-10">{description}</p>
      
      {/* Savings indicator */}
      <div className="mt-5 text-center">
        <span className={`text-xs font-semibold uppercase tracking-wider theme-primary-text`}>Save on Bills</span>
      </div>
    </div>
  );
};

export default GuaranteeSection;
