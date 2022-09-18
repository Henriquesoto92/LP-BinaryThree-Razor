import {
  Flex,
  Text,
  Avatar,
  Divider,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const CardTestimonials = ({
  image,
  text,
  name,
  role,
  linkedin,
  github,
}) => {
  return (
    <Flex
      minW="280px"
      maxW="300px"
      height="420px"
      background="#25282C"
      borderRadius="8px"
      boxShadow="0px 0px 20px rgb(255, 255, 255, 0.5)"
      p="20px"
      alignItems="start"
      justify="space-between"
      flexDir="column"
      gap="10px"
    >
      <Flex flexDir="column" gap="10px" position="relative">
        <Avatar name={name} src={image} width="70px" height="70px" />
        <Image
          src="../../../public/images/aspas.svg"
          position="absolute"
          left="50px"
        />
        <Text color="#9BA9B4" textIndent="50px" textAlign="left">
          {text}
        </Text>
      </Flex>
      <Flex flexDir="column" w="100%">
        <Divider />
        <Flex alignItems="center" justify="space-between">
          <Text color="#9BA9B4">{name}</Text>
          <Flex alignItems="center" gap="10px">
            <IconButton
              aria-label="Linkedin"
              as="a"
              target="blank"
              href={linkedin}
              icon={<FaLinkedin />}
              borderRadius="2px"
              size="0"
              bg="black.300"
              color="purple.100"
              cursor="pointer"
            />
            <IconButton
              aria-label="Linkedin"
              as="a"
              target="blank"
              href={github}
              icon={<FaGithubSquare />}
              borderRadius="2px"
              size="0"
              bg="black.300"
              color="purple.100"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Text color="purple.100">{role}</Text>
      </Flex>
    </Flex>
  );
};
