import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const words = [
  "Criadores",
  "Entusiastas",
  "Desenvolvedores",
  "Empresarios",
  "Apaixonados",
];

function PreFooter() {
  const [word, setWord] = useState(words[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= words.length) {
        clearInterval(interval);
        setCount(0);
      } else {
        setWord(words[counter]);
        setCount((count) => count + 1);
        counter++;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [count]);

  // const gerarPalavras = () => {
  //   let count = 0;
  //   setInterval(() => {
  //     console.log(words[count]);
  //     count++;
  //     count === words.length ? (count = 0) : 0;
  //   }, 1000);
  // };

  // gerarPalavras();

  return (
    <Flex
      h={["150px", "100px"]}
      bg="black.300"
      w="full"
      justify="center"
      alignItems="center"
      position="absolute"
    >
      <Flex
        flexDir={["column", "row"]}
        position="absolute"
        justify="start"
        alignItems="center"
        w={["300px", "fit-content"]}
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
          <Text whiteSpace="nowrap"> é para: </Text>
        </Flex>

        <Text fontFamily="especial" color="purple.100" fontSize="45px" l="10px">
          {word}
        </Text>
      </Flex>
    </Flex>
  );
}

export default PreFooter;
