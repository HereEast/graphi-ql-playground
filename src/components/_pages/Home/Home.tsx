import { ReactElement } from "react";
import { HeroSection, ImageSection, CourseSection, TeamSection } from "../../";

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
