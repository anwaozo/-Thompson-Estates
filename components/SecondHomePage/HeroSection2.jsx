import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Heading,
  HStack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { attributes } from "../../content/pages/home.md";
const HeroSection2 = () => {
  const { HeroSection } = attributes;
  return (
    <>
      <Stack
        gap="3rem"
        borderBottom={"1px solid #939598"}
        pb={{ base: "2rem", xl: "4rem" }}
        bgImage={`url(${HeroSection.Homepage2bg})`}
        h={{ base: "100%", xl: "100vh" }}
        bgRepeat="no-repeat"
        bgSize="cover"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          as={Flex}
          flexDir={"column"}
          justifyContent={"left"}
          alignItems={"left"}
          maxW={"1200px"}
          mt={{ base: "10rem", xl: "10rem" }}
          gap="1rem"
        >
          <Stack
            color="rgba(255, 255, 255, 1)"
            textAlign={{ base: "center", xl: "left" }}
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              color="rgba(255, 255, 255, 1)"
              pr={{ base: "none", xl: "10rem" }}
              fontSize={{ base: "40px", xl: "55px" }}
            >
              {HeroSection.Heading}
            </Heading>

            <Text
              fontSize={{ base: "sm", xl: "md" }}
              fontWeight={"500"}
              color="rgba(255, 255, 255, 1)"
              pr={{ base: "none", xl: "20rem" }}
            >
              {HeroSection.subHeading}
            </Text>
          </Stack>
          <Flex
            flexDir="row"
            alignItems={{ base: "center", xl: "left" }}
            justifyContent={{ base: "center", xl: "left" }}
          >
            <Button
              size={"sm"}
              color="#000"
              borderRadius={"10px"}
              w="200px"
              bg="#fff"
              h="50px"
            >
              Browse Properties
            </Button>
          </Flex>
        </Container>
      </Stack>
    </>
  );
};

export default HeroSection2;
