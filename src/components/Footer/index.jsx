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
      <Flex w="full" fontSize="16px" lineHeight="24px" color="#9BA9B4">
        <Flex flexDir="column" w="300px" justify="center" alignItems="center">
          <Text fontWeight="700">Razor do Brasil LTDA</Text>
          <Text>19.847.182/0001-69</Text>
          <Text>0800 006 6350</Text>
          <Text>(54) 3046-6350</Text>
        </Flex>
        <Flex flexDir="column" w="300px" justify="center" alignItems="center">
          <Text fontWeight="700">Passo Fundo/RS</Text>
          <Text>Vila Planaltina - 99062-340</Text>
          <Text>Rua Dr. Plínio Moura, 153C</Text>
        </Flex>
        <Flex flexDir="column" w="300px" justify="center" alignItems="center">
          <Text fontWeight="700">ATENDIMENTO</Text>
          <Text>Segunda a sexta-feira</Text>
          <Text>9h às 12h e 14h às 18h</Text>
        </Flex>
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
