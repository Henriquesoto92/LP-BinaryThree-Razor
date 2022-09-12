import { Flex, Text, Avatar, Divider } from "@chakra-ui/react";

export const CardTestimonials = ({ image, text, name, role }) => {
  return (
    <Flex
      width="full"
      height="full"
      background="#25282C"
      borderRadius="8px"
      boxShadow="0px 0px 20px rgb(255, 255, 255, 0.5)"
      p="20px"
      alignItems="start"
      flexDir="column"
      gap="10px"
    >
      <Avatar name={name} src={image} width="70px" height="70px" />
      <Text color="#9BA9B4">
        <Divider w="15px" />
        {text}
      </Text>
      <Divider />
      <Flex gap="5px">
        <Text color="#9BA9B4">{name}</Text>
        <Text color="purple.100">{role}</Text>
      </Flex>
    </Flex>
  );
};
