import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AboutMSIIC } from "@/components/sections/AboutMSIIC";
import { Tracks } from "@/components/sections/Tracks";
import { Timeline } from "@/components/sections/Timeline";
import { Prizes } from "@/components/sections/Prizes";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { WinnersOverlay } from "@/components/ui/WinnersOverlay";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <WinnersOverlay />
      <Hero />
      <About />
      <AboutMSIIC />
      <Tracks />
      <Timeline />
      <Prizes />
      <FAQ />
      <Team />
      <Contact />
    </div>
  );
}
