import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const SectionHeader = () => {
  return (
    <Flex
      h="auto"
      w="full"
      marginTop="45px"
      marginBottom="45px"
      alignItems="center"
      flexDir="column"
      gap="30px"
    >
      <Heading
        fontSize="52px"
        lineHeigth="62px"
        textAlign="center"
        fontWeight="800"
      >
        Computadores profissionais de alta performance
      </Heading>
      <Text
        fontWeight="400"
        fontSize="20px"
        lineHeight="30px"
        textAlign="center"
        color="#9BA9B4"
      >
        Nosso objetivo é oferecer as melhores máquinas para que a sua empresa
        tenha as ferramentas necessárias para alcançar o máximo de
        produtividade. Podemos ajudar você a encontrar a solução ideal para as
        necessidades da sua empresa.
      </Text>

      <Flex gap="30px">
        <Button
          bg="purple.100"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          py="12px"
          w="150px"
        >
          Descubra
        </Button>
        <Button
          bg="black.400"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          py="12px"
          w="150px"
        >
          Saiba Mais
        </Button>
      </Flex>
      <Image src="../../../../public/images/foto-header.png" />
    </Flex>
  );
};
