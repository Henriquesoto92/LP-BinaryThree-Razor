import { Flex, IconButton, Text } from "@chakra-ui/react";
import PreFooter from "./preFooter";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socialConst = [
  {
    aria: "linkedin",
    href: "https://linkedin.com",
    icon: <FaLinkedin />,
  },

  {
    aria: "Twitter",
    href: "https://Twitter.com",
    icon: <FaTwitter />,
  },
  {
    aria: "Github",
    href: "https://github.com",
    icon: <FaGithub />,
  },
  {
    aria: "Instagram",
    href: "https://Instagram.com",
    icon: <FaInstagram />,
  },
  {
    aria: "Facebook",
    href: "https://Facebook.com",
    icon: <FaFacebook />,
  },
];

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="full"
      h="300px"
      justify="space-between"
      flexDir="column"
      alignItems="center"
    >
      <PreFooter />
      <Flex justify="space-evenly" w="full">
        <Text> dados 1</Text>
        <Text> dados 2</Text>
        <Text> dados 3</Text>
      </Flex>
      <Flex>
        {socialConst.map((Social) => (
          <IconButton
            key={Social.aria}
            aria-label={Social.aria}
            as="a"
            href={Social.href}
            icon={Social.icon}
            borderRadius="full"
            w="35px"
            bg="black.300"
            color="purple.100"
          />
        ))}
      </Flex>
    </Flex>
  );
};
