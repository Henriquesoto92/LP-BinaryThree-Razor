import { Flex } from "@chakra-ui/react";
import { HeadingSections } from "../ui";
import { CardWorkstation } from "./CardWorkstation.jsx";
import AOS from "aos";
import { useEffect } from "react";

const workstationArray = [
  {
    image: "../../../public/gif/placadevideo.gif",
    text: "Seu tempo e dinheiro, a Worstation Pro é o melhor investimento que você pode fazer. Alcence a máxima velocidade e o extremo desempenho com as linhas Nvidia RTX Quadro.",
    title: "Chip Gráfico que não arrega",
    highlightTitle: "Chip Gráfico",
    alt: "placa de video",
  },
  {
    image: "../../../public/gif/processador.gif",
    text: "Máquinas com processadores de última geração Intel ou AMD e até 64 núcleos. Customize com multiprocessamento de até 2 CPUs por PC e a linha Intel XEON e AMD Threadripper ou AMD Epyc.",
    title: "Processador Workaholic",
    highlightTitle: "Processador",
    alt: "processador",
  },
  {
    image: "../../../public/gif/placadevideo.gif",
    text: "Menos RGB, mais performance. As nossas máquinas não lembram um pisca-pisca de Natal ou raladores de cozinha. A Workstation Pro é lindo como todo computador tem que ser, discreto, com um design industrial e preparado para trabalhar.",
    title: "Design sem frescura",
    highlightTitle: "Design",
    alt: "placa de video",
  },
];

export const SectionWorkstation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Flex h="auto" w="full" alignItems="center" flexDir="column" gap="30px">
      <HeadingSections
        HighlightTitle="workstations"
        title="workstations que não tem medo de pegar no pesado"
        text="Máquinas para uso em computação gráfica, renderização profissional, simulações em realtime, análises complexas de dados e softwares de alta exigência."
      />
      <Flex />
      <Flex alignItems="center" flexDir="column" h="100%" w="100%" gap="50px">
        {workstationArray.map((workstation, index) => (
          <div
            key={workstation.title}
            data-aos={index % 2 ? "fade-left" : "fade-right"}
          >
            <CardWorkstation
              image={workstation.image}
              text={workstation.text}
              title={workstation.title}
              highlightTitle={workstation.highlightTitle}
              alt={workstation.alt}
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};
