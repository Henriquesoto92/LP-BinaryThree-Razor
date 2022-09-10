import { Flex, Text } from "@chakra-ui/react";
import PreFooter from "./preFooter";

export const Footer = () => {
  return (
    <Flex as="footer" w="full" justify="center" flexDir="column">
      <PreFooter />
      <Text> isso é um footer</Text>
    </Flex>
  );
};
