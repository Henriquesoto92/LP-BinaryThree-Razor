import { Flex, Image, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      h="130px"
      bg="black.300"
      w="full"
      justifyContent="space-evenly"
      flexDir="column"
      alignItems="center"
    >
      <Flex justify="start" alignItems="center" gap="10px" w="fit-content">
        <Image
          h="60px"
          src="../../../public/images/logo-razor.svg"
          alt="logo-razor"
        />
        <Image
          h="40px"
          src="../../../public/images/logo-nome-razor.svg"
          alt="logo-nome-razor"
        />
      </Flex>
      <Flex gap="100">
        <Link> Empresa </Link>
        <Link> Produto </Link>
        <Link> Diferencial </Link>
        <Link> Criadores </Link>
      </Flex>
    </Flex>
  );
};
