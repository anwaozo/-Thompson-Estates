import React from "react";
import {
  Box,
  HStack,
  Container,
  Heading,
  Button,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
const BlogPosts2 = ({ BlogPostsList }) => {
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
        </HStack>
        <Stack>
          {BlogPostsList.slice(0, 3).map((posts, index) => (
            <HStack
              flexDir={{ base: "column", xl: "row" }}
              gap="1rem"
              key={index}
              borderTop={"1px solid #939598"}
              borderBottom={{ base: "none", xl: "1px solid #939598" }}
            >
              <Image src={posts.attributes.image} alt="" />
              <Stack textAlign={{ base: "center", xl: "left" }}>
                <Heading fontSize={{ base: "sm", xl: "md" }}>
                  {posts.attributes.title}
                </Heading>

                <Text
                  textAlign={{ base: "center", xl: "left" }}
                  color="#1D2433"
                  w={{ base: "100%", xl: "70%" }}
                  fontSize={{ base: "sm", xl: "xs" }}
                >
                  {posts.attributes.description}
                </Text>
                <HStack
                  as={Link}
                  href=""
                  gap="0rem"
                  alignItems="center"
                  justifyContent={{ base: "center", xl: "left" }}
                  color="rgba(28, 117, 188, 1)"
                >
                  <Text fontSize="13px">Read Post</Text> <MdChevronRight />
                </HStack>
              </Stack>
            </HStack>
          ))}
        </Stack>
        <Button
          mt={{ base: "3rem", xl: "4rem" }}
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
      </Container>
    </Box>
  );
};

export default BlogPosts2;
