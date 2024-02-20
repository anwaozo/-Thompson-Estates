import React from "react";
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
  Link,
  Button,
} from "@chakra-ui/react";
import {
  MdOutlineBedroomChild,
  MdOutlineBathtub,
  MdOutlineLocalCarWash,
} from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Properties2 = ({ PropertiesList }) => {
  return (
    <Container maxW={"1100px"} pb={{ base: "", xl: "4rem" }}>
      <HStack
        alignItems="center"
        mt={{ base: "3rem", xl: "4rem" }}
        justifyContent="space-between"
        mb={{ base: "1.5rem", xl: "2rem" }}
      >
        <Heading fontSize={{ base: "lg", xl: "xl" }}>Properties</Heading>
      </HStack>

      <SimpleGrid columns={{ base: 1, xl: 3 }} spacing="1.5rem">
        {PropertiesList.slice(0, 6).map((i, index) => (
          <Stack w="100%" key={index}>
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
                <HStack
                  as={Link}
                  href=""
                  gap="0rem"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="13px">View</Text> <MdChevronRight />
                </HStack>
              </HStack>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>

      <Button
        mt={{ base: "3rem", xl: "4rem" }}
        bg="#000"
        size={{ base: "sm", xl: "sm" }}
        borderRadius={"12px"}
        borderColor={"#1C75BC"}
        variant={"outline"}
        color={"#fff"}
        fontWeight={"500"}
        w="150px"
        h="70px"
        borderWidth={"1px"}
      >
        View All
      </Button>
    </Container>
  );
};

export default Properties2;
