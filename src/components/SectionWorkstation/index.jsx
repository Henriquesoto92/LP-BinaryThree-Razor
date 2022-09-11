import { Flex } from "@chakra-ui/react";
import { HeadingSections, TextEspecial } from "../ui";

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
      <HeadingSections
        HighlightTitle="workstations"
        title="workstations que não tem medo de pegar no pesado"
        text="Máquinas para uso em computação gráfica, renderização profissional, simulações em realtime, análises complexas de dados e softwares de alta exigência."
      />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
      <TextEspecial texto="especificações técnicas" fontSize="30px" />
    </Flex>
  );
};
