import { Flex, IconButton, Link, Stack, Text, Button } from "@chakra-ui/react";
import React from "react";

const MobileNav = ({ bg, color, btnbgcolor, btncolor }) => {
  return (
    <Stack
      gap="2rem"
      fontSize={"14px"}
      fontWeight={"500"}
      fontStyle={"normal"}
      color={color}
      bg={bg}
      cursor={"pointer"}
      p="2rem"
      textAlign={"left"}
    >
      <Text as={Link} href="/">
        Homepage1
      </Text>
      <Text as={Link} href="/homepage2">
        Homepage2
      </Text>
      <Text as={Link} href="/About">
        About
      </Text>
      <Text as={Link} href="">
        Features
      </Text>
      <Text as={Link} href="">
        Pricing
      </Text>

      <Button
        borderRadius={"2px"}
        borderColor={"#000"}
        fontSize={"14px"}
        variant={"outline"}
        color={btncolor}
        fontWeight={"500"}
        p="16px, 24px, 16px, 24px"
        borderWidth={"1px"}
        bg={btnbgcolor}
      >
        GET STARTED
      </Button>
    </Stack>
  );
};

export default MobileNav;
