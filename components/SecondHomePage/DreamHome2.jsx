import React from "react";
import {
  Heading,
  Stack,
  Box,
  Container,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { attributes } from "../../content/pages/home.md";
const DreamHome2 = () => {
  const { DreamHome } = attributes;
  return (
    <>
      <Stack
        gap={{ base: "1rem", xl: "4rem" }}
        borderBottom={"1px solid #939598"}
        pb={{ base: "", xl: "4rem" }}
      >
        <Container maxW={"1100px"} mt={{ base: "3rem", xl: "4rem" }}>
          <Stack
            textAlign={{ base: "center", xl: "left" }}
            flexDir={{ base: "column", xl: "" }}
            gap={{ base: "1rem", xl: "1rem" }}
          >
            <Heading w="100%" fontSize={{ base: "lg", xl: "xl" }}>
              {DreamHome.Heading}
            </Heading>
            <Stack gap={{ base: "1rem", xl: "2.5rem" }}>
              <Text
                fontSize={{ base: "sm", xl: "md" }}
                fontWeight={"500"}
                color="#1D2433"
              >
                {DreamHome.subHeading}
              </Text>
            </Stack>
          </Stack>
          <HStack
            mt="2rem"
            alignItems={"center"}
            justifyContent={{ base: "center", xl: "center" }}
            flexDir={{ base: "column", xl: "row" }}
            pb={{ base: "2rem", xl: "" }}
          >
            {DreamHome.features.map((i, index) => (
              <Stack gap="1rem" w={{ base: "100%", xl: "100%" }} key={index}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image alt="" src={i.image} />
                </Box>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "xs", xl: "sm" }}
                  color={"#000"}
                  fontWeight={"500"}
                  px={{ base: "10px", xl: "" }}
                  w={{ base: "100%", xl: "" }}
                >
                  {i.title}
                </Text>
              </Stack>
            ))}
          </HStack>
        </Container>
      </Stack>
    </>
  );
};

export default DreamHome2;
