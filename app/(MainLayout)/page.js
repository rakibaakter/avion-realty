import ExploreAreas from "@/components/home/ExploreAreas";
import ExploreOffPlans from "@/components/home/ExploreOffPlans";
import ExploreProperties from "@/components/home/ExploreProperties";
import ExploreRentReady from "@/components/home/ExploreRentReady";
import LatestBlog from "@/components/home/LatestBlog";
import MeetTeam from "@/components/home/MeetTeam";
import HeroRoot from "@/components/home/hero/HeroRoot";
import Inquiry from "@/components/shared/Inquiry";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* hero */}
      {/* <HeroRoot/> */}

      <HeroRoot />
      <div className="px-4 md:px-16 lg:px-40 space-y-16">
        <ExploreOffPlans />
        <ExploreProperties />
        <ExploreRentReady />
      </div>
      <div className="md:px-16 lg:px-40 space-y-16">
        <ExploreAreas />
        <MeetTeam />
      </div>

      <div className="px-4 md:px-16 lg:px-40">
        <LatestBlog />
      </div>

      <Inquiry />
    </main>
  );
}
