import { ReactElement } from "react";
import { HeroSection } from "../../HeroSection";
import { ImageSection } from "../../ImageSection";
import { TeamSection } from "../../TeamSection";
import { CourseSection } from "../../CourseSection";

function Home(): ReactElement {
  return (
    <>
      <HeroSection />
      <ImageSection />
      <CourseSection />
      <TeamSection />
    </>
  );
}

export default Home;
