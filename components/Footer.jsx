import {
  Stack,
  IconButton,
  Text,
  chakra,
  Container,
  Link,
  Select,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { DarkLogo } from "./Ui/Logo";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box py="2rem" bg="#262626" mt={{ base: "5rem", xl: "10rem" }}>
      <Container maxW={"1000px"}>
        <Stack
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          // px="2rem"
          gap="1.5rem"
          borderBottom={"1px solid #B8C2CE "}
          pb="1.5rem"
        >
          <DarkLogo />
          <Stack fontSize={"xs"} textAlign={{ base: "center", xl: "left" }}>
            <Text color={"#EBEEF3"}>About </Text>
            <Text color={"#EBEEF3"}>Contact </Text>
            <Text color={"#EBEEF3"}>Properties </Text>
          </Stack>
          <Stack
            fontSize={"xs"}
            // gap={{ base: "1rem", lg: "8rem" }}
            color={"#EBEEF3"}
            textAlign={{ base: "center", xl: "left" }}
          >
            <Text>Blog</Text>
            <Text>See all resources</Text>
          </Stack>
        </Stack>

        <Stack pt="3rem" alignItems="center" justifyContent="center">
          <HStack color="#fff" fontSize={{ base: "0.7rem", xl: "1rem" }}>
            <Box border="1px solid #fff" borderRadius="30px" p="0.5rem">
              <FaFacebookF />
            </Box>
            <Box border="1px solid #fff" borderRadius="30px" p="0.5rem">
              {" "}
              <FaTwitter />
            </Box>
            <Box border="1px solid #fff" borderRadius="30px" p="0.5rem">
              <FaInstagram />
            </Box>
            <Box border="1px solid #fff" borderRadius="30px" p="0.5rem">
              <FaLinkedinIn />
            </Box>
          </HStack>{" "}
          <Text fontSize={"xs"} textAlign={"center"} color="#EBEEF3">
            Copyright © 2023 Thompson Estates
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
