import { Flex, Highlight, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LogoNomeRazor, LogoRazor } from "../../assets";

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
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

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

  return (
    <Flex
      bg="black.300"
      w="full"
      justify="center"
      alignItems="center"
      py="10px"
    >
      <Flex
        flexDir={["column", !isLargerThan700 ? "column" : "row"]}
        justify={!isLargerThan700 ? "center" : "start"}
        flexWrap={!isLargerThan700 ? "wrap" : "nowrap"}
        alignItems="center"
        w={["300px", "550px"]}
        gap="10px"
      >
        {!isLargerThan700 ? (
          <Flex gap="10px" alignItems="center">
            <Image h="60px" src={LogoRazor} alt="logo-razor" />
            <Image h="40px" src={LogoNomeRazor} alt="logo-nome-razor" />
          </Flex>
        ) : (
          <>
            <Image h="60px" src={LogoRazor} alt="logo-razor" />
            <Image h="40px" src={LogoNomeRazor} alt="logo-nome-razor" />
          </>
        )}
        {isLargerThan700 ? (
          <Text whiteSpace="nowrap" textAlign="center">
            <Highlight
              query={word}
              color="purple.100"
              styles={{
                py: "1",
                fontFamily: "especial",
                fontSize: "45px",
                color: "purple.100",
              }}
            >
              {`é para:  ${word}`}
            </Highlight>
          </Text>
        ) : (
          <Flex flexDir="column">
            <Text whiteSpace="nowrap" textAlign="center">
              é para:
            </Text>
            <Text whiteSpace="nowrap" textAlign="center">
              <Highlight
                query={word}
                color="purple.100"
                styles={{
                  py: "1",
                  fontFamily: "especial",
                  fontSize: "38px",
                  color: "purple.100",
                }}
              >
                {word}
              </Highlight>
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default PreFooter;
