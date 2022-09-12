import { Flex } from "@chakra-ui/react";
import { HeadingSections} from "../ui";
import { BoxWorkstation, CardImg, Container } from "./style";

export const SectionWorkstation = () => {
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
      <HeadingSections
        HighlightTitle="workstations"
        title="workstations que não tem medo de pegar no pesado"
        text="Máquinas para uso em computação gráfica, renderização profissional, simulações em realtime, análises complexas de dados e softwares de alta exigência."
      />

      <Container>
        <BoxWorkstation>
          <div>
            <h2>
              <span>Chip Gráfico</span> que não arrega{" "}
            </h2>
            <p>
              Seu tempo e dinheiro, a Worstation Pro é o melhor investimento que
              você pode fazer. Alcence a máxima velocidade e o extremo
              desempenho com as linhas Nvidia RTX Quadro
            </p>
          </div>
          <CardImg>
          <img src="../../../public/gif/placadevideo.gif" alt="placa de video razor" />
          </CardImg>
        </BoxWorkstation>
        <BoxWorkstation>
          <CardImg>
          <img src="../../../public/gif/processador.gif" alt="processador razor"/>
          </CardImg>
          <div>
            <h2>
              <span>Processador</span> Workaholic
            </h2>
            <p>
              Máquinas com processadores de última geração Intel ou AMD e até 64
              núcleos. Customize com multiprocessamento de até 2 CPUs por PC e a
              linha Intel XEON e AMD Threadripper ou AMD Epyc.
            </p>
          </div>
        </BoxWorkstation>
        <BoxWorkstation>
          <div>
            <h2>
            <span>Design</span> sem frescura
            </h2>
            <p>
              Menos RGB, mais performance. As nossas máquinas não lembram um
              pisca-pisca de Natal ou raladores de cozinha. A Workstation Pro é
              lindo como todo computador tem que ser, discreto, com um design
              industrial e preparado para trabalhar.
            </p>
          </div>
          <CardImg>
          <img src="../../../public/gif/placadevideo.gif" alt="placa de video razor" />
          </CardImg>
        </BoxWorkstation>
      </Container>
    </Flex>
  );
};
