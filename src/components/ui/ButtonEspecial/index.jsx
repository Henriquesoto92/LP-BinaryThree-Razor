import { Button } from "@chakra-ui/react";

export const ButtonEspecial = ({ texto, fontSize }) => {
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
