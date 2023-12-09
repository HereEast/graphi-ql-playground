import { ReactElement } from "react";
import { HeroSection } from "../../_sections/HeroSection";
import { ImageSection } from "../../_sections/ImageSection";
import { TeamSection } from "../../_sections/TeamSection";
import { CourseSection } from "../../_sections/CourseSection";

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
