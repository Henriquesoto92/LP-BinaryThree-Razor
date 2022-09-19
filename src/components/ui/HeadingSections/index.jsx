import { Flex, Text, Heading, Highlight } from "@chakra-ui/react";

export const HeadingSections = ({ HighlightTitle, title, text }) => {
  return (
    <Flex h="auto" w="full" alignItems="center" flexDir="column" gap="30px">
      <Heading
        fontSize="40px"
        lineheigth="50px"
        textAlign="center"
        fontWeight="800"
      >
        <Highlight
          query={HighlightTitle}
          color="purple.100"
          styles={{
            py: "1",
            fontFamily: "especial",
            fontSize: "45px",
            color: "purple.100",
            whiteSpace: "none",
          }}
        >
          {title}
        </Highlight>
      </Heading>
      <Text
        fontWeight="400"
        fontSize="20px"
        lineheigth="30px"
        textAlign="center"
        color="#9BA9B4"
      >
        {text}
      </Text>
    </Flex>
  );
};
