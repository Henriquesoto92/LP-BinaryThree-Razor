import { Flex, Image, Button, useMediaQuery } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";
import { LogoRazorZap } from "../../assets";

export const SectionZAP = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      flexDir={isLargerThan700 ? "row" : "column"}
      justify="center"
      alignItems="center"
    >
      <Image src={LogoRazorZap} alt="Logo razor" />
      <Flex flexDir="column" maxW="428px" align="center">
        <HeadingSections
          HighlightTitle="ZAP"
          title="Ainda tem dúvidas? Chama no ZAP"
          text=""
        />
        <Button
          as="a"
          href="https://api.whatsapp.com/send?phone=555430466350&text=Olá. Estou no site da Razor e gostaria de mais informações."
          bg="purple.100"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          py="12px"
          w="150px"
        >
          Whatsapp
        </Button>
      </Flex>
    </Flex>
  );
};
