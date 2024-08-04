import { Container } from "./container";
import { Hero } from "./hero";
import { OurHistory } from "./our-history";
import { WeddingDetails } from "./wedding-details";
import Gallery from "./gallery";
import { RSVPForm } from "./rsvp-form";
import { HeroParallax } from "./hero-parallax";

export function LandingPage({ dictionary }: { dictionary: any }) {

  return (
    <Container>
      <Hero />
      {process.env.NODE_ENV == "development" && <>
        <OurHistory />
        <WeddingDetails />
        <Gallery />
        <RSVPForm />
      </>}
    </Container>
  );
}
