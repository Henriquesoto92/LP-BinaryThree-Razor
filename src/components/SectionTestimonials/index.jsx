import { Flex } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";
import { CardTestimonials } from "./CardTestimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./styles.css";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

const testimonialsArray = [
  {
    image: "../public/images/Foto-Matheus.jpeg",
    text: "Meu nome é Matheus, sou estudante de programação, com 2 anos de experiencia em Marketing Digital e Edição de Videos. Apaixonado por tecnologia e games desde pequeno, sonho em um dia trabalhar na area de Desenvolvimento de Games",
    name: "Matheus Van Dyke",
    role: "UX-UI Design / Dev",
    linkedin: "none",
    github: "https://github.com/matheus-vandyke",
  },
  {
    image: "../public/images/Foto-Henrique.jpg",
    text: "Futuro P.O e programador aos 30",
    name: "Henrique Soto",
    role: "Tech Lead / Dev / UX-UI Design",
    linkedin: "https://www.linkedin.com/in/henriquesoto92/",
    github: "https://github.com/Henriquesoto92",
  },
  {
    image: "../public/images/Foto-Shiellyn.jpeg",
    text: "Meu nome é Shiellyn, tenho 20 anos sou estudante de programação e moro em Guarulhos - SP. Atualmente estudo Desenvolvimento fullstack, mas tenho uma preferência maior pelo Frontend.",
    name: "Shiellyn Bruna",
    role: "Scrum Master / Dev",
    linkedin: "https://www.linkedin.com/in/shiellyn-ferreira/",
    github: "https://github.com/ShiellynFerr",
  },
  {
    image: "../public/images/Foto-Thiago.jpeg",
    text: "Meu nome é Thiago, tenho 18 anos, sou estudante de programação e moro Porto Alegre - RS.  Atualmente estudo em duas frentes principais: Desenvolvimento de Games e Desenvolvimento Web.",
    name: "Thiago Avellaneda",
    role: "Apresentador / Dev / M-FOR(I)",
    linkedin: "https://www.linkedin.com/in/thiagojat/",
    github: "https://github.com/thiagojat",
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
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          840: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonialsArray.map((testimonial) => (
          <SwiperSlide key={testimonial.name} w="fit-content">
            <CardTestimonials
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
              role={testimonial.role}
              linkedin={testimonial.linkedin}
              github={testimonial.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <SimpleGrid minChildWidth="250px" spacing="20px" justifyItems="center">
        {testimonialsArray.map((testimonial) => (
          <CardTestimonials
            key={testimonial.name}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
            role={testimonial.role}
          />
        ))}
      </SimpleGrid> */}
    </Flex>
  );
};
