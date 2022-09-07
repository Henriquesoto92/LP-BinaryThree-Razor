import { Button } from "@chakra-ui/react";

export const TextEspecial = ({ texto, fontSize }) => {
  return (
    <Button
      fontSize={fontSize}
      lineHeight="bold"
      color="blue"
      _hover={{
        color: "red",
      }}
    >
      {texto}
    </Button>
  );
};
