import Image from "next/image";
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider";
import { WelcomeSection } from "@/components/WelcomeSection"; 
import { FeatureSection } from "@/components/SectionSection";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <HeroSlider />
      <FeatureSection/>
        <WelcomeSection />
        <WhyChooseUs />


         
               <ServiceSection />
               <ProjectSection />
                 
                 
                        
                           
                              
            

    </main>
  );
}
