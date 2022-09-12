import { Flex, Text, Heading, SimpleGrid, } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";
import { CardTestimonials } from "./CardTestimonials";

const testimonialsArray = [
  {
    image: "https://bit.ly/dan-abramov",
    text: "Meu nome é Matheus, sou estudante de programação, com 2 anos de experiencia em Marketing Digital e Edição de Videos. Apaixonado por tecnologia e games desde pequeno, sonho em um dia trabalhar na area de Desenvolvimento de Games",
    name: "Matheus Van Dyke",
    role: "UX-UI / Dev",
  },
  {
    image: "https://bit.ly/dan-abramov",
    text: "Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site",
    name: "Henrique Soto",
    role: "UX / Design",
  },
  {
    image: "https://bit.ly/dan-abramov",
    text: "Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site",
    name: "Shiellyn Bruna",
    role: "UX / Design",
  },
  {
    image: "https://bit.ly/dan-abramov",
    text: "Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site",
    name: "Thiago Avellaneda",
    role: "UX / Design",
  }
]
export const Testimonials = () => {
  return (
    <Flex
      h="auto"
      w="full"
      px="10vh"
      marginTop="45px"
      marginBottom="45px"
      alignItems="center"
      flexDir="column">
      <HeadingSections
        HighlightTitle="Criadores"
        title="Criadores da Landing Page"
        text="Squad 11 - BinaryThree
        Agradecemos a oportunidade de mostrar o nosso projeto de Landing Page para a nossa Sponsor Razor, que, alem de fazer produtos de altissima qualidade, tambem investe em alunos de programação"
      />
      <SimpleGrid minChildWidth="250px" spacing="20px" justifyItems="center">
        {testimonialsArray.map((testimonial) => (
          <CardTestimonials
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
