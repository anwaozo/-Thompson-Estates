import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Apartments2 = ({ ApartmentsList }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Set this to true for continuous autoplay
    autoplaySpeed: 3000, // Set the duration (in milliseconds) between slides

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxW={"1100px"} pb={{ base: "", xl: "4rem" }} overflow="hidden">
      <Heading
        mt={{ base: "3rem", xl: "4rem" }}
        fontSize={{ base: "lg", xl: "xl" }}
        mb={{ base: "1.5rem", xl: "2rem" }}
      >
        Discover Apartments
      </Heading>
      <Box>
        <Slider {...sliderSettings}>
          {ApartmentsList.map((apart) => (
            <Box key={apart.slug}>
              <Box mr={{ base: "1rem", xl: "2rem" }}>
                <Image src={apart.attributes.image} alt="" />
                <Text
                  fontSize={{ base: "sm", xl: "md" }}
                  color="#000"
                  textDecor={"underline"}
                  fontWeight={"700"}
                  px="10px"
                  pb="15px"
                >
                  {apart.attributes.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Apartments2;
