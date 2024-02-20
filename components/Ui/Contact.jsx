import React, { useRef, useEffect } from "react";
import {
  Container,
  Image,
  Box,
  HStack,
  Heading,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { attributes } from "../../content/pages/home.md";

function Contact() {
  const { Contact } = attributes;
  const firstStackItems = Contact.content.slice(0, 5);
  const secondStackItems = Contact.content.slice(5, 11);

  return (
    <Stack gap={{ base: "1rem", xl: "4rem" }} pb={{ base: "", xl: "3rem" }}>
      <Container maxW={"900px"} mt={{ base: "3rem", xl: "4rem" }}>
        <HStack
          textAlign={{ base: "center", xl: "left" }}
          flexDir={{ base: "column", xl: "row" }}
          justifyContent={"space-between"}
          gap={{ base: "1rem", xl: "2rem" }}
        >
          <Heading
            w={{ base: "100%", xl: "700px" }}
            fontSize={{ base: "lg", xl: "xl" }}
          >
            {Contact.contactHeading}
          </Heading>
          <Button
            size={{ base: "sm", xl: "sm" }}
            borderRadius={"2px"}
            borderColor={"#1C75BC"}
            variant={"outline"}
            color={"#1C75BC"}
            fontWeight={"500"}
            w="150px"
            h="70px"
            borderWidth={"1px"}
          >
            Contact Us Now
          </Button>
        </HStack>
        <HStack
          mt="2rem"
          gap={{ base: "1rem", xl: "2rem" }}
          alignItems="left"
          justifyContent={{ base: "left", xl: "space-between" }}
          flexDir={{ base: "column", xl: "row" }}
        >
          {/* First Stack */}
          <Stack gap={{ base: "1rem", xl: "2rem" }}>
            {firstStackItems.map((item, index) => (
              <Text
                key={index}
                fontSize={{ base: "sm", xl: "15px" }}
                color="#1d2433"
                fontWeight="500"
                px={{ base: "10px", xl: "" }}
                textAlign={{ base: "left", xl: "left" }}
              >
                {item.heading}
              </Text>
            ))}
          </Stack>

          {/* Second Stack */}
          <Stack gap={{ base: "1rem", xl: "2rem" }}>
            {secondStackItems.map((item, index) => (
              <Text
                key={index + 5} // Adjust the key to avoid duplicates with the first stack
                fontSize={{ base: "sm", xl: "15px" }}
                color="#1d2433"
                fontWeight="500"
                px={{ base: "10px", xl: "" }}
                textAlign={{ base: "left", xl: "right" }}
              >
                {item.heading}
              </Text>
            ))}
          </Stack>
        </HStack>
      </Container>
    </Stack>
  );
}

export default Contact;
