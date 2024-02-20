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
import DesktopNav from "./DesktopNav";
import Hamburger from "@/assets/Icons/Hamburger";
import MobileNav from "./MobileNav";
import React from "react";
import Logo from "./Ui/Logo";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Stack
      bg="#fff"
      position={"fixed"}
      w="100%"
      zIndex={500}
      borderBottom={"1px solid #939598"}
    >
      <Container maxW={"1200px"}>
        <Flex
          py="15px"
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ base: "1rem", xl: "" }}
        >
          <Link href="/">
            <Logo />
          </Link>
          <DesktopNav color={"#000"} />
          <Box display={{ base: "none", xl: "flex" }}>
            <Button
              size={{ base: "sm", xl: "sm" }}
              borderRadius={"2px"}
              borderColor={"#000000"}
              variant={"outline"}
              color={"#000000"}
              fontWeight={"500"}
              w="150px"
              h="70px"
              borderWidth={"1px"}
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
                  <AiOutlineClose size="1.5rem" color="#000" />
                ) : (
                  <Hamburger color="#000" w="1.5rem" />
                )
              }
              aria-label={"icon"}
            />
          </Flex>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          color="white"
          bg="#fff"
          display={{ xl: "none" }}
          onClick={onClose}
        >
          <MobileNav bg={"#fff"} color={"#000"} />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Navbar;
