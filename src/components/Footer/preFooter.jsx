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
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Flex h="100px" bg="black.300" w="full" justify="center" flexDir="row">
      <Image />
      <Text>é para: </Text>
      <Text fontFamily="especial" color="purple.100" fontSize="45px">
        {" "}
        {word}
      </Text>
    </Flex>
  );
}

export default PreFooter;
