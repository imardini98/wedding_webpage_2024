
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

import { Container } from "./container";
import { Hero } from "./hero";
import { OurHistory } from "./our-history";
import { WeddingDetails } from "./wedding-details";
import { Gallery } from "./gallery";
import { RSVPForm } from "./rsvp-form";

export function LandingPage() {
  return (
    <Container>
      <Hero/>
      <OurHistory/>
      <WeddingDetails/>
      <Gallery/>
      <RSVPForm/>
    </Container>
  );
}
