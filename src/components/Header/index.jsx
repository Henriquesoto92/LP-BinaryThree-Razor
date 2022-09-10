import { Flex } from "@chakra-ui/react";
import { TextEspecial } from "../ui";

export const Header = () => {
  return (
    <Flex as="header" h="130px" w="full" justify="center">
      <TextEspecial texto="aqui é um header" fontSize="70px" />
      <TextEspecial texto="aqui é um mini header" fontSize="20px" />
    </Flex>
  );
};
