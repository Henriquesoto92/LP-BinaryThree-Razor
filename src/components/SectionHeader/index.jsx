import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FotoHeader } from "../../assets";

export const SectionHeader = () => {
  return (
    <Flex h="auto" w="full" alignItems="center" flexDir="column" gap="30px">
      <Heading
        fontSize="52px"
        lineheight="62px"
        textAlign="center"
        fontWeight="800"
      >
        Computadores profissionais de alta performance
      </Heading>
      <Text
        fontWeight="400"
        fontSize="20px"
        lineheight="30px"
        textAlign="center"
        color="#9BA9B4"
      >
        Nosso objetivo é oferecer as melhores máquinas para que a sua empresa
        tenha as ferramentas necessárias para alcançar o máximo de
        produtividade. Podemos ajudar você a encontrar a solução ideal para as
        necessidades da sua empresa.
      </Text>

      <Flex gap="30px">
        <Button
          bg="purple.100"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineheight="24px"
          h="50px"
          w="150px"
          as="a"
          target="blank"
          href="https://workstation.razor.com.br/?utm_term=workstation&utm_campaign=%5BSEARCH%5D+Workstation+PRO&utm_source=adwords&utm_medium=ppc&hsa_acc=1759132440&hsa_cam=2057540058&hsa_grp=81692506208&hsa_ad=361245597546&hsa_src=g&hsa_tgt=kwd-10641491&hsa_kw=workstation&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwg5uZBhATEiwAhhRLHj3diwJHkxs5A5sEWYIKZhap95-6FiMoBAFgn00uwUbdo7ay20bAdxoCKN4QAvD_BwE"
          _hover={{ backgroundColor: "white", textColor: "black" }}
        >
          Descubra
        </Button>
        <Button
          bg="black.400"
          color="#C5D2DC"
          fontWeight="500"
          fontSize="16px"
          lineheight="24px"
          h="50px"
          w="150px"
          as="a"
          target="blank"
          href="https://workstation.razor.com.br/sobre?utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
          _hover={{ backgroundColor: "white", textColor: "black" }}
        >
          Conheça a Razor
        </Button>
      </Flex>
      <Image src={FotoHeader} />
    </Flex>
  );
};
