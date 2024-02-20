import { HStack, Flex, IconButton, Text, Link } from "@chakra-ui/react";
import React from "react";

const DesktopNav = ({ color }) => {
  return (
    <>
      <HStack
        gap="2rem"
        display={{ base: "none", xl: "flex" }}
        fontSize={"sm"}
        fontWeight={"500"}
        fontStyle={"normal"}
        color={color}
        cursor={"pointer"}
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
      </HStack>
    </>
  );
};

export default DesktopNav;
