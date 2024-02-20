import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Image,
  Container,
  Stack,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { attributes } from "../../content/pages/home.md";
const FAQs2 = () => {
  const { Faqs } = attributes;
  return (
    <Box py="5rem">
      <Container bg="#fff" maxWidth="1100px">
        <Flex
          flexDir={{ base: "column", xl: "column" }}
          alignItems={{ base: "", xl: "none" }}
          justifyContent={{ base: "", xl: "none" }}
          w="100%"
          gap="2rem"
        >
          <Stack gap="1rem" textAlign={{ base: "center", xl: "left" }}>
            <Heading fontSize={{ base: "24px", xl: "24px" }} color="#000">
              Frequently Asked Questions
            </Heading>

            <Link
              // as={Flex}
              href="/FaqPage"
              gap="0.2rem"
              display={{ base: "none", xl: "flex" }}
              alignItems={"center"}
              justifyContent={"left"}
              fontSize={"12px"}
              fontWeight={"600"}
              color={"#1C75BC"}
            >
              More FAQs
            </Link>
          </Stack>
          <Accordion allowToggle w={{ base: "100%", xl: "100%" }}>
            {Faqs.contents.slice(0, 5).map((items, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton p={"10px"} color="#333">
                    <Box
                      as={Flex}
                      flex="1"
                      fontSize={{ base: "sm", lg: "sm" }}
                      textAlign="left"
                      alignItems={"center"}
                      gap="1rem"
                      color="#333"
                    >
                      {items.question}
                    </Box>
                    <Box>
                      <IoArrowDownCircleOutline fontSize={"30px"} />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="#333"
                  fontSize={{ base: "sm", lg: "md" }}
                  pb={4}
                >
                  {items.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            // as={Flex}
            href="/FaqPage"
            gap="0.2rem"
            display={{ base: "flex", xl: "none" }}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={"12px"}
            fontWeight={"600"}
            color={"#1C75BC"}
          >
            More FAQs
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQs2;
