import { Flex, Text, Heading } from "@chakra-ui/react";
import { TextEspecial } from "../ui";

export const SectionWorkstation = () => {
  return (
    <Flex
      h="auto"
      w="full"
      px="10vh"
      marginTop="45px"
      marginBottom="45px"
      alignItems="center"
      flexDir="column"
    >
      <Heading display="flex">
        <Text fontFamily="especial" color="purple.100" w="fit-content">
          workstations
        </Text>
        que não tem medo de pegar no pesado
      </Heading>
      <Text>
        Máquinas para uso em computação gráfica, renderização profissional,
        simulações em realtime, análises complexas de dados e softwares de alta
        exigência.
      </Text>
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
    </Flex>
  );
};
