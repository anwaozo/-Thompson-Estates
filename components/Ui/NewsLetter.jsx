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

const NewsLetter = () => {
  return (
    <Container bg="#fff" maxWidth="1200px">
      <Stack
        bg="url('/images/newsletterbg.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="320px"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          bg="rgba(225, 230, 239, 0.8)"
          mx={{ base: "2rem", xl: "5rem" }}
          overflow="hidden"
          p="2rem"
          gap="1.5rem"
        >
          <HStack
            textAlign={{ base: "center", xl: "left" }}
            flexDir={{ base: "column", xl: "row" }}
            gap={{ base: "1rem", xl: "" }}
          >
            <Heading w="100%" fontSize={{ base: "lg", xl: "2xl" }}>
              Sign up for our newsletter
            </Heading>
            <Stack gap={{ base: "1rem", xl: "" }}>
              <Text
                fontSize={{ base: "sm", xl: "sm" }}
                fontWeight={"500"}
                color="#1D2433"
              >
                We pride ourselves on keeping up-to-date with the latest market
                trends and property values to ensure you get the best deal.
              </Text>
            </Stack>
          </HStack>

          <HStack>
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

export default NewsLetter;
