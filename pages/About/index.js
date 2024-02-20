import Layout from "@/components/Layout";
import fs from "fs";
import matter from "gray-matter";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Flex,
  Button,
  Link,
  Box,
  Image,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { html, attributes } from "../../content/pages/about.md";
import Contact from "@/components/Ui/Contact";
const About = () => {
  const { WelcomeSection } = attributes;
  return (
    <Layout>
      <Stack borderBottom={"1px solid #939598"}>
        <Container maxW={"1200px"} mt={{ base: "8rem", xl: "8rem" }}>
          <Stack gap="50px">
            <Flex
              flexDir={{ base: "column", xl: "row" }}
              alignItems={{ base: "center", xl: "left" }}
              justifyContent={{ base: "center", xl: "space-between" }}
              gap="1rem"
            >
              <Flex
                flexDir={"column"}
                gap="0.5rem"
                textAlign={{ base: "center", xl: "left" }}
              >
                <Heading fontSize={{ base: "40px", xl: "55px" }}>
                  {WelcomeSection.heading}
                </Heading>

                <Text
                  fontSize={{ base: "sm", xl: "md" }}
                  fontWeight={"500"}
                  color="#212121"
                >
                  {WelcomeSection.subHeading}
                </Text>
              </Flex>
              <HStack
                fontSize={{ base: "sm", xl: "md" }}
                fontFamily={"Plus Jakarta Sans"}
                fontWeight={"700"}
              >
                <Link>Home</Link>
                <Box h="20px" w="2px" bg="#000" />
                <Link>About Us</Link>
              </HStack>
            </Flex>
            <Image src={WelcomeSection.image} alt="" />
          </Stack>
        </Container>
      </Stack>
      <Container maxW={"1200px"} mt="3rem">
        <Flex flexDir={{ base: "column", xl: "row" }} gap="2rem">
          <Box
            fontSize={{ base: "sm", xl: "md" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Stack
            gap="1rem"
            h="100%"
            w="100%"
            border={"1px solid #eee"}
            p="1rem"
            borderRadius={"0px"}
          >
            <Heading fontSize={{ base: "sm", xl: "md" }}>
              Contact Us Now
            </Heading>
            <Text fontSize={{ base: "sm", xl: "sm" }}>
              Send us a message today, get replied in 2-3 hrs
            </Text>
            <HStack w={{ base: "100%", xl: "400px" }}>
              <Input
                borderRadius={"0px"}
                placeholder="Enter your Name"
                _placeholder={{ fontSize: "14px" }}
              />
              <Input
                borderRadius={"0px"}
                placeholder="Enter your Email"
                _placeholder={{ fontSize: "14px" }}
              />
            </HStack>
            <Textarea
              borderRadius={"0px"}
              placeholder="Type in message subject"
              _placeholder={{ fontSize: "14px" }}
            />
            <Textarea
              borderRadius={"0px"}
              placeholder="Type in message details"
              _placeholder={{ fontSize: "14px" }}
            />
            <Button
              borderRadius={"0px"}
              color="#fff"
              bg="rgba(28, 117, 188, 1)"
              size={"md"}
              fontSize={"sm"}
            >
              Get Enquiry
            </Button>
          </Stack>
        </Flex>
      </Container>
      <Contact />
    </Layout>
  );
};
export default About;
