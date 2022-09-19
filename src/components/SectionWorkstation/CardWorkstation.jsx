import {
  Flex,
  Text,
  Highlight,
  Heading,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import "./styles.css";

export const CardWorkstation = ({
  image1,
  image2,
  title,
  highlightTitle,
  text,
  alt,
}) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  return (
    <Flex
      flexDir={
        alt === "processador"
          ? isLargerThan780
            ? "row-reverse"
            : "column"
          : isLargerThan780
          ? "row"
          : "column"
      }
      gap={["20px", "50px"]}
      justify="space-between"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        alignItems={["center", "start"]}
        minW={["250px", "300px"]}
        maxW="500px"
        gap={["20px", "50px"]}
      >
        <Heading
          fontSize="32px"
          lineheigth="42px"
          fontWeight="700"
          textAlign={["center", "left"]}
        >
          <Highlight
            query={highlightTitle}
            color="purple.100"
            styles={{
              py: "1",
              fontFamily: "especial",
              fontSize: "40px",
              color: "purple.100",
              whiteSpace: "none",
            }}
          >
            {title}
          </Highlight>
        </Heading>
        <Text
          fontSize="20px"
          lineHeight="30px"
          letterSpacing="-0.25px"
          color="#9ba9b4"
          textAlign={["center", "left"]}
        >
          {text}
        </Text>
      </Flex>
      <Box
        borderRadius="12px"
        bg="black"
        minW={["250px", "350px"]}
        maxW="350px"
        h={["250px", "350px"]}
        boxShadow="0px 0px 20px rgb(255, 255, 255, 0.5)"
      >
        <div id="cf" className="shadow">
          <img alt="image1" className="bottom" src={image1} />
          <img alt="image2" className="top" src={image2} />
        </div>
      </Box>
    </Flex>
  );
};
