import { Flex } from "@chakra-ui/react";
import {
  Footer,
  SectionHeader,
  Navbar,
  SectionFeature,
  SectionWorkstation,
  Testimonials,
  SectionZAP,
} from "../components";

function LandingPage() {
  return (
    <Flex flexDir="column" gap="5vh">
      <Navbar />
      <Flex flexDir="column" justifyItems="center" px="10vw" gap="5vh">
        <SectionHeader />
        <SectionFeature />
        <SectionWorkstation />
        <SectionZAP />
        <Testimonials />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default LandingPage;
