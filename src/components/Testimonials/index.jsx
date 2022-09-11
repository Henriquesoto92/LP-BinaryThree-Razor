import { Flex, Text, Heading } from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Flex  
    h="auto"
    w="full"
    px="10vh"
    marginTop="45px" 
    marginBottom="45px" 
    alignItems="center" 
    flexDir="column">
      <Heading display="flex">
        <Text fontFamily="especial" color="purple.100" w="fit-content">
          {"Criadores"}
        </Text>{"  da Landing Page"}
      </Heading>
      <Text textAlign="center" marginLeft="">
            Squad 11 - BinaryThree
            Agradecemos a oportunidade de mostrar o nosso projeto de Landing Page para a nossa Sponsor Razor, que, alem de fazer produtos de altissima qualidade, tambem investe em alunos de programação
      </Text>
      
    </Flex>
  );
};
