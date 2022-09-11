import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { RiFilePaperFill } from "react-icons/ri";
import {
  AiFillTool,
  AiFillFileText,
  AiFillMessage,
  AiFillBulb,
  AiFillPhone,
} from "react-icons/ai";
import { CardFeature } from "./CardFeature";

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

export const SectionFeature = () => {
  return (
    <Flex
      flexDir="column"
      as="header"
      h="auto"
      w="full"
      justify="center"
      px="10vh"
    >
      <Heading display="flex" alignSelf="center">
        <Text as="span"> O nosso negócio é </Text>
        <Text
          as="span"
          fontFamily="especial"
          color="purple.100"
          w="fit-content"
        >
          {"Aumentar a Performance"}
        </Text>
        <Text as="span">{" do seu negócio"}</Text>
      </Heading>
      <Text textAlign="center" marginBottom="40px">
        Máquinas para uso em computação gráfica, renderização profissional,
        simulações em realtime, análises complexas de dados e softwares de alta
        exigência.
      </Text>
      <SimpleGrid minChildWidth="340px" spacing="64px" justifyItems="center">
        {featureQtd.map((feature) => (
          <CardFeature
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
