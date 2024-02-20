import {
  Container,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  Link,
  Collapse,
  Button,
  Box,
} from "@chakra-ui/react";
import DesktopNav from "../DesktopNav";
import Hamburger from "@/assets/Icons/Hamburger";
import MobileNav from "../MobileNav";
import React from "react";
import Logo, { DarkLogo } from "../Ui/Logo";
import { AiOutlineClose } from "react-icons/ai";
const Navbar2 = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Stack bg="rgba(0, 0, 0, 0.45)" position={"fixed"} w="100%" zIndex={500}>
      <Container maxW={"1200px"}>
        <Flex
          py="15px"
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ base: "1rem", xl: "" }}
        >
          <Link href="/">
            <DarkLogo />
          </Link>

          <DesktopNav color={"#fff"} />
          <Box display={{ base: "none", xl: "flex" }}>
            <Button
              size={"sm"}
              color="#000"
              borderRadius={"10px"}
              w="200px"
              bg="#fff"
              h="50px"
            >
              GET STARTED
            </Button>
          </Box>

          <Flex display={{ base: "flex", xl: "none" }}>
            <IconButton
              onClick={onToggle}
              bg="none"
              _hover={{ bg: "none" }}
              icon={
                isOpen ? (
                  <AiOutlineClose size="1.5rem" color="#fff" />
                ) : (
                  <Hamburger color="#fff" w="1.5rem" />
                )
              }
              aria-label={"icon"}
            />
          </Flex>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          color="#fff"
          bg="rgba(0, 0, 0, 0.45)"
          display={{ xl: "none" }}
          onClick={onClose}
        >
          <MobileNav
            color="#fff"
            bg="rgba(0, 0, 0, 0.45)"
            btnbgcolor={"#fff"}
            btncolor={"#000"}
          />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Navbar2;
