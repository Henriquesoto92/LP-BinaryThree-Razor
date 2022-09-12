import { Flex, Icon, Text, Heading } from "@chakra-ui/react";

export const CardFeature = ({ icon, heading, text }) => {
  return (
    <Flex flexDir="column" alignItems="center" w="340px" h="230px" gap="16px">
      <Flex
        borderRadius="full"
        bg="purple.100"
        justifyContent="center"
        align="center"
        p="15px"
      >
        <Icon as={icon} fontSize="34px" color="white" />
      </Flex>
      <Heading
        fontSize="24px"
        lineHeight="34px"
        fontWeight="700"
        align="center"
      >
        {heading}
      </Heading>
      <Text align="center" fontSize="18px" lineHeight="27px" color="#9BA9B4">
        {text}
      </Text>
    </Flex>
  );
};
