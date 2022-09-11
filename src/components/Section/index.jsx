import { Flex, SimpleGrid } from "@chakra-ui/react";
import { TextEspecial } from "../ui";
import { Feature } from "../index";
import { RiFilePaperFill } from "react-icons/ri";
import {
  AiFillTool,
  AiFillFileText,
  AiFillMessage,
  AiFillBulb,
  AiFillPhone,
} from "react-icons/ai";

const featureQtd = [
  {
    heading: "Licitações",
    text: "Orçamentos personalizados para processos administrativos e licitações, tanto para órgão públicos, quanto para o setor privado",
    icon: RiFilePaperFill,
  },
  {
    heading: "Seleção de componentes homologados",
    text: "Testados pela desenvolvedora do software que você utiliza",
    icon: AiFillTool,
  },
  {
    heading: "Garantia",
    text: "Maior prazo de garantia dentro do mercado nacional",
    icon: AiFillFileText,
  },
  {
    heading: "Estudo Técnico",
    text: "Para identificar a máquina ideal para cada profissional dentro da empresa",
    icon: AiFillBulb,
  },
  {
    heading: "Pós-vendas",
    text: "Você receberá um acompanhamento desde a compra até a entrega do produto",
    icon: AiFillPhone,
  },
  {
    heading: "Suporte on-site",
    text: "com atendimento presencial em todos os estados do Brasil",
    icon: AiFillMessage,
  },
];

export const Section = () => {
  return (
    <Flex
      flexDir="column"
      as="header"
      h="auto"
      w="full"
      justify="center"
      px="10vh"
    >
      <TextEspecial texto="aqui é uma section" fontSize="70px" />
      <TextEspecial texto="aqui é um mini section" fontSize="20px" />
      <SimpleGrid minChildWidth="340px" spacing="64px" justifyItems="center">
        {featureQtd.map((feature) => (
          <Feature
            key={feature.heading}
            icon={feature.icon}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
