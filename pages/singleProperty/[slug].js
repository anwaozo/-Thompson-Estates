import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import {
  Image,
  Stack,
  Container,
  Flex,
  Box,
  HStack,
  Heading,
  Text,
  Link,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Contact from "@/components/Ui/Contact";
const Post = ({ singleproperty }) => {
  if (!singleproperty) return <div>not found</div>;

  const { html, attributes } = singleproperty;

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
                  {attributes.PropertyName}
                </Heading>

                <Text
                  fontSize={{ base: "sm", xl: "md" }}
                  fontWeight={"500"}
                  color="#212121"
                >
                  {attributes.location}
                </Text>
                <Text
                  fontSize={{ base: "md", xl: "lg" }}
                  fontWeight={"700"}
                  color="#212121"
                >
                  {attributes.amount}
                </Text>
              </Flex>
              <HStack
                fontSize={{ base: "sm", xl: "md" }}
                fontFamily={"Plus Jakarta Sans"}
                fontWeight={"700"}
              >
                <Link>Home</Link>
                <Box h="20px" w="2px" bg="#000" />
                <Link>All Properties</Link>
              </HStack>
            </Flex>
            <Box>
              {" "}
              <Image src={attributes.image} alt="" w="400px" />
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Container maxW={"1200px"} mt="3rem">
        <Flex flexDir={{ base: "column", xl: "row" }} gap="2rem">
          <Stack>
            <Box
              fontSize={{ base: "sm", xl: "md" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Stack>

          <Stack
            gap="1rem"
            h="100%"
            w="100%"
            border={"1px solid #eee"}
            p="1rem"
            borderRadius={"0px"}
          >
            <Heading fontSize={{ base: "sm", xl: "md" }}>
              I’m interested in this property
            </Heading>

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
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "/properties"))
    .map((PropertyName) => {
      const trimmedName = PropertyName.substring(0, PropertyName.length - 3);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const singleproperty = await import(`../../properties/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      singleproperty: singleproperty.default,
    },
  };
}

export default Post;
