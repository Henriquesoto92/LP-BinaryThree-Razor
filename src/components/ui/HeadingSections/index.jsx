import { Flex, Text, Heading, Highlight } from "@chakra-ui/react";

export const HeadingSections = ({ HighlightTitle, title, text }) => {
  return (
    <Flex
      h="auto"
      w={["full"]}
      px="10vh"
      marginTop="45px"
      marginBottom="45px"
      alignItems="center"
      flexDir="column"
      gap="30px"
    >
      <Heading fontSize="40px" textAlign="center">
        <Highlight
          query={HighlightTitle}
          color="purple.100"
          styles={{
            py: "1",
            fontFamily: "especial",
            fontSize: "40px",
            color: "purple.100",
          }}
        >
          {title}
        </Highlight>
      </Heading>
      <Text
        fontWeight="400"
        fontSize="20px"
        lineHeight="30px"
        textAlign="center"
        color="#9BA9B4"
      >
        {text}
      </Text>
    </Flex>
  );
};
