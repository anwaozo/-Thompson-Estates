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
const HeroSection = () => {
  const { HeroSection } = attributes;
  return (
    <>
      <Stack
        gap="3rem"
        borderBottom={"1px solid #939598"}
        pb={{ base: "", xl: "4rem" }}
      >
        <Container maxW={"1200px"} mt={{ base: "8rem", xl: "8rem" }}>
          <HStack
            textAlign={{ base: "center", xl: "left" }}
            flexDir={{ base: "column", xl: "row" }}
          >
            <Heading fontSize={{ base: "40px", xl: "55px" }}>
              {HeroSection.Heading}
            </Heading>
            <Stack gap={{ base: "1rem", xl: "2.5rem" }}>
              <Text
                fontSize={{ base: "sm", xl: "md" }}
                fontWeight={"500"}
                color="#212121"
              >
                {HeroSection.subHeading}
              </Text>
              <Flex
                alignItems={{ base: "center", xl: "left" }}
                justifyContent={{ base: "center", xl: "left" }}
              >
                <Button
                  size={"sm"}
                  color="#fff"
                  borderRadius={"4px"}
                  w="177px"
                  bg="#1C75BC"
                  h="50px"
                >
                  Get Started
                </Button>
              </Flex>
            </Stack>
          </HStack>
        </Container>
        <Container maxW={"1400px"}>
          <HStack
            pb={{ base: "4rem", xl: "0rem" }}
            flexDir={{ base: "column", xl: "row" }}
            bgColor={"#F8F9FC"}
          >
            <Stack direction={{ base: "row", xl: "row" }}>
              <Image
                boxSize={{ base: "250px", xl: "50%" }}
                objectFit="cover"
                src={HeroSection.heroImage1}
                alt=""
              />

              <Image
                boxSize={{ base: "250px", xl: "265px" }}
                objectFit="cover"
                src={HeroSection.heroImage2}
                alt=""
              />
            </Stack>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap="0.2rem"
              mt={{ base: "2rem", xl: "0rem" }}
            >
              <Text fontWeight={"700"} fontSize={{ base: "sm", xl: "md" }}>
                Over 140 properties
              </Text>
              <HStack as={Link} href="/Properties" gap="2px">
                <Text color="#1C75BC" fontSize={"xs"}>
                  View All
                </Text>
                <MdArrowOutward fontSize={"15px"} color="#1C75BC" />
              </HStack>
            </Flex>
          </HStack>
        </Container>
      </Stack>
    </>
  );
};

export default HeroSection;
