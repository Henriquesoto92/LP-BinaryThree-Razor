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
      <Image w="200px" src="../../../public/images/logo_branca_sem_fundo.png" />
      <Flex gap="100">
        <Link> Empresa </Link>
        <Link> Produto </Link>
        <Link> Diferencial </Link>
        <Link> Criadores </Link>
      </Flex>
    </Flex>
  );
};
