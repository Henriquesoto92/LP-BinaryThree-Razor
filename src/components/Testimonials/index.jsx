import { Flex, Text, Heading, Avatar, Divider } from "@chakra-ui/react";
import { CardTestimonials } from "./CardTestimonials";

const testimonialsArray = [
  {
    image: "https://bit.ly/dan-abramov",
    text: "Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site",
    name: "Matheus Van Dyke",
    role: "UX / Design",
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
      <Heading display="flex">
        <Text fontFamily="especial" color="purple.100" w="fit-content">
          {"Criadores"}
        </Text>{"  da Landing Page"}
      </Heading>
      <Text textAlign="center" marginLeft="">
        Squad 11 - BinaryThree
        Agradecemos a oportunidade de mostrar o nosso projeto de Landing Page para a nossa Sponsor Razor, que, alem de fazer produtos de altissima qualidade, tambem investe em alunos de programação
      </Text>
      {testimonialsArray.map((testimonial) => (
        <CardTestimonials
          name={testimonial.name}
          text={testimonial.text}
          image={testimonial.image}
          role={testimonial.role}
        />
      ))}
    </Flex>
  );
};
