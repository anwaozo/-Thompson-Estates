import React from "react";
import Link from "next/link";
import {
  Box,
  HStack,
  Container,
  Heading,
  Button,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const BlogPosts = ({ BlogPostsList }) => {
  return (
    <Box bg="#F8F9FC" pt="1rem">
      <Container maxW={"1100px"} pb={{ base: "", xl: "4rem" }}>
        <HStack
          alignItems="center"
          mt={{ base: "3rem", xl: "4rem" }}
          justifyContent="space-between"
          mb={{ base: "1.5rem", xl: "2rem" }}
        >
          <Heading fontSize={{ base: "lg", xl: "xl" }}>Blog Posts</Heading>
          <Link href={"/blog"}>
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
              View All
            </Button>
          </Link>
        </HStack>
        <Stack>
          {BlogPostsList.slice(0, 3).map((posts, index) => (
            <HStack
              flexDir={{ base: "column", xl: "row" }}
              gap="1rem"
              key={index}
              borderTop={"1px solid #939598"}
              borderBottom={"1px solid #939598"}
            >
              <Image src={posts.attributes.image} alt="" />
              <Stack textAlign={{ base: "center", xl: "left" }}>
                <Heading fontSize={{ base: "sm", xl: "md" }}>
                  {posts.attributes.title}
                </Heading>
                <Link href="/blog/post/[slug]" as={`/blog/post/${posts.slug}`}>
                  <HStack
                    alignItems={{ base: "center", xl: "left" }}
                    justifyContent={{ base: "center", xl: "left" }}
                    cursor="pointer"
                    flexDir={{ base: "column", xl: "row" }}
                  >
                    <Text
                      textAlign={{ base: "center", xl: "left" }}
                      color="#1D2433"
                      w="70%"
                      fontSize={{ base: "sm", xl: "xs" }}
                    >
                      {posts.attributes.description}
                    </Text>
                    <IoArrowForwardCircleOutline
                      color="#000000"
                      fontSize={"30px"}
                    />
                  </HStack>
                </Link>
              </Stack>
            </HStack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPosts;
