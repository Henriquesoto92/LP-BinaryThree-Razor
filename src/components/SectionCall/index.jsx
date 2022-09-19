import { Flex, Image, Button, useMediaQuery } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";
import { LogoRazor2 } from "../../assets";

export const SectionCall = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      flexDir={isLargerThan700 ? "row-reverse" : "column"}
      justify="center"
      alignItems="center"
    >
      <Image
        src={LogoRazor2}
        alt="Logo razor"
        w="238"
        h="238"
        borderRadius="16px"
      />
      <Flex flexDir="column" maxW="428px" align="center">
        <HeadingSections
          HighlightTitle="Contate-nos!"
          title="Ficou interessade? Contate-nos!"
          text=""
        />
        <Button
          as="a"
          href="https://razor.com.br/contato/"
          bg="purple.100"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          py="12px"
          w="150px"
        >
          Contato
        </Button>
      </Flex>
    </Flex>
  );
};
