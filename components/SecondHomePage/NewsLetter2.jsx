import {
  Container,
  Stack,
  HStack,
  Text,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";

const NewsLetter2 = () => {
  return (
    <Container bg="#fff" maxWidth="1200px" w="100%">
      <Stack
        bg="url('/images/secondhomepagebg.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="320px"
        alignItems={{ base: "center", xl: "" }}
        justifyContent={{ base: "center", xl: "center" }}
      >
        <Stack
          // bg="rgba(225, 230, 239, 0.8)"
          mx={{ base: "2rem", xl: "5rem" }}
          overflow="hidden"
          p="2rem"
          gap="1.5rem"
        >
          <HStack
            textAlign={{ base: "center", xl: "left" }}
            flexDir={{ base: "column", xl: "column" }}
            gap={{ base: "1rem", xl: "" }}
            w={{ base: "100%", xl: "50%" }}
          >
            <Heading w="100%" fontSize={{ base: "lg", xl: "2xl" }}>
              Sign up for our newsletter
            </Heading>

            <Text
              textAlign={{ base: "center", xl: "left" }}
              fontSize={{ base: "sm", xl: "sm" }}
              fontWeight={"500"}
              color="#1D2433"
            >
              We pride ourselves on keeping up-to-date with the latest market
              trends and property values to ensure you get the best deal.
            </Text>
          </HStack>

          <HStack w={{ base: "100%", xl: "50%" }}>
            <Input
              h="50px"
              bg="#fff"
              placeholder="Enter your email"
              _placeholder={{ fontSize: "12px" }}
            />
            <Button
              size={"sm"}
              color="#fff"
              borderRadius={"4px"}
              w="177px"
              bg="#1C75BC"
              h="50px"
            >
              Subscribe
            </Button>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NewsLetter2;
