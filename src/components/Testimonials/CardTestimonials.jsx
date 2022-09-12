import { Flex, Text, Avatar, Divider } from "@chakra-ui/react";

export const CardTestimonials = ({ image, text, name, role }) => {
    return (
        <Flex
            width="352px"
            height="339px"
            background="#25282C"
            borderRadius="8px"
            boxShadow="0px 4px 24px color:(#FFFFFF 0.25)"
            p="20px"
            alignItems="start"
            flexDir="column"
            gap="10px"
        >
            <Avatar name={name} src={image} width="70px" height="70px" />
            <Text>{text}</Text>
            <Divider />
            <Flex
                gap="5px">
                <Text>{name}</Text>
                <Text color="purple.100">{role}</Text>
            </Flex>
        </Flex>
    );
};