import { Flex, SimpleGrid } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";
import { CardTestimonials } from "./CardTestimonials";

const testimonialsArray = [
  {
    image: "../public/images/Foto-Matheus.jpeg",
    text: "Meu nome é Matheus, sou estudante de programação, com 2 anos de experiencia em Marketing Digital e Edição de Videos. Apaixonado por tecnologia e games desde pequeno, sonho em um dia trabalhar na area de Desenvolvimento de Games",
    name: "Matheus Van Dyke",
    role: "UX-UI Design / Dev",
  },
  {
    image: "https://bit.ly/dan-abramov",
    text: "Futuro P.O e programador aos 30",
    name: "Henrique Soto",
    role: "Tech Lead / Dev / UX-UI Design",
  },
  {
    image: "../public/images/Shiellyn.jpeg",
    text: "Meu nome é Shiellyn, tenho 20 anos sou estudante de programação e moro em Guarulhos - SP. Atualmente estudo Desenvolvimento fullstack, mas tenho uma preferência maior pelo Frontend.",
    name: "Shiellyn Bruna",
    role: "Scrum Master / Dev",
  },
  {
    image: "../public/images/Foto-Thiago.jpeg",
    text: "Meu nome é Thiago, tenho 18 anos, sou estudante de programação e moro Porto Alegre - RS.  Atualmente estudo em duas frentes principais: Desenvolvimento de Games e Desenvolvimento Web.",
    name: "Thiago Avellaneda",
    role: "Apresentador / Dev / M-FOR(I)",
  },
];

export const SectionTestimonials = () => {
  return (
    <Flex h="auto" w="full" alignItems="center" flexDir="column" gap="30px">
      <HeadingSections
        HighlightTitle="Criadores"
        title="Criadores da Landing Page"
        text="Squad 11 - BinaryThree
        Agradecemos a oportunidade de mostrar o nosso projeto de Landing Page para a nossa Sponsor Razor, que, alem de fazer produtos de altissima qualidade, tambem investe em alunos de programação"
      />
      <SimpleGrid minChildWidth="250px" spacing="20px" justifyItems="center">
        {testimonialsArray.map((testimonial) => (
          <CardTestimonials
            key={testimonial.name}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
            role={testimonial.role}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
