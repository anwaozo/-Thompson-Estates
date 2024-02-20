import { Inter } from "next/font/google";
import HeroSection from "@/components/Ui/HeroSection";
import Layout from "@/components/Layout";
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
import Apartments from "@/components/Ui/Apartments";
const inter = Inter({ subsets: ["latin"] });

const importProperties = async () => {
  const markdownFiles = require
    .context("../../properties", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../../properties/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};
const importApartments = async () => {
  const markdownFiles = require
    .context("../../Apartments", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../../Apartments/${path}`);
      return { attributes, slug: path.substring(0, path.length - 3) };
    })
  );
};

const PropertiesPage = ({ PropertiesList, ApartmentsList }) => (
  <Layout>
    <Container
      pt={{ base: "6rem", xl: "8rem" }}
      maxW={"900px"}
      pb={{ base: "", xl: "4rem" }}
    >
      <HStack
        alignItems="center"
        justifyContent="space-between"
        mb={{ base: "1.5rem", xl: "2rem" }}
      >
        <Heading fontSize={{ base: "lg", xl: "3xl" }}>Properties</Heading>
      </HStack>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing="1rem">
        {PropertiesList.slice(0, 7).map((i, index) => (
          <Stack border="1px solid #eee" key={index}>
            <Image h="171px" src={i.attributes.image} alt="" />
            <Stack py="2rem" w="100%" h="100%" px="1rem">
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
    </Container>
    <Apartments ApartmentsList={ApartmentsList} />
  </Layout>
);
export async function getStaticProps() {
  const PropertiesList = await importProperties();
  const ApartmentsList = await importApartments();

  return {
    props: {
      PropertiesList,
      ApartmentsList,
    }, // will be passed to the page component as props
  };
}

export default PropertiesPage;
