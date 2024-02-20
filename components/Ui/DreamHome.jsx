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
const DreamHome = () => {
  const { DreamHome } = attributes;
  return (
    <>
      <Stack
        gap={{ base: "1rem", xl: "4rem" }}
        borderBottom={"1px solid #939598"}
        pb={{ base: "", xl: "4rem" }}
      >
        <Container maxW={"1100px"} mt={{ base: "3rem", xl: "4rem" }}>
          <HStack
            textAlign={{ base: "center", xl: "left" }}
            flexDir={{ base: "column", xl: "row" }}
            gap={{ base: "1rem", xl: "2rem" }}
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
          </HStack>
          <HStack
            mt="2rem"
            alignItems={"center"}
            justifyContent={{ base: "center", xl: "center" }}
            flexDir={{ base: "column", xl: "row" }}
            borderTop={"1px solid #939598"}
          >
            {DreamHome.features.map((i, index) => (
              <HStack
                border="1px solid #939598"
                gap="2rem"
                w={{ base: "100%", xl: "100%" }}
                key={index}
              >
                <Box>
                  <Image alt="" src={i.image} />
                </Box>
                <Text
                  fontSize={{ base: "xs", xl: "sm" }}
                  color={"#000"}
                  fontWeight={"500"}
                  px={{ base: "10px", xl: "" }}
                  w={{ base: "100%", xl: "100px" }}
                >
                  {i.title}
                </Text>
              </HStack>
            ))}
          </HStack>
        </Container>
      </Stack>
    </>
  );
};

export default DreamHome;
