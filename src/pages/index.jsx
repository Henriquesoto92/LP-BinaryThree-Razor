import { TriangleUpIcon } from "@chakra-ui/icons";
import { Divider, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import {
  Footer,
  SectionHeader,
  Navbar,
  SectionFeature,
  SectionWorkstation,
  SectionTestimonials,
  SectionZAP,
  SectionCall,
} from "../components";

function LandingPage() {
  const [visible, setVisible] = useState(true);

  const toggleVisble = () => {
    let scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", toggleVisble);

  return (
    <Flex flexDir="column" gap="5vh">
      <Navbar />
      <IconButton
        display={!visible ? "flex" : "none"}
        alignItems="center"
        color="purple.100"
        bg="black.400"
        w="50px"
        h="50px"
        fontSize="30px"
        position="fixed"
        right="20px"
        bottom="20px"
        borderRadius="full"
        animation="bounce 2s ease-in-out infinite"
        boxShadow="0px 0px 20px rgb(255, 255, 255, 0.5)"
        icon={<TriangleUpIcon />}
        onClick={() => {
          window.scrollTo({
            top: 0,
            smoth: "behavior",
          });
        }}
      />
      <Flex flexDir="column" justifyItems="center" px="10vw" gap="5vh">
        <SectionHeader />
        <Divider />
        <SectionFeature />
        <Divider />
        <SectionWorkstation />
        <Divider />
        <SectionZAP />
        <Divider />
        <SectionTestimonials />
        <Divider />
        <SectionCall />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default LandingPage;
