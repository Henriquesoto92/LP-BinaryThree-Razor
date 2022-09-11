import { Flex, Text, Heading, Highlight } from "@chakra-ui/react";

export const HeadingSections = ({ HighlightTitle, title, text }) => {
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
        <Highlight
          query={HighlightTitle}
          style={{
            fontFamily: "especial",
            color: "purple.100",
            w: "fit-content",
          }}
        >
          {title}
        </Highlight>
      </Heading>
      <Text>{text}</Text>
    </Flex>
  );
};
