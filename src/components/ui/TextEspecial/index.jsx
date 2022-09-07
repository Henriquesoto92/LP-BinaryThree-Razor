import { Text } from "@chakra-ui/react";

export const TextEspecial = ({ texto, fontSize }) => {
  return (
    <Text
      fontSize={fontSize}
      lineHeight="bold"
      color="blue"
      _hover={{
        color: "red",
      }}
    >
      {texto}
    </Text>
  );
};
