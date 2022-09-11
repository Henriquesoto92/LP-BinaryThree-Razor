import { Flex, Icon, Text, Heading } from "@chakra-ui/react";

export const CardFeature = ({ icon, heading, text }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      w="340px"
      h="230px"
    >
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
        fontWeight="bold"
        align="center"
      >
        {heading}
      </Heading>
      <Text align="center">{text}</Text>
    </Flex>
  );
};
