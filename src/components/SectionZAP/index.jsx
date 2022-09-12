import { Flex, Image, Button } from "@chakra-ui/react";
import { HeadingSections } from "../ui/HeadingSections";

export const SectionZAP = () => {
    return (
        <Flex flexDir="row" justify="center" >
            <Image src="../public/images/logo-razor-zap.svg" alt="Logo razor"/>
            <Flex flexDir="column" maxW="428px" align="center">
                <HeadingSections HighlightTitle="ZAP" title="Ainda tem dúvidas? Chama no ZAP" text="" />
                <Button

                    as="a"
                    href="https://api.whatsapp.com/send?phone=555430466350&text=Olá. Estou no site da Razor e gostaria de mais informações."
                    bg="purple.100"
                    color="#C5D2DC"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="24px"
                    py="12px"
                    w="150px"
                >
                    chama papai
                </Button>
            </Flex>
        </Flex>
    );
}