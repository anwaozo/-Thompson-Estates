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
const Post = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>;

  const { html, attributes } = blogpost;

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
                  {attributes.title}
                </Heading>

                <Text
                  fontSize={{ base: "sm", xl: "md" }}
                  fontWeight={"500"}
                  color="#212121"
                >
                  {/* {WelcomeSection.subHeading} */}
                </Text>
              </Flex>
              <HStack
                fontSize={{ base: "sm", xl: "md" }}
                fontFamily={"Plus Jakarta Sans"}
                fontWeight={"700"}
              >
                <Link>Home</Link>
                <Box h="20px" w="2px" bg="#000" />
                <Link>Blogs</Link>
              </HStack>
            </Flex>
            <Box>
              {" "}
              <Image src={attributes.image} alt="" />
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Container maxW={"1200px"} mt="3rem">
        <Flex flexDir={{ base: "column", xl: "row" }} gap="2rem">
          <Stack>
            <Heading>Introduction</Heading>
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
              Subscribe to Newsletter
            </Heading>
            <Text fontSize={{ base: "sm", xl: "sm" }}>
              Subscribe to receive the latest blog posts to your inbox every
              week.
            </Text>
            <HStack w={{ base: "100%", xl: "400px" }}>
              <Input
                borderRadius={"0px"}
                placeholder="Enter your Email"
                _placeholder={{ fontSize: "14px" }}
              />
            </HStack>

            <Button
              borderRadius={"0px"}
              color="#fff"
              bg="rgba(28, 117, 188, 1)"
              size={"md"}
              fontSize={"sm"}
            >
              Subscribe
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "/blog/post"))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
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

  const blogpost = await import(`../../../blog/post/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      blogpost: blogpost.default,
    },
  };
}

export default Post;
