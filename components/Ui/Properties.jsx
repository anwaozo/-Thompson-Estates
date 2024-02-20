import React from "react";
import Link from "next/link";
import {
  Stack,
  Flex,
  Text,
  Box,
  Image,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import {
  MdOutlineBedroomChild,
  MdOutlineBathtub,
  MdOutlineLocalCarWash,
} from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Properties = ({ PropertiesList }) => {
  return (
    <Container maxW={"1100px"} pb={{ base: "", xl: "4rem" }}>
      <HStack
        alignItems="center"
        mt={{ base: "3rem", xl: "4rem" }}
        justifyContent="space-between"
        mb={{ base: "1.5rem", xl: "2rem" }}
      >
        <Heading fontSize={{ base: "lg", xl: "xl" }}>Properties</Heading>
        <Link href={"/Properties"}>
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

      <Flex
        w="100%"
        justifyContent={{ base: "", xl: "center" }}
        flexDir={{ base: "column", xl: "row" }}
        gap="1rem"
      >
        <Box h="100%" display={{ base: "none", xl: "flex" }}>
          {PropertiesList.map((i, index) => (
            <Stack
              border="1px solid #eee"
              display={index === 0 ? "flex" : "none"}
              key={index}
              rowSpan={index === 0 ? 2 : 1}
              colSpan={index === 0 ? 2 : 1}
            >
              <Image h="400px" src={i.attributes.image} alt="" />
              <Stack w="100%" h="100%" px="2rem" py="4rem">
                <Heading fontSize={{ base: "md", xl: "xl" }}>
                  {i.attributes.PropertyName}
                </Heading>
                <Text color="#1D2433" fontSize={{ base: "sm", xl: "sm" }}>
                  {i.attributes.location}
                </Text>
                <HStack
                  gap={{ base: "2rem", xl: "4rem" }}
                  color="#1D2433"
                  fontSize={{ base: "xs", xl: "12px" }}
                >
                  <HStack>
                    <MdOutlineBedroomChild color="#1D2433" />
                    <Text>{i.attributes.noofbeds} Beds</Text>
                  </HStack>
                  <HStack>
                    <MdOutlineBathtub color="#1D2433" />
                    <Text>{i.attributes.noofbaths} Baths</Text>
                  </HStack>
                  <HStack>
                    <MdOutlineLocalCarWash color="#1D2433" />
                    <Text>{i.attributes.noofparking} Parking</Text>
                  </HStack>
                </HStack>
                <HStack mt="1rem" gap="2rem">
                  <Box border="1px solid #000 " p="0.5rem">
                    <Heading fontSize={{ base: "md", xl: "xl" }}>
                      {i.attributes.amount}
                    </Heading>
                  </Box>
                  <Link
                    href="/singleProperty/[slug]"
                    as={`/singleProperty/${i.slug}`}
                  >
                    <HStack
                      href=""
                      gap="0rem"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="13px">View</Text> <MdChevronRight />
                    </HStack>
                  </Link>
                </HStack>
              </Stack>
            </Stack>
          ))}
        </Box>
        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing="1rem">
          {PropertiesList.slice(0, 5).map((i, index) => (
            <Stack
              border="1px solid #eee"
              display={index === 0 ? "none" : "flex"}
              key={index}
            >
              <Image h="171px" src={i.attributes.image} alt="" />
              <Stack w="100%" h="100%" px="1rem">
                <Heading fontSize={{ base: "sm", xl: "md" }}>
                  {i.attributes.PropertyName}
                </Heading>
                <Text color="#1D2433" fontSize={{ base: "sm", xl: "xs" }}>
                  {i.attributes.location}
                </Text>
                <HStack
                  gap={{ base: "2rem", xl: "1rem" }}
                  color="#1D2433"
                  fontSize={{ base: "xs", xl: "12px" }}
                >
                  <HStack>
                    <MdOutlineBedroomChild color="#1D2433" />
                    <Text>{i.attributes.noofbeds} Beds</Text>
                  </HStack>
                  <HStack>
                    <MdOutlineBathtub color="#1D2433" />
                    <Text>{i.attributes.noofbaths} Baths</Text>
                  </HStack>
                  <HStack>
                    <MdOutlineLocalCarWash color="#1D2433" />
                    <Text>{i.attributes.noofparking} Parking</Text>
                  </HStack>
                </HStack>
                <HStack mt="1rem" gap="2rem">
                  <Box border="1px solid #000 " p="0.5rem">
                    <Heading fontSize={{ base: "md", xl: "xl" }}>
                      {i.attributes.amount}
                    </Heading>
                  </Box>
                  <Link
                    href="/singleProperty/[slug]"
                    as={`/singleProperty/${i.slug}`}
                  >
                    <HStack
                      href=""
                      gap="0rem"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="13px">View</Text> <MdChevronRight />
                    </HStack>
                  </Link>
                </HStack>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Properties;
