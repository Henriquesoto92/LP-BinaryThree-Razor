import { Flex } from "@chakra-ui/react";
import { TextEspecial } from "../ui";

export const Section = () => {
  return (
    <Flex as="header" h="130px" w="full" justify="center">
      <TextEspecial texto="aqui é uma section" fontSize="70px" />
      <TextEspecial texto="aqui é um mini section" fontSize="20px" />
    </Flex>
  );
};
